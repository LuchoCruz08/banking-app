import { Landmark } from 'lucide-react';
import React from 'react';

interface Transaction {
  id: string;
  amount: number;
  type: 'deposit' | 'withdraw';
  timestamp: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-green-500"
        >
          <Landmark />
          YourBank
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Transactions
            </h2>
            <ul className="space-y-4 md:space-y-6">
              {transactions.map((transaction) => (
                <li key={transaction.id} className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <div className="flex justify-between">
                    <span>{transaction.type}</span>
                    <span>${transaction.amount}</span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(transaction.timestamp).toLocaleString()}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionList;
