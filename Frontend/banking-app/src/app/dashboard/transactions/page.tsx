"use client"

import TransactionList from '@/components/TransactionList';
import { useEffect, useState } from 'react';

interface Transaction {
  id: string;
  amount: number;
  type: 'deposit' | 'withdraw';
  timestamp: string;
}

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('/bank-account/transactions', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch transactions');
        }

        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return <TransactionList transactions={transactions} />;
};

export default TransactionsPage;
