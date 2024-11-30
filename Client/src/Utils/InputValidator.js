const InputValidator = (data) => {
  const verify_List = [];
  for (const key in data) {
    if (key === "email") {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      verify_List.push(emailPattern.test(data[key]));
    } else if (key === "phone") {
      const phonePattern = /^[0-9]{10}$/;
      verify_List.push(phonePattern.test(data[key]));
    }
  }
  // Returns true if all elements in verify_List are true, otherwise false. This is used to verify if all required fields are filled.  // Example usage: InputValidator({ email: "example@example.com", phone: "1234567890" }); // Returns true or false based on the validity of the provided input data.
  return verify_List.every((value) => value);
};

export { InputValidator };
