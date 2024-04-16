import React, { useEffect } from "react";
import { Label } from "../Atoms/Label";
import { Input } from "../Atoms/Input";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Alert } from "../Alert";
import { useState } from "react";
import { usePost } from "../../../public/hooks/usePost";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const userObject = {
    email,
    password,
  };

  const { handleSubmit, success, error } = usePost(
    "http://44.216.227.91:4000/users/login",
    userObject
  );

  if (success) {
    navigate("/home");
  }

  return (
    <div className=" px-10 py-20 rounded-3xl">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl text-[#03A460] font-semibold">Welcome Back</h1>
        <p className=" font-medium text-lg text-gray-500 mt-4">
          Welcome back! Please enter your details
        </p>
        <div className=" border-2 w-40 inline-block border-[#03A460] mb-2 "></div>
      </div>

      <form className=" mt-8">
        <div className="mb-5">
          <Label children={"Email"} />
          <Input
            type={"email"}
            placeholder={"Enter your email"}
            icon={faEnvelope}
            setState={setEmail}
          />
        </div>

        <div className="mb-5">
          <Label children={"Password"} />
          <Input
            type={"password"}
            placeholder={"Enter your password"}
            icon={faLock}
            setState={setPassword}
          />
        </div>

        <div className="mt-8 flex justify-between items-center">
          <div>
            <input type="checkbox" id="remember" />
            <label
              className="mt-2 font-medium text-base rounded-md"
              htmlFor="remember"
            >
              {" "}
              Remember for 30 days
            </label>
          </div>
          <button className="font-medium text-base text-[#FFCB47]">
            Forgot password
          </button>
        </div>

        <div className="mt-8 flex flex-col gpa-y-4">
          <button
            className=" py-3 rounded-xl bg-[#FFCB47]  text-white text-lg font-bold active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out hover:bg-[#ae8726]"
            onClick={handleSubmit}
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};
