package com.app.HospitalManagement.exception.handler;

import com.app.HospitalManagement.exception.UniqueConstraintViolationException;
import com.app.HospitalManagement.response.ApiResponseFailure;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.naming.AuthenticationException;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(UniqueConstraintViolationException.class)
    @ResponseStatus(code = HttpStatus.OK)
    public ApiResponseFailure<?> exception1(UniqueConstraintViolationException err){
        return new ApiResponseFailure<String>("error" , err.getMessage());
    }
    @ExceptionHandler(AuthenticationException.class)
    @ResponseStatus(code = HttpStatus.UNAUTHORIZED)
    public ApiResponseFailure<?> exception2(AuthenticationException err){
        return new ApiResponseFailure<String>("error" , err.getMessage());
    }
    @ExceptionHandler(RuntimeException.class)
    @ResponseStatus(code  = HttpStatus.UNAUTHORIZED)
    public ApiResponseFailure<?> exception3(RuntimeException err){
        return new ApiResponseFailure<String>("error" , err.getMessage());
    }



}
