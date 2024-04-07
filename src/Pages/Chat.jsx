import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveChat } from '../store/activeChat'
import { setRecall } from '../store/recall'
import { IoIosArrowBack } from "react-icons/io";


const Chat = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [chats, setChats] = useState([])
  const recallIt = useSelector(state => state.recall)
  const [id] = useState(localStorage.getItem('id'))
  const config = {
    headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  useEffect(() => {
    const fetchChats = async() => {
      await axios.get("http://localhost:5000/api/chat",config)
      .then(res => {
        // console.log(res)
        setChats(res.data)
        dispatch(setRecall())
      }).catch(err => {
        console.log(err)
      })
    }
    fetchChats()
  },[recallIt])

  const removeNew = async(id) => {
    
    await axios.post(`http://localhost:5000/api/chat/removenew`,{
      chatId:id
      },config)
      .then(res => {
          // console.log(res)
          dispatch(setRecall())
      })
      .catch(err => {
          // console.log(err)
      })  
      
  }

  const timeStamp = (timeStamp) => {
    let time = ''

    if(timeStamp){
        const newTimeStamp = new Date(timeStamp).getTime()
        time = new Intl.DateTimeFormat('en-In',{
        timeZone:'Asia/Kolkata',
        timeStyle: "short"
        }).format(newTimeStamp)
        return time
    }else{
        return time
    }
  }

  const [isMentor] = useState(localStorage.getItem("isMentor"))
  return (
    <div className='w-full flex h-[100vh] bg-neutral-200'>
      <div className='w-[19.2rem] bg-white border-r '>
        <div className=''>
          <div onClick={()=>navigate("/")} className='ml-2 mt-3 flex items-center hover:bg-neutral-100 w-fit pr-3 py-0.5 rounded-xl cursor-pointer'><IoIosArrowBack/>Back</div>
          <div className='text-3xl font-semibold pl-2 pt-4 border-b pb-3'>{isMentor == "true" ? 'Clients' : 'Mentors'} </div>
        </div>
        <div className='space-y-5 mt-5'>
          {chats && chats.map((item, index) => (
            <div key={index}>{(item.users[0]._id) == id ? 
            <div className='bg-neutral-100 mx-3 py-2 px-3 rounded-xl flex' onClick={() =>{ 
              dispatch(setActiveChat(item._id))
              removeNew(item._id)
              navigate(`/chat/${item._id}`)
          }}>
              <div><img src={item.users[1].pic} className='w-12 h-12 rounded-full object-cover'/></div>
              <div className='ml-3'>
                <div className='capitalize'>{item.users[1].name}</div>
                <div className='text-xs truncate w-[9rem]'>{item.latestMessage && item.latestMessage.content}</div>
              </div>
              <div className=''>
                <div className='ml-auto text-xs w-[3rem]'>{timeStamp(item.latestMessage?.createdAt)}</div>
                {item.newMessage && <div className='w-3 h-3 rounded-full bg-green-500 mt-2'></div>}
              </div>
            </div> 
              : 
            <div className='bg-neutral-100 mx-3 py-2 px-3 rounded-xl flex' onClick={() => navigate(`/chat/${item._id}`)}>
              <div><img src={item.users[0].pic} className='w-12 h-12 rounded-full object-cover'/></div>
              <div className='ml-3'>
                <div className='capitalize'>{item.users[0].name}</div>
                <div className='text-xs truncate w-[9rem]'>{item.latestMessage && item.latestMessage.content}</div>
              </div>
              <div className=''>
                <div className='ml-auto text-xs w-[3rem]'>{timeStamp(item.latestMessage?.createdAt)}</div>
                {item.newMessage && <div className='w-3 h-3 rounded-full bg-green-500 mt-2'></div>}
              </div>
            </div> 
            }</div>
          ))} 
        </div>
      </div>
      <div className='flex-1'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Chat
