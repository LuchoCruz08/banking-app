"use client"

import AuthForm from '@/components/AuthForm';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const data = await response.json();
      console.log('User logged in successfully:', data);

      // Save the token in local storage or cookies
      localStorage.setItem('token', data.token);

      // Redirect to the dashboard or another protected route
      router.push('/dashboard');
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
};

export default LoginPage;
