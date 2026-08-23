package com.auth.system.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;

import com.auth.system.service.AuthService;
import com.auth.system.dto.LoginDto;
import com.auth.system.dto.RegisterDto;
import com.auth.system.dto.ApiResponseDto;
import com.auth.system.models.AuthModel;


@RestController
@RequestMapping("/auth")
public class AuthController {


    private final AuthService authService;


    public AuthController(AuthService authService) {
        this.authService = authService;
    }



    // Register
    @PostMapping("/register")
    public ApiResponseDto registerUser(
            @RequestBody RegisterDto registerDto
    ) {

        return authService.registerUser(registerDto);

    }




    // Login
    @PostMapping("/login")
    public ApiResponseDto loginUser(
            @RequestBody LoginDto loginDto
    ) {

        return authService.loginUser(loginDto);

    }




    // Update
    @PutMapping("/update")
    public ApiResponseDto updateUser(
            @RequestBody AuthModel authModel
    ) {

        AuthModel updatedUser =
                authService.updateUser(authModel);


        return new ApiResponseDto(
                "User updated successfully",
                updatedUser
        );

    }




    // Delete
    @DeleteMapping("/delete")
    public ApiResponseDto deleteUser(
            @RequestBody AuthModel authModel
    ) {


        authService.deleteUser(authModel);


        return new ApiResponseDto(
                "User deleted successfully",
                null
        );

    }

}