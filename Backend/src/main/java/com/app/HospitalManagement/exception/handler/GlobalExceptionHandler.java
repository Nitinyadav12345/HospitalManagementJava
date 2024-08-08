package com.app.HospitalManagement.exception.handler;

import com.app.HospitalManagement.exception.ResourceNotFoundException;
import com.app.HospitalManagement.exception.UniqueConstraintViolationException;
import com.app.HospitalManagement.response.ApiResponseFailure;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import java.util.HashMap;
import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import javax.naming.AuthenticationException;
import com.app.HospitalManagement.response.ApiResponse;
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
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiResponse> resourceNotFoundExceptionHandler( ResourceNotFoundException ex){
        String message=ex.getMessage();
        ApiResponse apiResponse=new ApiResponse(message,false);
        return new ResponseEntity<ApiResponse>(apiResponse, HttpStatus.NOT_FOUND);
    }
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleMethodArgsNotValidException(MethodArgumentNotValidException ex)
    {
        Map<String, String> resp= new HashMap<>();

        ex.getBindingResult().getAllErrors().forEach((error)->{
            String fieldName=((FieldError)error).getField();
            String message=error.getDefaultMessage();
            resp.put(fieldName,message);
        });


        return new ResponseEntity<Map<String, String>>(resp,HttpStatus.NOT_FOUND);
    }
    @ExceptionHandler(RuntimeException.class)
    @ResponseStatus(code  = HttpStatus.UNAUTHORIZED)
    public ApiResponseFailure<?> exception3(RuntimeException err){
        return new ApiResponseFailure<String>("error" , err.getMessage());
    }
}
