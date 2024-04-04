import React from "react";
import { useState } from "react";
const SignUp = () => {
  const [formData, setFormData] = useState({
    type: "mentee",
    username: "",
    password: "",
    email: "",
    category: "",
    description: "",
  });

  const UserTypeChange = (selectedType) => {
    setFormData({ ...formData, type: selectedType });
  };

  const InputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col  space-y-8 bg-white  md:flex-row md:space-y-0 sm:w-auto  m-0 ">
          <div className="flex flex-col justify-center p-8 md:p-14 lg:w-[80%]">
            <span className="mb-3 text-4xl font-bold ">Create An Account</span>
            <span className="font-light text-gray-400 mb-8">
              Welcome! Please enter your details
            </span>
            <div className="flex">
              <button
                type="button"
                onClick={() => UserTypeChange("mentee")}
                className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${
                  formData.type === "mentee"
                    ? "bg-gray-300 text-black"
                    : "bg-white text-black"
                }`}
              >
               I'm a Mentee
              </button>
              <button
                type="button"
                onClick={() => UserTypeChange("mentor")}
                className={`ml-3 px-7 py-3 font-medium text-bold uppercase shadow-lg rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${
                  formData.type === "mentor"
                    ? "bg-gray-300 text-black"
                    : "bg-white text-black"
                }`}
              >
                I'm a Mentor
              </button>
            </div>

            <div className="py-4">
              <span className="mb-2 text-md">Username</span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="username"
                id="username"
                value={formData.username}
                onChange={InputChange}
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Email</span>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email"
                id="email"
                value={formData.email}
                onChange={InputChange}
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Password</span>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={InputChange}
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
            </div>

            {formData.type === "mentor" && (
              <>
                <div className="py-4">
                  <span className="mb-2 text-md">Category</span>
                  <select
                    type="text"
                    name="category"
                    id="category"
                    className="w-full border p-2"
                    value={formData.category}
                    onChange={InputChange}
                  >
                    <option
                      className="bg-gray-300 active:bg-green-100"
                      value=""
                    >
                      Select an option
                    </option>
                    <option value="option1">Software Engineer</option>
                    <option value="option2">Devops Engineer</option>
                    <option value="option3">Cloud</option>
                  </select>
                </div>
                <div className="py-4">
                  <span className="mb-2 text-md">Description</span>
                  <textarea
                    className="w-full border h-[4.5rem] border-gray-300 rounded-md "
                    placeholder="profile description..."
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={InputChange}
                  ></textarea>
                </div>
              </>
            )}

            <div className="flex justify-between w-full py-4">
              <div className="mr-24">
                <input type="checkbox" name="ch" id="ch" className="mr-2" />
                <span className="text-md">Remember for 30 days</span>
              </div>
            </div>
            <button className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
              Sign Up
            </button>

            <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                alt="img"
                className="w-6 h-6 inline mr-2"
              />
              Sign in with Google
            </button>
            <div className="text-center text-gray-400">
              Already have an account?
              <span className="font-bold text-black">Log in for free</span>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="   py-12 w-[50%] flex justify-center ">
              <svg
                className=" w-[6rem] px-5 text-sm absolute   "
                viewBox="0 0 52 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3097 32C11.3127 32 9.0118 30.4212 5.40708 27.2635C1.80236 24.1059 0 21.9495 0 20.7942C0 19.562 3.33628 15.7882 10.0088 9.47292C16.6814 3.15764 20.4012 0 21.1681 0C21.3982 0 21.8968 0.385078 22.6637 1.15523C23.5074 1.92539 23.9292 2.54151 23.9292 3.00361C23.9292 3.38868 22.1268 7.00842 18.5221 13.8628C22.7404 17.1745 24.8496 19.4464 24.8496 20.6787C24.8496 21.9109 23.0089 24.1059 19.3274 27.2635C15.646 30.4212 13.3068 32 12.3097 32ZM39.4602 32C38.4631 32 36.1622 
                  30.4212 32.5575 27.2635C28.9528 24.1059 27.1504 21.9495 
                  27.1504 20.7942C27.1504 19.562 30.4867 15.7882 37.1593
                   9.47292C43.8319 3.15764 47.5516 0 48.3186 0C48.5487 0 49.0472
                   0.385078 49.8142 1.15523C50.6578 1.92539 51.0796 2.54151
                   51.0796 3.00361C51.0796 3.38868 49.2773 7.00842 45.6726 
                   13.8628C49.8909 17.1745 52 19.4464 52 20.6787C52 21.9109
                    50.1593 24.1059 46.4779 27.2635C42.7965 30.4212 40.4572 
                32 39.4602 32Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="mt-16 md:block text-2xl  text-center">
                {" "}
                “Although I had what seemed like endless questions and problems
                to solve, Mentorme was able to provide clear and concise
                feedback, advice, and best practices.”{" "}
              </p>
            </div>
           
           </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

