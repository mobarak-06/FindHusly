import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin/SocialLogin";
import toast from "react-hot-toast";
import { IoMdEye, IoMdEyeOff  } from "react-icons/io";

const Login = () => {
  const {singIn} = useContext(AuthContext);
  const [loginError, setLoginError] = useState(null);
  const [showEye, setShowEye] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;

    // sign in
      singIn(email, password)
      .then(result => {
        console.log(result.user);
        toast.success("Login SuccessFully")
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch(error => {
        console.error(error);
        setLoginError(error.message);
      })
    
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showEye ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  required
                  {...register("password")}
                />
                <span className="absolute top-44 right-10" onClick={() => setShowEye(!showEye)}>
                  {
                    showEye ? <IoMdEyeOff size={20}/> : <IoMdEye size={20}/>
                  }
                </span>
                {loginError && <h1 className="text-red-500">{loginError}</h1>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                Don`t Have An Account yet?{" "}
                <Link className="text-primary underline" to="/register">
                  Register
                </Link>
              </p>
            </form>
            <SocialLogin/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
