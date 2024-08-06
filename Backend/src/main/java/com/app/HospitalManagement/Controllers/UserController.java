package com.app.HospitalManagement.Controllers;

import com.app.HospitalManagement.dto.LoginDto;
import com.app.HospitalManagement.dto.RegisterDto;
import com.app.HospitalManagement.response.ApiResponseSuccess;
import com.app.HospitalManagement.response.ApiResponseToken;
import com.app.HospitalManagement.security.JwtUtils;
import com.app.HospitalManagement.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin
@Validated
@Slf4j
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private JwtUtils jwtUtils;
    @Autowired
    private AuthenticationManager authMgr;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterDto user) {
        log.info("inside the registerUsermethod user Controller Class {}",user);
        ApiResponseSuccess<String> response = new ApiResponseSuccess<>();
        response.setData(userService.registerUser(user));
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDto loginData){
        log.info("inside the loginUserMethod login function {}" , loginData);
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(loginData.getEmail(),loginData.getPassword());
        Authentication verifiedToken = authMgr.authenticate(token);
        String jwtToken = jwtUtils.generateJwttoken(verifiedToken);
        ApiResponseToken responseToken = new ApiResponseToken("Success",jwtToken);
        return ResponseEntity.ok(responseToken);
    }

}