import axios, { all } from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import ChatDay from './ChatDay'
import MsgReceived from './MsgReceived'
import MsgSent from './MsgSent' 
import { io } from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux'
import { setRecall } from '../store/recall'
import Peer from 'simple-peer'
import ReactPlayer from 'react-player'
import { IoClose } from "react-icons/io5";
let socket, selectedChatCompare;


const Message = () => {
  const activeChat = useSelector(state => state.activeChat)
  const dispatch = useDispatch();
  const ENDPOINT = 'http://localhost:5000'
  const {chatId} = useParams()
  const [id] = useState(localStorage.getItem('id'))
  const [chat, setChats] = useState()
  const [message, setMessage]= useState("")
  const [allMessages, setAllMessages] = useState([])
  const [socketConnected, setSocketConnected] = useState(false);
  const [showCalling, setShowCalling] = useState(false)
  const [myStream, setMyStream] = useState()
  const [callAccepted, setCallAccepted] = useState(false)
  const [call, setCall] = useState({})
  const [callDecline, setCallDecline] = useState(false)
  const [callFrom, setCallFrom] = useState()
  const [showAudio, setShowAudio] = useState(true)
  const [showVideo, setShowVideo] = useState(true)
  const UserVideo = useRef()
  const connectionRef = useRef()

  const config = {
    headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const getDate = (timeStamp) => {
    const newTimeStamp = new Date(timeStamp).getTime();
    const date = new Intl.DateTimeFormat("en-In", {
        timeZone: "Asia/Kolkata",
        dateStyle: "short",
    }).format(newTimeStamp);
    return date;
};

  useEffect(() => {
    socket = io(ENDPOINT)
    socket.emit("setup", id)
    socket.on("connected", () => setSocketConnected(true))

    const fetchChat = async() => {
      await axios.post("http://localhost:5000/api/chat/getreciver",{
        chatId: chatId
      },config)
      .then(res => {
        // console.log(res)
        setChats(res.data)
      }).catch(err => {
        console.log(err)
      })
    }
    fetchChat()

    const allMessages = async() => {
      await axios.get(`http://localhost:5000/api/message/${chatId}`,config)
      .then(res => {
        setAllMessages(res.data.response.reverse())
        socket.emit("join chat", res.data.response[0].chat._id)
        // console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    }
    allMessages();
    selectedChatCompare = chatId;
  },[activeChat])

  const SendMessage = async(e) => {
    e.preventDefault()
    axios.post("http://localhost:5000/api/message",{
      content: message,
      chatId: chatId
    }, config)
    .then(res => {
      // console.log(res)
      socket.emit("new message", res.data.response);
      setAllMessages([res.data.response, ...allMessages])
      setMessage('')
    })
    .catch(err => console.log(err))
  }

  const Notify = async (id) => {
    console.log(chatId, id)
    // dispatch(setSecondRecall())
    await axios.post(`http://localhost:5000/api/chat/addnew`, {
        chatId: id
    }, config)
        .then(res => {
            // console.log(res)
        })
        .catch(err => {
            // console.log(err)
        })
}

  useEffect(() => {
    socket.on("message received", (newMessageReceived) => {
        if (selectedChatCompare !== newMessageReceived.chat._id) {
            Notify(newMessageReceived.chat._id);
        } else {
            Proceed(newMessageReceived)
        }
        dispatch(setRecall())
    });
  });

  const Proceed = (newMessageReceived) => {
    if (newMessageReceived.chat._id !== chatId) {
        return 
    } else {
        setAllMessages([newMessageReceived, ...allMessages]);
        // dispatch(setSecondRecall())
    }
  }

  const HandelCall = async (UserData) => {
    setShowCalling(true)
    
    await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((currentStream) => {
            setMyStream(currentStream);
            // myVideo.current.srcObject = currentStream;

            const peer = new Peer({ initiator: true, trickle: false, stream: currentStream });

            peer.on('signal', (data) => {
                let ref = JSON.stringify(UserData)
                socket.emit('callUser', { userToCall: activeChat, signalData: data, userData: ref });
            });

            peer.on("stream", (currentStream) => {
                UserVideo.current.srcObject = currentStream
            });

            socket.on('callAccepted', ({ signal }) => {
                peer.signal(signal);
                setCallAccepted(true)
                setShowCalling(false)
            });

            connectionRef.current = peer;
        });
      }


    const handelUserCall = async ({ from, signal }) => {
      let ref = JSON.parse(from)
      setCallFrom(ref)
      setCallDecline(false)
      setCall({ isReceivingCall: true, from: from, signal: signal });
    }

    const answerCall = async () => {
        setCallAccepted(true);
        setShowCalling(false)
        await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((currentStream) => {
                setMyStream(currentStream);
                // myVideo.current.srcObject = currentStream
                const peer = new Peer({ initiator: false, trickle: false, stream: currentStream });

                peer.on('signal', (data) => {
                    socket.emit('answerCall', { signal: data, to: chatId });
                });

                peer.on("stream", (currentStream) => {
                    UserVideo.current.srcObject = currentStream;
                    setCall({ isReceivingCall: false })
                });

                peer.signal(call.signal);
                connectionRef.current = peer;
            })
    };


    const leaveCall = () => {
      setCall({ isReceivingCall: false })
      setCallAccepted(false)
      socket.emit("hungUp", { to: chatId })
      // window.location.reload()
    };


    const handelDecline = () => {
        setCallDecline(true)
    }

    const handelDisconnect = () => {
        setCallAccepted(false)
        leaveCall();
    }

  useEffect(() => {
    socket.on('callFromUser', ({from, signal}) => {
      console.log("calling")
      let ref = JSON.parse(from)
      setCallFrom(ref)
      setCallDecline(false)
      setCall({ isReceivingCall: true, from: from, signal: signal });
    })
    socket.on("CallDisconnected", handelDisconnect)
    socket.on("CallDeclined", handelDecline)

    // return () => {
    //     socket.off('callFromUser', handelUserCall)
    //     socket.off("CallDisconnected", handelDisconnect)
    //     socket.off("CallDeclined", handelDecline)
    // };
    // eslint-disable-next-line
  }, [])


  const stopVideo = () => {
    const videoTrack = myStream.getTracks().find(track => track.kind === 'video');
    if (videoTrack.enabled) {
        videoTrack.enabled = false;
        setShowVideo(true)
    } else {
        videoTrack.enabled = true;
        setShowVideo(false)
    }
}

const stopAudio = () => {
    const videoTrack = myStream.getTracks().find(track => track.kind === 'audio');
    if (videoTrack.enabled) {
        videoTrack.enabled = false;
        setShowAudio(true)
    } else {
        videoTrack.enabled = true;
        setShowAudio(false)
    }
}

  return (
    <div className='w-full flex flex-col h-full bg-neutral-100 relative'>
      <div className='h-[4rem] bg-white border-b'>
      {chat && chat.users[0]._id == id ? 
        <div className=' h-full flex justify-between items-center px-4'>
          <div className='flex items-center'>
            <div><img src={chat && chat.users[1].pic} className='w-12 h-12 rounded-full object-cover'/></div>
            <div className='capitalize ml-2 text-lg'>{chat && chat.users[1].name}</div>
          </div>
          <div className='bg-green-500 px-5 py-1 rounded-lg cursor-pointer'onClick={() => {
            HandelCall({name:chat.users[1].name, id:chat.users[1]._id, pic:chat.users[1].pic})
          }}>Call</div>
          {
          showCalling && 
          <div className='absolute top-16 w-[10rem] p-5 rounded-2xl bg-sky-500 right-5 flex flex-col items-center'>
              <div className='ml-auto translate-x-3 -translate-y-3 cursor-pointer hover:bg-neutral-200 rounded-full'onClick={()=>{
                setShowCalling(false)
                setCallDecline(false)
                setMyStream(myStream.getTracks().forEach(function (track) {
                    track.stop();
                }))
              }}><IoClose/></div>
              <div><img src={chat.users[1].pic} className='w-14 h-14 rounded-full object-cover'/></div>
              <div className='capitalize font-semibold'>{chat.users[1].name}</div>
              <div className='flex text-xs'>Ringing<div className='animate-pulse'>...</div></div>
          </div>
        }
        </div>
        :
        <div className=' h-full flex justify-between items-center px-4'>
        <div className='flex items-center'>
          <div><img src={chat && chat.users[0].pic} className='w-12 h-12 rounded-full object-cover'/></div>
          <div className='capitalize ml-2 text-lg'>{chat && chat.users[0].name}</div>
        </div>
        <div className='bg-green-500 px-5 py-1 rounded-lg' onClick={() => {
          HandelCall({name:chat.users[0].name, id:chat.users[0]._id, pic:chat.users[0].pic})
        }}>Call</div>
        {
          showCalling && 
          <div className='absolute top-16 w-[10rem] p-5 rounded-2xl bg-sky-500 right-5 flex flex-col items-center'>
              <div className='ml-auto translate-x-3 -translate-y-3 cursor-pointer hover:bg-neutral-200 rounded-full'onClick={()=>{
                setShowCalling(false)
                setCallDecline(false)
                setMyStream(myStream.getTracks().forEach(function (track) {
                    track.stop();
                }))
              }}><IoClose/></div>
              <div><img src={chat.users[0].pic} className='w-14 h-14 rounded-full object-cover'/></div>
              <div className='capitalize font-semibold'>{chat.users[0].name}</div>
              <div className='flex text-xs'>Ringing<div className='animate-pulse'>...</div></div>
          </div>
        }
      </div>}
      </div>
        {
         call.isReceivingCall && 
          <div className='absolute top-16 w-[10rem] p-5 rounded-2xl bg-white shadow-md right-5 flex flex-col items-center'>
              <div className='ml-auto translate-x-3 -translate-y-3 cursor-pointer hover:bg-neutral-200 rounded-full' onClick={()=>{
                setShowCalling(false)
                setCallDecline(false)
                setMyStream(myStream.getTracks().forEach(function (track) {
                    track.stop();
                }))
              }}><IoClose/></div>
              <div><img src={callFrom.pic} className='w-14 h-14 rounded-full object-cover'/></div>
              <div className='capitalize font-semibold'>{callFrom.name}</div>
              <div className='flex text-xs space-x-2'>
                <div className='bg-green-500 px-2 py-1 rounded-md cursor-pointer' onClick={answerCall}>Accept</div>
                <div className='bg-red-500 px-2 py-1 rounded-md cursor-pointer'>Decline</div>
              </div>
          </div>
        }

      <div className='flex-1 flex items-end '>
      <div className="overflow-y-auto h-[82.5vh] w-full p-5 flex flex-col-reverse">
          {allMessages.map((item, index) => (
              <div key={index}>
                  {getDate(item.createdAt) === getDate(allMessages[index === allMessages.length - 1 ? allMessages.length - 1 : index + 1].createdAt) ? (
                      <div></div>
                  ) : (
                      <ChatDay timeStamp={item.createdAt} />
                  )}
                  {item.sender._id === id ? (
                      <MsgSent
                          timeStamp={item.createdAt}
                          message={item.content}
                      />
                  ) : (
                      <MsgReceived
                          timeStamp={item.createdAt}
                          message={item.content}
                      />      
                  )}
              </div>
          ))}
      </div>
      </div>
      {callAccepted && 
      <div className='w-full backdrop-blur-lg h-full absolute top-0 flex items-center justify-around'>
        <div className=' -scale-x-100'>
          <video ref={UserVideo} className='w-[58rem]' autoPlay />
        </div>
        <div className='-scale-x-100 flex flex-col items-center justify-between h-full py-5'>
          <ReactPlayer width={'230px'} height={'165px'} url={myStream} playing /> 
          <div className='-scale-x-100 space-y-3'>
            <div className='w-[13rem] py-2 text-center font-semibold bg-green-500 rounded-xl cursor-pointer' onClick={stopAudio}>{!showAudio ? 'Mute' : 'Unmute'}</div>
            <div className='w-[13rem] py-2 text-center font-semibold bg-green-500 rounded-xl cursor-pointer' onClick={stopVideo}>{!showVideo ? 'Stop Video' : 'Start Video'}</div>
            <div className='w-[13rem] py-2 text-center font-semibold bg-red-500 rounded-xl cursor-pointer' onClick={leaveCall}>End Call</div>
          </div>
        </div>
      </div>}

      <form onSubmit={SendMessage}>
        <div className='h-[4rem] bg-white border-t flex  justify-around items-center px-3'>
          <div className='w-[89%] bg-neutral-200 px-2 py-2 rounded-lg'><input value={message} className='w-full bg-transparent outline-none' placeholder='Write Here...' onChange={(e) => setMessage(e.target.value)}/></div>
          <button className='bg-green-500 rounded-lg py-2 px-8'>Send</button>
        </div>
      </form>
    </div>
  )
}

export default Message
