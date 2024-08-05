package com.app.HospitalManagement.exception;

public class UniqueConstraintViolationException extends RuntimeException{
    public UniqueConstraintViolationException(String msg)
    {
        super(msg);
    }
}
