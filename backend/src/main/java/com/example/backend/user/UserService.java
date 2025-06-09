package com.example.backend.user;

import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void signup(SignupRequestDto dto){
        if(userRepository.findByEmail(dto.getEmail()).isPresent()){
            throw new RuntimeException("이미 존재하는 이메일입니다.");
        }
        User user = User.builder()
                .email(dto.getEmail())
                .password(dto.getPassword())
                .build();

        userRepository.save(user);
    }

    public void login(LoginRequestDto dto){
        User user = userRepository.findByEmail(dto.getEmail())
                .orElseThrow(() -> new RuntimeException("이메일이 존재하지 않습니다."));
        if(!user.getPassword().equals(dto.getPassword())){
            throw new RuntimeException("비밀번호가 일치하지 않습니다.");
        }
    }
}
