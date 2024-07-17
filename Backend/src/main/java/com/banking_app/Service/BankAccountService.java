package com.banking_app.Service;
import com.banking_app.Entity.BankAccount;
import com.banking_app.Entity.Transaction;
import com.banking_app.Entity.User;
import com.banking_app.Repository.BankAccountRepository;
import com.banking_app.Repository.TransactionRepository;
import com.banking_app.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class BankAccountService {

    @Autowired
    private BankAccountRepository bankAccountRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TransactionRepository transactionRepository;

    public BankAccount createBankAccount(User user) {
        BankAccount bankAccount = new BankAccount();
        bankAccount.setUser(user);
        bankAccount.setBalance(0.0);
        return bankAccountRepository.save(bankAccount);
    }

    public Optional<BankAccount> getBankAccount(User user) {
        return bankAccountRepository.findByUser(user);
    }

    public BankAccount getById(Long id) {
        Optional<BankAccount> bankAccount = bankAccountRepository.findById(id);
        if(bankAccount.isEmpty()) {
            throw new RuntimeException("Bank account not found");
        }
        return bankAccount.get();
    }

    @Transactional
    public Transaction deposit(Long bankAccountId, double amount) {
        BankAccount bankAccount = getById(bankAccountId);
        bankAccount.setBalance(bankAccount.getBalance() + amount);
        bankAccountRepository.save(bankAccount);

        Transaction transaction = new Transaction();
        transaction.setBankAccount(bankAccount);
        transaction.setAmount(amount);
        transaction.setType("DEPOSIT");
        transaction.setCreatedAt(LocalDateTime.now());

        return transactionRepository.save(transaction);
    }

    @Transactional
    public Transaction withdraw(Long bankAccountId, double amount) {
        BankAccount bankAccount = getById(bankAccountId);

        if(bankAccount.getBalance().compareTo(amount) < 0) {
            throw new RuntimeException("Insufficient funds");
        }

        bankAccount.setBalance(bankAccount.getBalance() - amount);
        bankAccountRepository.save(bankAccount);

        Transaction transaction = new Transaction();
        transaction.setBankAccount(bankAccount);
        transaction.setAmount(amount);
        transaction.setType("WITHDRAWAL");
        transaction.setCreatedAt(LocalDateTime.now());

        return transactionRepository.save(transaction);
    }

    public List<Transaction> getTransactions(Long bankAccountId) {
        BankAccount bankAccount = getById(bankAccountId);
        return transactionRepository.findByBankAccount(bankAccount);
    }

}
