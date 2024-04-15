

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../firebaseProvider/FirebaseProvider";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FaGithub, FaGoogle } from "react-icons/fa";



const Login = () => {
  const [passwordShow, setPasswordShow] = useState(false)
  const {signInUser, loginWithGoogle, loginWithGithub} = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {email, password} = data;
    signInUser(email, password)
    .then((result) => {
    console.log(result.user);
    })
    .catch((error) => {
      console.error(error);
    });
    
  }
 

  const handleGoogleLogin = () => {
    loginWithGoogle()
    .then((result) => {
      console.log(result.user);
    }).catch((error) => {
    console.error(error)
    });
  }
  const handleGithubLogin = () => {
    loginWithGithub()
    .then((result) => {
      console.log(result.user);
    }).catch((error) => {
    console.error(error)
    });
  }



  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border-2 border-blue-500 p-6 rounded-lg shadow-xl bg-white">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                
                  name="email"
                  type="email"
                  
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("email", { required: true })}
                />
              </div>
                {errors.email && <span className="text-red-500">This field is required</span>}
            </div>

            <div>
              <div className="flex items-center justify-between relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
                 <span onClick={()=> setPasswordShow(!passwordShow)} className="absolute top-10 right-5 text-xl">
                  {
                    passwordShow? <IoMdEyeOff /> : <IoMdEye />
                  }
                  
                  </span>
              </div>
              <div className="mt-2">
                <input
                  
                  name="password"
                  type={passwordShow ? "text" : "password"}
                 
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("password", { required: true })}
                />
              </div>
                 {errors.password && <span className="text-red-500">This field is required</span>}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link to={"/register"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              register
            </Link>
          </p>
          <div className="text-2xl flex justify-center items-center gap-4 mt-5">
            <p onClick={handleGoogleLogin} className="hover:-translate-y-2 transition cursor-pointer"><FaGoogle></FaGoogle></p>
            <p onClick={handleGithubLogin} className="hover:-translate-y-2 transition cursor-pointer"><FaGithub></FaGithub></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
