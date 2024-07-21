// /components/BankAccountForm.tsx
import { Landmark } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";

interface BankAccountFormProps {
  type: "create" | "deposit" | "withdraw";
  onSubmit: (amount?: number) => void;
}

const BankAccountForm: React.FC<BankAccountFormProps> = ({
  type,
  onSubmit,
}) => {
  const [amount, setAmount] = useState<number | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === "create") {
      onSubmit();
    } else if (amount !== undefined) {
      onSubmit(amount);
    } else {
      alert("Amount is required for deposit and withdraw");
    }
  };

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
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {type === "create"
                ? "Create Bank Account"
                : type === "deposit"
                ? "Deposit"
                : "Withdraw"}
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {type !== "create" && (
                <div>
                  <label
                    htmlFor="amount"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Amount:
                  </label>
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
                    required
                  />
                </div>
              )}
              <Button
                type="submit"
                className="w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {type === "create"
                  ? "Create Account"
                  : type === "deposit"
                  ? "Deposit"
                  : "Withdraw"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankAccountForm;
