package com.banking_app.Controller;
import com.banking_app.Entity.BankAccount;
import com.banking_app.Entity.Transaction;
import com.banking_app.Entity.User;
import com.banking_app.Service.BankAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RequestMapping("/bank-account")
@RestController
public class BankAccountController {

    @Autowired
    BankAccountService bankAccountService;

    @PostMapping("/create")
    public ResponseEntity<BankAccount> createBankAccount(Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        BankAccount bankAccount = bankAccountService.createBankAccount(user);
        return ResponseEntity.ok(bankAccount);
    }

    @GetMapping
    public ResponseEntity<Optional<BankAccount>> getBankAccount(Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        Optional<BankAccount> bankAccount = bankAccountService.getBankAccount(user);
        return ResponseEntity.ok(bankAccount);
    }

    @PostMapping("/deposit")
    public ResponseEntity<Transaction> deposit(
            Authentication authentication,
            @RequestParam double amount) {
        User user = (User) authentication.getPrincipal();
        Optional<BankAccount> bankAccount = bankAccountService.getBankAccount(user);
        Transaction transaction = bankAccountService.deposit(bankAccount.get().getId(), amount);
        return ResponseEntity.ok(transaction);
    }

    @PostMapping("/withdraw")
    public ResponseEntity<Transaction> withdraw(
            Authentication authentication,
            @RequestParam double amount) {
        User user = (User) authentication.getPrincipal();
        Optional<BankAccount> bankAccount = bankAccountService.getBankAccount(user);
        Transaction transaction = bankAccountService.withdraw(bankAccount.get().getId(), amount);
        return ResponseEntity.ok(transaction);
    }

    @GetMapping("/transactions")
    public ResponseEntity<List<Transaction>> getTransactions(Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        Optional<BankAccount> bankAccount = bankAccountService.getBankAccount(user);
        List<Transaction> transactions = bankAccountService.getTransactions(bankAccount.get().getId());
        return ResponseEntity.ok(transactions);
    }

}
