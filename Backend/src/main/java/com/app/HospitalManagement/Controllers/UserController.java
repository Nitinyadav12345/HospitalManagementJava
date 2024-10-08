package com.app.HospitalManagement.Controllers;

import com.app.HospitalManagement.dto.LoginDto;
import com.app.HospitalManagement.dto.RegisterDto;
import com.app.HospitalManagement.entites.UserEntity;
import com.app.HospitalManagement.response.ApiResponseSuccess;
import com.app.HospitalManagement.response.ApiResponseToken;
import com.app.HospitalManagement.security.JwtUtils;
import com.app.HospitalManagement.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.ByteArrayOutputStream;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;
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
        ApiResponseSuccess<UserEntity> response = new ApiResponseSuccess<>();
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

    @GetMapping("/profileImage")
    public ResponseEntity<byte[]> getUserImage() {
        log.info("inside the getuserimage method");
        byte[] image = userService.getUserImage();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);
        return new ResponseEntity<>(image, headers, HttpStatus.OK);
    }

    @GetMapping("/profileImage/{id}")
    public ResponseEntity<byte[]> getUserImageall(@PathVariable  Long id) {
        log.info("inside the getUserImageall method");
        byte[] image = userService.getUserImageById(id);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);
        return new ResponseEntity<>(image, headers, HttpStatus.OK);
    }

    @PostMapping("/profileImage/{id}")
    public ResponseEntity updateUserImage(@ModelAttribute RegisterDto user ,@PathVariable Long id ){
        ApiResponseSuccess<String> response = new ApiResponseSuccess<>();
        String res = userService.updateImageUser(user , id);
        return ResponseEntity.ok(response);
    }
}
