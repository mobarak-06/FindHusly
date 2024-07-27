import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { IoMdEye, IoMdEyeOff  } from "react-icons/io";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const {createUser, userUpdateProfile} = useContext(AuthContext);
  const [showEye, setShowEye] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
    const {name, email, photoUrl, password} = data ;
    
    // create user
    createUser(email, password)
    .then(result => {
      console.log(result.user);
      toast.success("Registration Completed !")
      userUpdateProfile(name,photoUrl)
            .then(() =>{
                console.log('profile updated');
            })
            .catch()
    })
    .catch(error => {
      console.error(error);
    })
  }
  return (
    <div>
      <Helmet>
        <title>FindHusly | Register</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
        <h1 className="text-5xl font-bold">Register now!</h1>
          <div className="card bg-base-100 md:w-[450px]  shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  {...register("name")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  {...register("email")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo-Url"
                  className="input input-bordered"
                  {...register("photoUrl")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showEye ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  required
                  {...register("password", { pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/ })}
                />
                <span className="absolute top-[358px] right-10" onClick={() => setShowEye(!showEye)}>
                  {
                    showEye ? <IoMdEyeOff size={20}/> : <IoMdEye size={20}/>
                  }
                </span>
                {errors.password && <span className="text-red-500">Password Must Be 6 Characters, One Letter Must Uppercase And Lowercase</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>
                Already Have Account?{" "}
                <Link className="text-primary underline" to="/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
