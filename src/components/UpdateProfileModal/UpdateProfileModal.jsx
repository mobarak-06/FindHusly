import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const UpdateProfileModal = () => {
    const {userUpdateProfile} = useContext(AuthContext)
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const handleSubmit = () => {
        userUpdateProfile(name, photo)
        .then(() =>{
            console.log('new update profile');
            toast.success("Profile Updated !")
        })
        .catch()
        console.log(name, photo);
    }
  return (
    <div>
      <button onClick={() => document.getElementById("my_modal_2").showModal()} className="justify-between">Update Profile</button>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box ">
          <input onChange={(e) => setName(e.target.value)} className="w-4/5 border-2 p-2 m-2 rounded-xl" type="text"  placeholder="Your Name"/>
          <br />
          <input onChange={(e) => setPhoto(e.target.value)} className="w-4/5 border-2 p-2 m-2 rounded-xl" type="text"  placeholder="Your PhotoUrl"/>
          <br />
          <div  className="text-center mt-6">
          <button onClick={handleSubmit} className="btn btn-outline">Submit</button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default UpdateProfileModal;
