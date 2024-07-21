"use client"

import BankAccountForm from '@/components/BankAccountForm';
import { useRouter } from 'next/navigation';

const DepositPage = () => {
  const router = useRouter();

  const handleDeposit = async (amount?: number) => {
    if (amount === undefined) {
      console.error('Amount is required for deposit');
      return;
    }
    try {
      const response = await fetch('/bank-account/deposit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ amount }),
      });

      if (!response.ok) {
        throw new Error('Failed to deposit');
      }

      const data = await response.json();
      console.log('Deposit successful:', data);
      router.push('/dashboard');
    } catch (error) {
      console.error('Error during deposit:', error);
    }
  };

  return <BankAccountForm type="deposit" onSubmit={handleDeposit} />;
};

export default DepositPage;
