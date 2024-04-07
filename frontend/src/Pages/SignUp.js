import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate()
  // const [formData, setFormData] = useState({
  //   username: "",
  //   password: "",
  //   email: "",
  //   category: "",
  //   description: "",
  //   age:0
  // });

  const [username, setUsername]  = useState('')
  const [password, setPassword]  = useState('')
  const [email, setEmail]  = useState('')
  const [category, setCategory]  = useState('')
  const [description, setDescription]  = useState('')
  const [otp, setOtp] = useState()
  const [otpBox, setOtpBox] = useState(false)
  const [age, setAge] = useState()
  
  const [isMentor, setIsMentor] = useState(false)
  const [imageUrl, setImageurl] = useState('')

  const SubmitHandler = async(e) => {
    e.preventDefault()
    if(isMentor){
      await axios.post('http://localhost:5000/api/message/image',{
          img:imageUrl
        }).then(async(res) => {
          await axios.post("http://localhost:5000/api/user/register",{
            password: password,
            email: email,
            name: username,
            age: age,
            isMentor: isMentor,
            category: category,
            description: description,
            pic:res.data.url
          }).then(res => {
            // navigate('/signin')
            setOtpBox(true)
          }).catch(err => {
            // alert("Registration Failed")
            console.log(err)
          })
      }).catch(err => console.log(err))
    }else{
      await axios.post("http://localhost:5000/api/user/register",{
            password: password,
            email: email,
            name: username,
            isMentor: isMentor,
          }).then(res => {
            setOtpBox(true)
          }).catch(err => {
            alert("Registration Failed")
            // console.log(err)
          })
    }
  }

  const HandelFile = (e) => {
    const file = e.target.files[0]
    Next(file)    
  }

const Next = (file) => {
    const reader = new FileReader()
    if(file){
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setImageurl(reader.result)
        }
    }
}

const VerifyOpt = async() => {
  await axios.post("http://localhost:5000/api/user/verify",{
    email:email,
    otp:otp
  }).then(res => {
    navigate('/signin')
    setOtpBox(false)
  }).catch(err => alert("Incorrect Otp"))
}
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={SubmitHandler}>
        <div className="relative flex flex-col  space-y-8 bg-white  md:flex-row md:space-y-0 sm:w-auto  m-0 ">
          <div className="flex flex-col justify-center p-8 md:p-14 lg:w-[80%]">
            <span className="mb-3 text-4xl font-bold ">Create An Account</span>
            <span className="font-light text-gray-400 mb-8">
              Welcome! Please enter your details
            </span>
            <div className="flex">
              <div
                onClick={() => setIsMentor(false)}
                className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${
                  !isMentor
                    ? "bg-gray-300 text-black"
                    : "bg-white text-black"
                }`}
              >
               I'm a Client
              </div>
              <div
                onClick={() => setIsMentor(true)}
                className={`ml-3 px-7 py-3 font-medium text-bold uppercase shadow-lg rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${
                  isMentor
                    ? "bg-gray-300 text-black"
                    : "bg-white text-black"
                }`}
              >
                I'm a Mentor
              </div>
            </div>

            <div className="py-4">
              <span className="mb-2 text-md">Username</span>
              <input
                required
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Email</span>
              <input
                required
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Password</span>
              <input
                required
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
            </div>

            {isMentor && (
              <>
                <div className="py-4">
                  <span className="mb-2 text-md">Category</span>
                  <select
                    type="text"
                    name="category"
                    id="category"
                    className="w-full border p-2"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option
                      className="bg-gray-300 active:bg-green-100"
                      value=""
                    >
                      Select an option
                    </option>
                    {categories.map(item=>(
                        <option key={item} value={item}>{item}</option>

                    ))}
                  </select>
                </div>
                <div className="py-4">
                  <span className="mb-2 text-md">Age</span>
                  <input
                    required
                    className="px-2 py-1 w-full border border-gray-300 rounded-md "
                    placeholder="Your Age"
                    name="age"
                    id="age"
                    value={age}
                    type='number'
                    onChange={(e) => setAge(e.target.value)}
                  ></input>
                </div>
                <div className="py-4">
                  <span className="mb-2 text-md">Description</span>
                  <textarea
                    required
                    className="px-2 py-1 w-full border h-[4.5rem] border-gray-300 rounded-md "
                    placeholder="Profile description..."
                    name="description"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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

            <div className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                alt="img"
                className="w-6 h-6 inline mr-2"
              />
              Sign in with Google
            </div>
            <div className="text-center text-gray-400 cursor-pointer">
              Already have an account?
              <span className="font-bold text-black">Log in for free</span>
            </div>
          </div>

          <div className="relative flex flex-col h-[100vh] items-center justify-center">
            <div className=" py-12 w-[50%] flex justify-center ">
                <img src="https://res.cloudinary.com/de2rges3m/image/upload/v1696703380/Chat%20App/Home%20Page/13_enkavg.png" className="absolute z-0 opacity-30 -translate-y-44 w-[40rem]" />
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
              <p className="mt-16 z-10 md:block font-semibold text-2xl text-center">
                {" "}
                “Although I had what seemed like endless questions and problems
                to solve, Mentorme was able to provide clear and concise
                feedback, advice, and best practices.”{" "}
              </p>
            </div>
            {isMentor && 
            <div className='group flex translate-y-40 items-center relative w-full'>
              <div className="bg-red-500">
                <input required type='file' className='outline-none absolute rounded-lg scale-y-[1.3] translate-y-1 w-44 z-20 opacity-100' onChange={(e) => HandelFile(e)} />
                <div className='cursor-pointer bg-theme group-hover:scale-[1.02] transition-transform duration-200 ease-in-out w-44 text-center py-2 rounded-lg select-none'>Upload Image</div>
              </div>
              <div className="ml-10">
                {imageUrl && <img src={imageUrl} className="w-44 h-44 object-cover rounded-lg" />}
              </div>
            </div>}
           </div>
        </div>
        </form>
        {otpBox && <div className="z-20 w-[100vw] fixed h-[100vh] backdrop-blur-lg flex items-center justify-center">
            <div className="w-[20rem] h-[15rem] bg-white border-2 border-neutral-400 rounded-xl p-3 flex flex-col justify-around">
              <div className="text-3xl font-bold">Verify</div>
            <div className="text-xs -translate-y-3">You have been sent an OTP on Your email</div>
            <div className="w-fit border-b border-neutral-700">
            <input placeholder="Enter OTP" className="mt-3 outline-none bg-transparent" onChange={(e) => setOtp(e.target.value)} />
            </div>
            <div className="w-full flex justify-center mt-5">
              <div className="px-4 py-1 w-fit bg-green-500 rounded-lg mt-auto cursor-pointer" onClick={VerifyOpt}>Verify</div>
            </div>
          </div>
        </div>}
      </div>
    </>
  );
};

export default SignUp;

const categories = [
  "Career Development",
  "Entrepreneurship",
  "Academic Mentorship",
  "Leadership and Management",
  "Personal Development",
  "Industry-specific Mentorship",
  "Diversity and Inclusion",
  "Creativity and Innovation",
  "Wellness and Health",
  "Financial Mentorship"
]