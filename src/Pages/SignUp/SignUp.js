import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthConext } from "../../contexts/AuthProvider";

const SignUp = () => {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const {createUser}=useContext(AuthConext)
    const handleSignup=(data)=>{
        console.log(data);
        createUser(data.email,data.password)
        .then(result=>{
          const user=result.user;
          console.log(user);
        })
        .catch(error=>console.log(error))
    }
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text" {...register("name",{required:"Name is requried"})}
              className="input input-bordered w-full max-w-xs"
            />
            {
                errors.name && <p className="text-red-500"> {errors.name.message} </p>
            }
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email" {...register("email",{required:"email is requried"})}
              className="input input-bordered w-full max-w-xs"
            />
            {
                errors.email && <p className="text-red-500"> {errors.email.message} </p>
            }
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password" {...register("password",{required:"Password is requried",minLength:{value:8 ,message:"Minimum 8 digit"},pattern:{value:/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!$@ %^&*-])/,message:"Password need one Uppercase,lower,number and special chreacter"}})}
              className="input input-bordered w-full max-w-xs"
              placeholder="Password"
            />
            {
                errors.password && <p className="text-red-500"> {errors.password.message} </p>
            }
          </div>

          {/* <p>{handleLogin.data}</p> */}
          <input
            type="submit"
            className="btn btn-accent w-full"
            value="Sign up"
          />
        </form>
        <p>
          Already have an account{" "}
          <Link className="text-secondary" to="/login">
            Please Login
          </Link>{" "}
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">Continue with google</button>
      </div>
    </div>
  );
};

export default SignUp;
