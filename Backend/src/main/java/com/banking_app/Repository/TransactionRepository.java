package com.banking_app.Repository;
import com.banking_app.Entity.BankAccount;
import com.banking_app.Entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    List<Transaction> findByBankAccount(BankAccount bankAccount);

}
