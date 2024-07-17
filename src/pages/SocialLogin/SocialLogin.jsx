import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";
import { AuthContext } from "../../providers/AuthProvider";
const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext);
    const handleGoogle = () =>{
        googleLogin()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error)
    })
    }
  return (
    <div className="mb-6">
      <div className="divider">Or Continue With</div>
      <div className="flex justify-around">
        <button onClick={handleGoogle} className="flex gap-1  w-32 py-2 px-4 rounded-lg btn btn-outline btn-primary">
          <FcGoogle className="mt-1" size={20} />
          <span className="font-semibold text-lg">Google</span>
        </button>
        <button className=" flex gap-1 btn btn-outline btn-secondary w-32 py-2 px-4 rounded-lg">
          <RxGithubLogo className="mt-1" size={20} />
          <span className="font-semibold text-lg">Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

