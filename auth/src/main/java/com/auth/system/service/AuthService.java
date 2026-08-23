package com.auth.system.service;

import org.springframework.stereotype.Service;

import com.auth.system.config.JwtUtil;
import com.auth.system.dto.LoginDto;
import com.auth.system.dto.RegisterDto;
import com.auth.system.dto.ApiResponseDto;
import com.auth.system.models.AuthModel;
import com.auth.system.repository.AuthRepository;

import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashMap;
import java.util.Map;


@Service
public class AuthService {


    private final AuthRepository authRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;


    public AuthService(
            AuthRepository authRepository,
            PasswordEncoder passwordEncoder,
            JwtUtil jwtUtil
    ) {

        this.authRepository = authRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;

    }



    // Register
    public ApiResponseDto registerUser(RegisterDto registerDto) {


        if(authRepository.existsByEmail(registerDto.getEmail())) {

            return new ApiResponseDto(
                    "Email already exists",
                    null
            );

        }


        AuthModel user = new AuthModel();


        user.setUsername(registerDto.getUsername());

        user.setFullName(registerDto.getUsername());

        user.setEmail(registerDto.getEmail());


        // HASH PASSWORD
        user.setPassword(
                passwordEncoder.encode(
                        registerDto.getPassword()
                )
        );


        AuthModel savedUser = authRepository.save(user);



        return new ApiResponseDto(
                "User registered successfully",
                savedUser
        );

    }




    // Login
    public ApiResponseDto loginUser(LoginDto loginDto) {


        AuthModel user = authRepository
                .findByEmail(loginDto.getEmail())
                .orElse(null);



        if(user == null){

            return new ApiResponseDto(
                    "User not found",
                    null
            );

        }



        boolean passwordMatch =
                passwordEncoder.matches(
                        loginDto.getPassword(),
                        user.getPassword()
                );



        if(!passwordMatch){

            return new ApiResponseDto(
                    "Invalid password",
                    null
            );

        }



        // Generate JWT token
        String token = jwtUtil.generateToken(user.getEmail());

        // Create response with token
        Map<String, Object> responseData = new HashMap<>();
        responseData.put("user", user);
        responseData.put("token", token);

        return new ApiResponseDto(
                "Login successful! Welcome back!",
                responseData
        );

    }





    public AuthModel getUserByEmail(String email) {

        return authRepository
                .findByEmail(email)
                .orElse(null);

    }



    public boolean checkIfUserExists(String email) {

        return authRepository.existsByEmail(email);

    }



    public AuthModel updateUser(AuthModel authModel) {

        return authRepository.save(authModel);

    }



    public void deleteUser(AuthModel authModel) {

        authRepository.delete(authModel);

    }

}