package com.app.HospitalManagement.exception;

public class ResourceNotFoundException extends RuntimeException {
	String resourceName;
	String fieldName;
	long fieldValue;
	public ResourceNotFoundException(String resourceName, String fieldName, Long ResourceNotFoundException) {
		super(String.format("%s not found with this %s : %l", resourceName,fieldName,ResourceNotFoundException ));
		this.resourceName = resourceName;
		this.fieldName = fieldName;
		this.fieldValue = fieldValue;
}
}