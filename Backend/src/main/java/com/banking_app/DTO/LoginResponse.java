package com.banking_app.DTO;
import lombok.Data;

@Data
public class LoginResponse {

    private String token;
    private Long expiresIn;

}