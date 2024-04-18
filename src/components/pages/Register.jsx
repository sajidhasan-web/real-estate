import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../firebaseProvider/FirebaseProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";



const Register = () => {
     
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const {createUser, updateProfileInfo} = useContext(AuthContext);

    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const minLength = 6;

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
      const {email, password, photoUrl, fullName} = data;
      console.log(photoUrl, fullName);
      if (!uppercaseRegex.test(password)) {
        return setErrorMessage("Password must contain at least one uppercase letter.");
    }

    if (!lowercaseRegex.test(password)) {
        return setErrorMessage("Password must contain at least one lowercase letter.");
    }

    if (password.length < minLength) {
        return setErrorMessage(`Password must be at least ${minLength} characters long.`);
    }

  
       
     
      createUser(email, password)
      .then((result) => {
        console.log(result.user);
        return updateProfileInfo(fullName, photoUrl);
      })
      .then(() => {
        navigate('/profile');
      })
      .catch((error) => {
        console.error(error);
      });

      

      
     setErrorMessage('')
      
    }


    return (
        <div>
           <Helmet>
                <title>SkylineSolutions | Register</title>
            </Helmet>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
           Register your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border-2 border-blue-500 p-6 rounded-lg shadow-xl bg-white">
          <span className="text-sm text-red-600"> {errorMessage}</span>
          <form  onSubmit={handleSubmit (onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  
                  name="fullName"
                  type="text"
                  
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("fullName", { required: true })}
                />
                 
              </div>
              {errors.name && <span className="text-red-500">This field is required</span>}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("email", { required: true })}
                />
                 
              </div>
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            <div>
              <label
                htmlFor="photoUrl"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo URL
              </label>
              <div className="mt-2">
                <input
                  id="photoUrl"
                  name="photoUrl"
                  type="text"
                  
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("photoUrl", { required: true })}
                />
                 
              </div>
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                 
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
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
                register
              </button>
            </div>
          </form>
        

          <p className="mt-10 text-center text-sm text-gray-500">
           If Already Have an Account?{" "}
            <Link to={"/login"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
    );
};

export default Register;
