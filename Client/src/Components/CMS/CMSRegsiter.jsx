import React, { useRef } from "react";
import Header from "../Header";
import dotenv from "dotenv";

dotenv.config();
const CMSRegsiter = () => {
  console.log(process.env.API_TEST_URL);
  const secretKey = useRef(null);
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Secret Key:", secretKey.current.value);
    console.log("Username:", username.current.value);
    console.log("Email:", email.current.value);
    console.log("Password:", password.current.value);
  };

  return (
    <>
      <Header />
      <form>
        <input
          type="text"
          ref={secretKey}
          className="text"
          name="secretKey"
          id="secretKey"
          placeholder="Enter Secret Key..."
        />
        <input
          type="text"
          ref={username}
          className="text"
          name="username"
          id="username"
          placeholder="Enter the username..."
        />
        <input
          type="text"
          ref={email}
          className="email"
          name="email"
          id="email"
          placeholder="Enter your email..."
        />
        <input
          type="text"
          ref={password}
          className="password"
          name="password"
          id="password"
          placeholder="Enter your password..."
        />

        <button className="p-3 bg-black text-white" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default CMSRegsiter;
