import React, { useCallback, useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { MdBusinessCenter } from "react-icons/md";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {setRecall } from '../store/recall'

const LandingPage = () => {
  const navigate = useNavigate()
  const [expertiseBox, setExpertiseBox] = useState(false)
  const [searchByField, setSearchByField] = useState("")
  const [showAbout, setShowAbout] = useState(false)
  const [showInfo, setShowInfo] = useState([])
  const [mentors, setMentors] = useState([])
  const [invites, setInvites] = useState([])
  const [showInvites, setShowInvited] = useState(false)
  const [isMentor, setIsMentor] = useState(localStorage.getItem('isMentor'))
  const [searchMentor, setSearchMentor] = useState([])
  const recall = useSelector(state => state.recall)
  const dispatch = useDispatch()

  const config = {
    headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };


  const fetchInvitations = async() => {
    axios.get("http://localhost:5000/api/user/fetchinvites", config).then(res => {
        setInvites(res.data)
        console.log(res.data)
      })
  } 

  useEffect(() => {
    const fetchMentors = async() => {
      axios.get("http://localhost:5000/api/user/fetchmentors", config).then(res => {
        setMentors(res.data)
        setSearchMentor(res.data)
        // console.log(res.data)
      })
    }

    fetchMentors()
  },[])

  useEffect(() => {
    fetchInvitations()
  }, [recall])

  const InvitationHandler = async(id) => {
    await axios.post("http://localhost:5000/api/user/invite",{
      id:localStorage.getItem("id"),
      mentorId: id
    },config).then(response => {
      // console.log(response)
      setShowAbout(false)
      dispatch(setRecall())
    }).catch(err => {
      console.log(err)
    })
  }

  const CreateChat = async(id) => {
    axios.post("http://localhost:5000/api/chat", {
      userId: id
    }, config)
    .then(res => {
      RejectInvite(id)
      SendMessage(res.data.response._id)
      // console.log(res.data.response._id)
    })
    .then(res => {
      navigate("/chat")
    })
    .catch(err => {
      console.log(err)
    })
  }

  const SendMessage = async(id) => {
    axios.post("http://localhost:5000/api/message",{
      content: "Hey! How Can I Help You.",
      chatId: id
    }, config)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
  }

  const RejectInvite = async(ide) => {
    await axios.post("http://localhost:5000/api/user/reject",{
      id:ide
    },config)
    .then(res => {
      // console.log(res)
      dispatch(setRecall())
    })
    .catch(err => {
      console.log(err)
    })
  }

  const apiCall = async () => {
    await axios.post(`http://localhost:5000/api/user/find`, {
    search:searchByField
  }, config)
      .then(res => {
        setSearchMentor(res.data)
        console.log(res)
      })
      .catch(err => {

      })
  }


  return (
    <div className='bg-[#0000000d] overflow-hidden flex flex-col items-center relative'>
      <div className='fixed -z-10 text-[25rem] tracking-widest font-[900] translate-y-8 translate-x-4 bg-gradient-to-b from-neutral-100 to-neutral-300 opacity-[0.4] bg-clip-text text-transparent'>MENTOR</div>
      <div className='z-10 w-full h-[4rem] pl-5 pr-12  flex justify-between items-center'>
        <div className='text-md scale-y-[1.15] font-medium'>Mentor_me</div>
        <div className='flex space-x-10 relative'>
          <div className='cursor-pointer'>Home</div>
          <div className='cursor-pointer hover:font-semibold select-none ' onClick={() => navigate('/chat')}>Messages</div>
          <div className='relative flex justify-center'>
            <div className='hover:font-semibold select-none cursor-pointer' onClick={() => setShowInvited(!showInvites)}>Invitations</div>
            {showInvites && 
            <div className='bg-white rounded-xl p-2 absolute w-56 top-10'>
              {invites.length === 0 && <div className='text-center'>No Invitations</div>}
              {invites.map((item, index) => (
                <div key={index} className='flex items-center p-2 border-b'>
                  <div>
                    <img alt='E' src={item.pic} className='w-12 h-12 object-cover rounded-full' />
                    </div>
                  <div className='ml-3 w-[6.5rem]'>
                    <div className='capitalize text-center truncate'>{item.name}</div>
                    {isMentor=="true" &&
                    <div className='bg-green-400 text-center rounded-md w-full cursor-pointer' onClick={() => CreateChat(item._id)}>Accept</div>}
                  </div>
                  <div className='hover:bg-neutral-300 text-center p-1 rounded-full ml-auto over group relative'onClick={() => RejectInvite(item._id)}>
                    <IoMdClose />
                    <div className='absolute hidden group-hover:flex bg-neutral-500 text-white top-8 px-2 rounded'>{isMentor=="true" ? "Reject" : "Revoke"}</div>
                  </div>
                </div>
              ))}
            </div>
            }
            </div>
          <div className='cursor-pointer'>Contact Us</div>
          {!localStorage.getItem("token") && 
            <>
              <div className='text-white z-10' onClick={() => navigate("/signin")}>Signup</div>
              <div className='absolute -translate-y-7 translate-x-2 right-0'>
                <img src='https://res.cloudinary.com/de2rges3m/image/upload/v1708278101/Lawq/blob_4_zuxygw.svg' className='w-[5rem] scale-x-[1.35]' />
              </div>
            </>
          }
        </div>
      </div>

      <div className='flex justify-between w-full'> 
        <div className='w-[37vw] pl-14'>
          <div className='text-5xl font-bold mt-20'>
          Guiding Your Journey, Illuminating Your Potential✨
          </div>
          <div className='mt-14 text-2xl relative flex items-center'>
            <div className='text-white mr-3 z-20'>Find</div>
            <div>Expert</div>
            <img src='https://res.cloudinary.com/de2rges3m/image/upload/v1708278101/Lawq/blob_4_zuxygw.svg' className='absolute top-0 -translate-x-6 -translate-y-[22px] w-[5.2rem] scale-x-[1.39] -rotate-12' />
            <div className='w-[1.5rem] mt-0.5 h-[1px] ml-1 bg-red-500'></div>
          </div>
          <div className='mt-[9rem] text-sm w-[21rem]'>
          Say goodbye to uncertainty and hello to clarity as our personalized mentor matching service pairs you with a mentor perfectly suited to your goals.
          </div>
        </div>
        <div className='flex relative justify-center translate-x-8'>
        
          <img src='https://res.cloudinary.com/de2rges3m/image/upload/v1708275519/Lawq/blob_1_swks9v.svg' className='z-10 absolute top-[35vh] scale-[2.3]
           -rotate-[25deg] -translate-x-8'/>
          <img src='https://res.cloudinary.com/de2rges3m/image/upload/v1708278313/Lawq/blob_5_jtncev.svg' className='z-10 absolute top-[53vh] scale-[1] translate-x-5'/>
          <img src='https://res.cloudinary.com/de2rges3m/image/upload/v1712441473/Magazine/Art__Mentor.jpeg-removebgdd_ecnunp.png' className='h-[96vh] -translate-y-8 -translate-x-14 pt-10 z-30 object-cover'/>

        </div>
        <div className='w-[30vw]'>
          <div className='text-sm mt-[7rem] w-[20rem] text-justify'>We specialize in connecting individuals like you with experienced mentors who are dedicated to guiding you towards success. </div>
        </div>
      </div>

      <div className='z-30 flex flex-col items-center relative w-[90%] bg-gradient-to-b from-white via-[#fff0] to-[#fff0] -translate-y-[2rem] rounded-2xl'> 
        <img src='https://res.cloudinary.com/de2rges3m/image/upload/v1661639088/Magazine/istockphoto-1077407864-612x612_zur9ra.jpg' className='w-[10rem] rounded-t-full absolute right-0 -top-28' />
        <div className='w-full flex flex-col items-center'>
          <div className='text-3xl w-[50%] text-center mt-8 font-semibold'>Explore our expert mentors, specializing in various fields.</div>

          <div className='flex w-full justify-around mt-14'>
            <div className='relative flex flex-col items-center justify-center '>
              <div>
                <div className='absolute text-3xl text-white -translate-y-2 -translate-x-1 z-30'>
                  <img src='https://res.cloudinary.com/de2rges3m/image/upload/v1708313155/Lawq/businessman_hfnobw.png' className='w-[4rem]' />
                </div>
                <img src='https://res.cloudinary.com/de2rges3m/image/upload/v1708275519/Lawq/blob_1_swks9v.svg' className='w-[5rem] scale-x-[1.2] '/>
              </div>
              <div className='text-xl font-bold'>Career Development</div>
              <div className='w-[15rem] text-center text-sm mt-2'>Mentors provide guidance on navigating career paths and developing skills</div>
            </div>

            <div className='relative flex flex-col items-center justify-center '>
              <div>
                <div className='absolute text-3xl text-white -translate-y-3 translate-x-0.5 z-30'>
                <MdBusinessCenter className='text-black text-[4rem]' />
                </div>
                <img src='https://res.cloudinary.com/de2rges3m/image/upload/v1708275519/Lawq/blob_1_swks9v.svg' className='w-[5rem] scale-x-[1.2] '/>
              </div>
              <div className='text-xl font-bold'>Entrepreneurship</div>
              <div className='w-[15rem] text-center text-sm mt-2'>
              Mentors offer advice on starting businesses and fostering innovation</div>
            </div>

            <div className='relative flex flex-col items-center justify-center '>
              <div>
                <div className='absolute text-3xl text-white -translate-y-2 translate-x-0.5 z-30'>
                  <img src='https://res.cloudinary.com/de2rges3m/image/upload/v1708313155/Lawq/parental-control_knxojl.png' className='w-[4rem]' />
                </div>
                <img src='https://res.cloudinary.com/de2rges3m/image/upload/v1708275519/Lawq/blob_1_swks9v.svg' className='w-[5rem] scale-x-[1.2] '/>
              </div>
              <div className='text-xl font-bold'>Academic Mentorship</div>
              <div className='w-[15rem] text-center text-sm mt-2'>Mentors assist students in academic pursuits and career planning.</div>
            </div>
          </div>
        </div>
        <div className='w-full flex mt-20 justify-between relative'>
          <div className='text-4xl font-semibold flex ml-10 w-[37%]'>
            <div className=''>Here are Some of Our Best Rated <span className='text-amber-900'>Mentors</span>.</div>         
          </div>
          <div className=' flex flex-wrap gap-8 pl-5 w-[56%]'>
            {mentors && mentors.slice(0,6).map((item,index) => (
                <div key={index} className='w-[13rem] bg-white rounded-lg shadow-sm overflow-hidden group '>
                  <img src={item.pic} className='h-[15rem] w-full object-cover' />
                  <div className='absolute left-10 top-[8rem] opacity-0 group-hover:opacity-100 w-0 group-hover:w-[22rem] transition-all bg-lime-300 bg-opacity-50 overflow-hidden duration-300 p-4 rounded-lg'>
                    <div className='w-[20rem]'>
                      <div className='flex items-center justify-between'>
                        <div className='text-lg font-semibold'>{item.name}</div>
                        <div>{item.rating}⭐</div>
                      </div>
                      <div className='text-xs mt-2 font-medium'>{item.description}</div>
                      <div className='text-xs mt-2 text-amber-800'>Click to know More</div>
                    </div>
                  </div>  
                </div>
            ))}
          </div>
        </div>

        <div className='w-full flex mt-20 justify-between relative'>
          <div className=' flex flex-col ml-10 w-[37%]'>
            <div className='text-4xl font-semibold'>Find Your Personal<span className='text-amber-900'> Mentor</span>.</div>  
            <div className='text-xs font-semibold w-[70%] mt-2 text-justify'>Use the search bar to discover experienced mentors tailored to your needs by entering their names or use the selector to find them by their field of expertise and easily locate the right support for your specific needs"</div>  
          </div>
          <div className='pl-5 w-[56%]'>
            <div className='w-full h-[4rem] flex items-center justify-between pr-16'>
              <div className='w-[65%] flex items-center border-b-2 border-neutral-600 py-1 px-1 '>
                <input value={searchByField} className='w-full cursor-pointer bg-transparent outline-none' readOnly placeholder='Selected Category'/>
                <button className='text-black text-lg'><IoIosSearch /></button>
              </div>
              <div className='relative'>
                <div className=' flex items-center px-6 py-2 rounded-lg bg-amber-800  text-neutral-100  select-none' onClick={() => setExpertiseBox(!expertiseBox)}>
                  <div className=''>Expertise</div>
                  <FaAngleDown className='mt-0.5 ml-1'/>
                </div>
                  {expertiseBox && 
                    <div className='absolute bg-white rounded-xl overflow-hidden text-black  top-16 w-[17rem] -left-[2rem] flex items-center flex-col'>
                      {expertise.map((item,index) => (
                        <div key={index} onClick={() => {
                          setSearchByField(item)
                          setExpertiseBox(false)
                          apiCall()
                        }} className='py-1.5 cursor-pointer hover:text-white hover:bg-amber-800 w-full text-center transition-colors'>{item}</div>
                      ))}
                    </div>
                  }
              </div>
            </div>
            <div className='w-full flex flex-wrap gap-8 mt-5'>
              {searchMentor && searchMentor.slice(0,6).map((item,index) => (
                <div key={index} className='w-[13rem] bg-white rounded-lg shadow-sm overflow-hidden group ' onClick={() => {
                  setShowAbout(true)
                  setShowInfo(item)
                  }}>
                    <img src={item.pic} className='h-[15rem] w-full object-cover' />
                    <div className='absolute left-10 top-[11rem] opacity-0 group-hover:opacity-100 w-0 group-hover:w-[22rem] transition-all bg-lime-300 bg-opacity-50 overflow-hidden duration-300 p-4 rounded-lg'>
                      <div className='w-[20rem]'>
                        <div className='flex items-center justify-between'>
                          <div className='text-lg font-semibold'>{item.name}</div>
                          <div>{item.rating}⭐</div>
                        </div>
                        <div className='text-xs mt-2 font-medium'>{item.description}</div>
                        <div className='text-xs mt-2 text-amber-800'>Click to know More</div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showAbout && <div className='w-[100vw] h-[100vh] fixed flex items-center justify-center z-30 backdrop-blur-md flex-col '>
          <div className='w-full h-[100vh]' onClick={() => setShowAbout(false)}></div>
          {showInfo && 
            <div className='absolute w-[40%] h-[60%] bg-neutral-200 rounded-2xl'>
              <div className='w-full flex justify-center mt-2'>
                <div className='w-[3rem] h-0.5 bg-neutral-700 rounded-full'></div>
              </div>
              <div className='text-2xl flex w-full justify-end pr-2 mt-2'><IoClose onClick={() => setShowAbout(false)} /></div>
              <div className='w-full flex justify-between mt-6 pl-10'>
                <div className='flex flex-col text-sm justify-between -mt-1'>
                  <div>
                    <div className='text-2xl font-semibold'>{showInfo.name}</div>
                    <div className='text-lg font-semibold mb-2'>{showInfo.category}</div>
                    <div className='text-xs'>Age: {showInfo.age}years</div>
                    <div className='w-[15rem] mt-2'>{showInfo.description}</div>
                    <div className='mt-1'>Session: 30 min</div>
                  </div>
                  <div className='mb-5 mt-2 py-2 px-4 cursor-pointer bg-amber-800 rounded-lg w-fit text-white' onClick={() => InvitationHandler(showInfo._id)}>Get In Touch</div>
                </div>
                <div className=''>
                  <img className='w-[18rem] h-[20rem] object-cover rounded-l-full border-l' src={showInfo.pic}/>
                </div>
              </div>
            </div>
          }
        </div>}
    </div>
  )
}

export default LandingPage

const expertise = [
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