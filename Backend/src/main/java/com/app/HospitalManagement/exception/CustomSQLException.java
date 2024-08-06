package com.app.HospitalManagement.exception;

public class CustomSQLException extends RuntimeException{
    public CustomSQLException(String message) {
        super(message);
    }
}
