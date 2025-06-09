package com.example.backend.user;

import lombok.Getter;

@Getter
public class LoginRequestDto {
    private String email;
    private String password;
}
