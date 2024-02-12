import React, { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Subheading from "../components/Subheading";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading lable="Sign Up" />
          <Subheading lable="Enter your information to create an account" />
          <Input
            lable="First Name"
            placeholder="John"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <Input
            lable="Last Name"
            placeholder="Cena"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <Input
            lable="Email"
            placeholder="johncena@gmail.com"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Input
            lable="Password"
            placeholder="********"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="pt-4">
            <Button
              lable="Sign Up"
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signup",
                  {
                    username,
                    firstName,
                    lastName,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);

                navigate("/dashboard");
              }}
            />
          </div>
          <BottomWarning
            lable="Already have an account?"
            buttonText="Sign in"
            to="/signin"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
