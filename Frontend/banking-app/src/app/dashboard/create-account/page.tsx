"use client"

import { useRouter } from 'next/navigation';
import BankAccountForm from '@/components/BankAccountForm';

const CreateAccountPage = () => {
  const router = useRouter();

  const handleCreateAccount = async () => {
    try {
      const response = await fetch('/bank-account/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to create account');
      }

      const data = await response.json();
      console.log('Bank account created successfully:', data);
      router.push('/dashboard');
    } catch (error) {
      console.error('Error during account creation:', error);
    }
  };

  return <BankAccountForm type="create" onSubmit={handleCreateAccount} />;
};

export default CreateAccountPage;
