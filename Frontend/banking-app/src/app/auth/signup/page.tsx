"use client"

import AuthForm from '@/components/AuthForm';
import { useRouter } from 'next/navigation';

const SignupPage = () => {
  const router = useRouter();

  const handleSignup = async (email: string, password: string) => {
    try {
      const response = await fetch('/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      const data = await response.json();
      console.log('User registered successfully:', data);
      router.push('/auth/login');
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return <AuthForm type="signup" onSubmit={handleSignup} />;
};

export default SignupPage;
