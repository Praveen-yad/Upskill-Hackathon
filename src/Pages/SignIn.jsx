import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const SubmitHandler = async(e) => {
    e.preventDefault()
    axios.post("http://localhost:5000/api/user/login", {
      email:email,
      password:password
    })
    .then(res => {
      if(res.data.sucess){
        // console.log(res)
        localStorage.setItem("id", res.data.response._id)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('isMentor', res.data.response.isMentor)
      }
    })
    .then(res => navigate("/"))
    .catch(err => {
      alert("Incorrect Email or Password")
    })
  }

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="mx-auto w-full sm:w-full max-w-[90%] bg-white rounded-lg shadow-2xl md:flex">
        {/* Left side image */}
        <div className="md:w-1/2 p-4 bg-blue-100">
          <img
            src="https://res.cloudinary.com/de2rges3m/image/upload/v1696703380/Chat%20App/Home%20Page/13_enkavg.png"
            alt="Login Image"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        {/* Right side login form */}
        <div className="md:w-1/2 p-4 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold mb-4">Login</h2>
          <form onSubmit={SubmitHandler} className="space-y-4 w-[70%]">
            <div>
              <label htmlFor="username" className="block text-gray-700 font-medium ">Username or email</label>
              <input onChange={(e) => setEmail(e.target.value)} type="text" name="username" className=" w-full px-4 py-2  mt-1 border border-gray-300 rounded-md shadow-sm" />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
              <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" className="w-full px-4 py-2  mt-1 border  border-gray-300 rounded-md shadow-sm " />
            </div>
           <p className='text-right text-green-700 underline cursor-pointer '>Forgot password?</p>
            <button type="submit" className="w-full bg-black hover:bg-black-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign In
            </button>
            <div className="flex  p-2 items-center my-4
            before:border-t before:flex-1 before:border-gray-300
           after:border-t after:flex-1 after:border-gray-300">
            <p className="text-center
            font-semibold mx-4">OR</p>
          </div>

          <div className='flex  justify-center items-center'>
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" 
            alt=""
            className='w-6'
             />
            <p>Sign in with Google</p>

          </div>
          <div className='sm:flex-col flex justify-center items-center '>
            <p>Are you new?<span className='underline text-green-700 cursor-pointer'>Create an Account</span></p>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
