import { Link, NavLink } from "react-router-dom";
import Home_Icon from "../../assets/home-sign-icon-front-side-white-background.jpg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import nullProfile from "../../assets/nullprofile.png"
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);


  // logOut
  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("profile logout");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const links = (
    <>
      <li className="text-sky-500 font-bold">
        <NavLink
          className={({ isActive }) =>
            isActive && "border-2 border-indigo-500 "
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="text-sky-500 font-bold">
        <NavLink
          className={({ isActive }) =>
            isActive && " border-2 border-indigo-500"
          }
          to="/properties"
        >
          Properties
        </NavLink>
      </li>
      <li className="text-sky-500 font-bold">
        <NavLink
          className={({ isActive }) =>
            isActive && " border-2 border-indigo-500"
          }
          to="/services"
        >
          Services
        </NavLink>
      </li>
      <li className="text-sky-500 font-bold">
        <NavLink
          className={({ isActive }) =>
            isActive && " border-2 border-indigo-500"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 lg:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="flex ">
            <img className="w-14" src={Home_Icon} alt="" />
            <p className="text-3xl font-bold mt-3 bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
              FindHusly
            </p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end tooltip tooltip-left" data-tip={user?.displayName}>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL || nullProfile}
                  />
                </div>
                
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm  bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">{user?.displayName}</a>
                </li>
                <li>
                  <a className="justify-between">Update Profile</a>
                </li>
                <li>
                  <a onClick={handleSignOut}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn bg-indigo-400 hover:bg-indigo-500 text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
