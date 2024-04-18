import { useContext, useState } from "react";
import { AuthContext } from "../../firebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const Profile = () => {
    const [loading, setLoading] = useState(false)
  const {user, updateProfileInfo} = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => {
    setLoading(true)
    const {fullName, photoUrl} = data;
    console.log(fullName, photoUrl);
    updateProfileInfo(fullName, photoUrl)
    .then(() => {
         console.log("Profile updated");
         setLoading(false)
    })
    .catch((error) => {
       console.error(error);
       setLoading(false)
     });

  }

 
  return (
    <>
     <Helmet>
                <title>SkylineSolutions | Profile</title>
    </Helmet>
    <div className="md:flex justify-around">
      <div className="md:h-[calc(100vh-470px)] p-8 md:flex items-center sm:space-x-6 dark:bg-gray-50 dark:text-gray-800">
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img
            src={user.photoURL}
            alt=""
            className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">{user?.displayName || 'unknown'}</h2>
            
          </div>
          <div className="space-y-1">
            <span className="flex items-center space-x-2">
             {
                user.email ?  <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-label="Email address"
                className="w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                ></path>
              </svg> : null
             }
              <span className="dark:text-gray-600">
                {user.email}
              </span>
            </span>
           
          </div>
          <div>
             <p className="text-wrap overflow-auto"><span className="font-bold">PhotoURL:</span> <span className="text-wrap hover:underline"><a href={user?.photoURL}>{user?.photoURL}</a></span></p>
          </div>
        </div>
      </div>
      <form onSubmit={ handleSubmit(onSubmit)}>
      <div>
      <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
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
                htmlFor="photoUrl"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
               Photo
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
                <button type="submit" className="btn btn-sm btn-primary mt-4">Update Profile</button>
            </div>
      </div>
       
      </form>
    </div>
    </>
  );
};

export default Profile;
