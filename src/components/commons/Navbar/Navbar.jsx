import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../firebaseProvider/FirebaseProvider";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("User logged out"))
      .catch((error) => console.error(error));
  };

  const NavLinks = (
    <>
      <li className="flex">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600 flex items-center px-4 -mb-1"
              : "flex items-center px-4 -mb-1"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          to={"/login"}
          className={({ isActive }) =>
            isActive
              ? "border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600 flex items-center px-4 -mb-1"
              : "flex items-center px-4 -mb-1"
          }
        >
          Login
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          to={"/register"}
          className={({ isActive }) =>
            isActive
              ? "border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600 flex items-center px-4 -mb-1"
              : "flex items-center px-4 -mb-1"
          }
        >
          Register
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="p-4 bg-white mb-10 border-b sticky top-0 z-10">
      <div className=" flex justify-between items-center h-16 ">
       <Link to={'/'} className="text-xl md:text-3xl font-bold text-secondary">Skyline<span className="text-primary">Solutions</span></Link>
        <ul className="items-stretch hidden space-x-3 lg:flex">{NavLinks}</ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {
            user ? (
              <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
                <div className="avatar ">
                  <div className="w-10 rounded-full border-2 border-blue-600  flex justify-center items-center">
                  {
                    user.photoURL ? (
                      <img src={user.photoURL} alt="" />
                    ) : (
                      <CgProfile className="text-4xl text-blue-600"></CgProfile>
                    )
                  }
                
                  </div>
                </div>
                <ul className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2 font-bold text-opacity-90">
                      <li><Link to={'/profile'}>User:  <span className="text-primary font-bold"> {user?.displayName || 'Unknown'}</span></Link></li>
                      <li><Link to={'/'}>Home</Link></li>
                      <li><Link to={'/profile'}>Profile</Link></li>
                      <li><Link>Update Profile</Link></li>
                      <li><button onClick={handleLogOut} className="btn">Log Out</button></li>
                    </ul>
              </div>
            ) : (
              <Link to={"/login"}>
                <button className="btn btn-primary text-white font-bold">
                  Sign in
                </button>
              </Link>
            )

           
          }
        </div>
        <div className="p-4 lg:hidden">
          
          <div className="dropdown dropdown-bottom dropdown-end flex items-center gap-4">
          <div>
                  {user? <div className="w-10 rounded-full border-2 border-blue-600 ">
                  {
                    user?.photoURL ? (
                      <img src={user.photoURL} alt="" /> || <CgProfile className="text-4xl text-blue-600"></CgProfile> 
                    ) : null
                  }
                
                  </div> : null}
                </div>
            <div className="dropdown dropdown-end">
              <div onClick={()=>setToggle(!toggle)} tabIndex={0} role="button" className="btn m-1 text-xl shadow-lg">
              {
                toggle ? <RxCross2 className="h-6 w-6"></RxCross2> : <IoMenu className="h-6 w-6"></IoMenu>
              }
              </div>
              <div>
                {
                  toggle ? (
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow glass rounded-box w-52 space-y-2 font-bold">
                       <li><Link to={'/profile'}>User:  <span className="text-primary font-bold"> {user?.displayName || 'Unknown'}</span></Link></li>
                      <li><Link to={'/'}>Home</Link></li>
                      <li><Link to={'/profile'}>Profile</Link></li>
                      <li><Link>Update Profile</Link></li>
                      
                      {
                        user ? <li><button onClick={handleLogOut}>Log Out</button></li> : <li><Link to={'/login'}>Login</Link></li>
                      }
                      
                      
                    </ul>
                  ) : null
                }
              </div>
             
            </div>
          
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
