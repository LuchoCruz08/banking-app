const apiUrl = 'http://localhost:8081/bank-account';

export interface BankAccount {
  id: number;
  balance: number;
  userId: number;
}

export interface Transaction {
  id: number;
  amount: number;
  type: string;
  timestamp: string;
  bankAccountId: number;
}

export const createBankAccount = async (token: string) => {
  const response = await fetch(`${apiUrl}/create`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to create bank account');
  }

  return response.json() as Promise<BankAccount>;
};

export const getBankAccount = async (token: string) => {
  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to get bank account');
  }

  return response.json() as Promise<BankAccount>;
};

export const deposit = async (token: string, amount: number) => {
  const response = await fetch(`${apiUrl}/deposit`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount }),
  });

  if (!response.ok) {
    throw new Error('Failed to deposit');
  }

  return response.json() as Promise<Transaction>;
};

export const withdraw = async (token: string, amount: number) => {
  const response = await fetch(`${apiUrl}/withdraw`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount }),
  });

  if (!response.ok) {
    throw new Error('Failed to withdraw');
  }

  return response.json() as Promise<Transaction>;
};

export const getTransactions = async (token: string) => {
  const response = await fetch(`${apiUrl}/transactions`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to get transactions');
  }

  return response.json() as Promise<Transaction[]>;
};
