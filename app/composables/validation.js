const validateUserForm = (formData) => {
  const { userName, email, password } = formData;

  // Basic validations
  if (!userName || !email || !password) {
    alert("All fields are required");
    return false;
  }

  // Email validation (sample regex, adjust as needed)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email address");
    return false;
  }

  // Password validation (sample criteria, adjust as needed)
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    alert(
      "Password must contain at least one lowercase, one uppercase, one number, one symbol, and be at least 8 characters long"
    );
    return false;
  }

  return true; // Form is valid
};

const validateContactForm = (formData) => {
  const { firstName, lastName, phoneNumber, email, password, dob } = formData;

  // Basic validations
  if (!firstName || !lastName || !phoneNumber || !email || !password || !dob) {
    alert("All fields are required");
    return false;
  }

  // Phone number validation (sample regex, adjust as needed)
  const phoneRegex = /^\d{11}$/;
  if (!phoneRegex.test(phoneNumber)) {
    alert("Invalid phone number");
    return false;
  }

  // Email validation (sample regex, adjust as needed)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email address");
    return false;
  }

  // Password validation (sample criteria, adjust as needed)
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    alert(
      "Password must contain at least one lowercase, one uppercase, one number, one symbol, and be at least 8 characters long"
    );
    return false;
  }

  return true; // Form is valid
};

export { validateUserForm, validateContactForm };
