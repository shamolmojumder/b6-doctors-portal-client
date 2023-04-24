import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthConext } from "../../contexts/AuthProvider";

const Login = () => {
  const { register,formState: { errors }, handleSubmit } = useForm();
  const [loginError,setLoginError]=useState("")
  const {signIn}=useContext(AuthConext);
  
  const handleLogin=data=>{
    console.log(data);
    setLoginError("")
    signIn(data.email,data.password)
    .then(result=>{
      const user=result.user;
      console.log(user);
    })
    .catch(error=>{
      console.error(error.message);
      setLoginError(error.message)
    })
  }

  //73-3 Explore React hook form validation, error handling 8:00
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input  type="text" className="input input-bordered w-full max-w-xs"  {...register("email",{ required: "email is required"})}  />
            {errors.email && 
                   <p className="text-red-500"> {errors.email?.message}</p>
             }
            
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input defaultValue={"Sm@1234567"} type="password" className="input input-bordered w-full max-w-xs"  {...register("password",{required:"Password required",minLength:{value:6,message:"Password must be 6 digit"}})} placeholder="Password" />
            {
              errors.password &&
              <p className="text-red-500">{errors.password?.message}</p>

            }
            <label className="label">
              <span className="label-text underline">Forget Password</span>
            </label>
          </div>

         <div>
          {loginError && <p className="text-red-500"> {loginError}</p> }
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
