import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  //73-1 Module Introduction and react hook form setup 8:00
  return (
    <div>
      <div className="h-[800px] flex justify-center items-center">
        <h2 className="text-4xl text-center">Login</h2>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
    

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
          </div>

         
          <p>{data}</p>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
