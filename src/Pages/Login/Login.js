import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const handleLogin=data=>{
    console.log(data);
  }
  //73-1 Module Introduction and react hook form setup 8:00
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
    

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input  type="text" className="input input-bordered w-full max-w-xs"  {...register("email")}  />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input  type="password" className="input input-bordered w-full max-w-xs"  {...register("password")} placeholder="First name" />
            <label className="label">
              <span className="label-text underline">Forget Password</span>
            </label>
          </div>

         
          {/* <p>{handleLogin.data}</p> */}
          <input type="submit" className="btn btn-accent w-full" value="Login" />
        </form>
        <p>New to Doctors Portal <Link className="text-secondary" to="/signup">Create new account</Link> </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">Continue with google</button>
      </div>
    </div>
  );
};

export default Login;
