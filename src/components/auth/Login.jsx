import React from "react";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const Submission = (e) => {
        e.preventDefault();
        console.log('Email is :', email)
        console.log('Password is :', password)
        setEmail('')
        setPassword('')
    }
    const getEmail = (e) =>{
        setEmail(e.target.value)
    }
    const getPassword = (e) =>{
        setPassword(e.target.value)
    }
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-[50px]">
        <h1 className="text-[50px] font-bold uppercase max-w-[850px] m-auto text-center leading-[1.2]">Welcome to Employee Management System (EMS) App</h1>
      <div className="form-div w-[450px] p-[30px] rounded-[20px] bg-[#5c5c5c]">
        <h2 className="text-[45px] font-bold text-center mb-[20px]">Login</h2>
        <form className="flex flex-col gap-[30px] h-[400px] justify-center">
            <div className="email-container flex flex-col gap-[10px]">
                <label className="text-[16px]">Email</label>
          <input onChange={getEmail} value={email} id="email" name="email" type="email" placeholder="Enter Your Email" className="border-1 px-[25px] py-[20px] rounded-full text-white outline-0" required autoComplete="true"/>
            </div>
            <div className="password-container flex flex-col gap-[10px]">
                <label className="text-[16px]">Password</label>
          <input onChange={getPassword} value={password} id="password" name="password" type="password" placeholder="Enter Your Password" className="border-1 px-[25px] py-[20px] rounded-full text-white outline-0" required/>
            </div>
          <button className="bg-white text-black font-medium text-[18px] px-[25px] py-[20px] rounded-full" onClick={Submission}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
