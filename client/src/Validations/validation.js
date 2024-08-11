// validation.js

// Email validation function
export const validateEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Phone validation function
  export const validatePhone = (phone) => {
    // Regular expression for basic phone number validation
    // Matches formats like: (123) 456-7890, 123-456-7890, 123.456.7890, 1234567890
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phone);
  };
  
  // Example usage (uncomment below to test)
  // console.log(validateEmail('test@example.com')); // true
  // console.log(validatePhone('123-456-7890')); // true
  // console.log(validateEmail('invalid-email')); // false
  // console.log(validatePhone('123456')); // false
  

  export const validatePassword = (password) => {
    // Regular expression for strong password validation
    // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  // Example usage (uncomment below to test)
// console.log(validatePassword('Password123!')); // true
// console.log(validatePassword('weakpass')); // false