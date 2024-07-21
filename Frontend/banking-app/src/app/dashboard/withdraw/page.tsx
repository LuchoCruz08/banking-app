"use client"

import BankAccountForm from '@/components/BankAccountForm';
import { useRouter } from 'next/navigation';

const WithdrawPage = () => {
  const router = useRouter();

  const handleWithdraw = async (amount?: number) => {
    if (amount === undefined) {
      console.error('Amount is required for withdraw');
      return;
    }
    try {
      const response = await fetch('/bank-account/withdraw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ amount }),
      });

      if (!response.ok) {
        throw new Error('Failed to withdraw');
      }

      const data = await response.json();
      console.log('Withdraw successful:', data);
      router.push('/dashboard');
    } catch (error) {
      console.error('Error during withdraw:', error);
    }
  };

  return <BankAccountForm type="withdraw" onSubmit={handleWithdraw} />;
};

export default WithdrawPage;
