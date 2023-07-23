import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthConext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const SignUp = () => {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const {createUser,updateUser}=useContext(AuthConext);
    const [signUpError, setSignUpError] = useState("");
    const navigate=useNavigate();

    const handleSignup=(data)=>{
        console.log(data);
        setSignUpError("")
        createUser(data.email,data.password)
        .then(result=>{
          const user=result.user;
          console.log(user);
          toast("User Created Successfully")
          const userInfo={
            displayName:data.name
          }
          updateUser(userInfo)
          .then(()=>{
            saveUser(data.name,data.email);
          })
          .catch(err=>console.log(err))
        })
        // signup error
        .catch(error=>{
          console.log(error);
          setSignUpError(error.message);
        })
    }

    const saveUser=(name,email)=>{
      const user={name,email};
      fetch("http://localhost:5000/users",{
        method:'POST',
        headers: {
          'content-type': 'application/json',
        },
        body:JSON.stringify(user)

      })
      .then(res=>res.json())
      .then(data=>{
        console.log("save user",data);
        navigate("/");
      })
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
              placeholder="Password" defaultValue={"Sm@1234567"}
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
          {
            signUpError && <p className="text-red-600"> {signUpError} </p>
          }
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
