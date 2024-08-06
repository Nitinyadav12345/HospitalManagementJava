package com.app.HospitalManagement.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class ApiResponseFailure<T> {
    private String status="Failure";
    private T data;
}
