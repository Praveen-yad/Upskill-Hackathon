import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { GrFormNextLink, GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { IoClose } from "react-icons/io5";

const LandingPage = () => {
  const [expertiseBox, setExpertiseBox] = useState(false)
  const [searchByField, setSearchByField] = useState("")
  const [showAbout, setShowAbout] = useState(false)
  const [showInfo, setShowInfo] = useState([])

  return (
    <div className='bg-[#0000000d] overflow-hidden flex flex-col items-center relative'>
      <div className='fixed -z-10 text-[25rem] tracking-widest font-[900] translate-y-8 translate-x-4 bg-gradient-to-b from-neutral-100 to-neutral-300 opacity-[0.4] bg-clip-text text-transparent'> LAWYER</div>
      <div className='z-10 w-full h-[4rem] pl-5 pr-12  flex justify-between items-center'>
        <div className='text-md scale-y-[1.15] font-medium'>Lawyer_up</div>
        <div className='flex space-x-10 relative'>
          <div>Home</div>
          <div>About Us</div>
          <div>Lawyer Up</div>
          <div>Contact Us</div>
          <div className='text-white z-10'>Signup</div>
          <div className='absolute -translate-y-7 translate-x-2 right-0'>
            <img src='https://res.cloudinary.com/de2rges3m/image/upload/v1708278101/Lawq/blob_4_zuxygw.svg' className='w-[5rem] scale-x-[1.35]' />
          </div>
        </div>
      </div>

      <div className='flex justify-between w-full'> 
        <div className='w-[30vw] pl-14'>
          <div className='text-5xl font-bold mt-20'>
            Covering Every Aspect of Law⚖️ You Need.
          </div>
          <div className='mt-14 text-2xl relative flex items-center'>
            <div className='text-white mr-3 z-20'>Hire</div>
            <div>Expert</div>
            <img src='https://res.cloudinary.com/de2rges3m/image/upload/v1708278101/Lawq/blob_4_zuxygw.svg' className='absolute top-0 -translate-x-6 -translate-y-[22px] w-[5rem] scale-x-[1.35] -rotate-12' />
            <div className='w-[1.5rem] mt-0.5 h-[1px] ml-1 bg-red-500'></div>
          </div>
          <div className='mt-[9rem] text-sm w-[19rem]'>
          Finding the right legal representation just got easier. Say goodbye to endless searches and confusing jargon.
          </div>
        </div>
        <div className='flex relative justify-center translate-x-8'>
        
          <img src='https://res.cloudinary.com/de2rges3m/image/upload/v1708275519/Lawq/blob_1_swks9v.svg' className='z-10 absolute top-[30vh] scale-125 scale-x-[1.4] -rotate-[25deg] -translate-x-8'/>
          <img src='https://res.cloudinary.com/de2rges3m/image/upload/v1708278313/Lawq/blob_5_jtncev.svg' className='z-10 absolute top-[46vh] scale-[0.7] translate-x-7'/>
          <img src='https://res.cloudinary.com/de2rges3m/image/upload/v1708275065/Lawq/IMG_20240218_220830k_c9h2l6.png' className='h-[96vh] -translate-y-8 pt-10 z-30 object-cover'/>

        </div>
        <div className='w-[30vw]'>
          <div className='text-sm mt-[7rem] w-[18rem] text-justify'>Whether you're facing a personal injury case, need business legal advice, or seeking help with family matters, we've got you covered.</div>
        </div>
      </div>

      <div className='z-30 flex flex-col items-center relative w-[90%] bg-gradient-to-b from-white via-[#fff0] to-[#fff0] -translate-y-[2rem] rounded-2xl'> 
        <img src='https://res.cloudinary.com/de2rges3m/image/upload/v1708282570/Lawq/gavel-2492011_1280_mrsn5g.png' className='w-[10rem] absolute right-0 -top-16' />
        <div className='w-full flex flex-col items-center'>
          <div className='text-3xl w-[50%] text-center mt-8 font-semibold'>Explore our expert lawyers, specializing in various fields.</div>

          <div className='flex w-full justify-around mt-14'>
            <div className='relative flex flex-col items-center justify-center '>
              <div>
                <div className='absolute text-3xl text-white -translate-y-2 -translate-x-1 z-30'>
                  <img src='https://res.cloudinary.com/de2rges3m/image/upload/v1708313155/Lawq/businessman_hfnobw.png' className='w-[4rem]' />
                </div>
                <img src='https://res.cloudinary.com/de2rges3m/image/upload/v1708275519/Lawq/blob_1_swks9v.svg' className='w-[5rem] scale-x-[1.2] '/>
              </div>
              <div className='text-xl font-bold'>Business Law</div>
              <div className='w-[15rem] text-justify text-sm mt-2'>Focuses on legal matters related to corporations, businesses, and commercial transactions.</div>
            </div>

            <div className='relative flex flex-col items-center justify-center '>
              <div>
                <div className='absolute text-3xl text-white -translate-y-3 translate-x-0.5 z-30'>
                  <img src='https://res.cloudinary.com/de2rges3m/image/upload/v1708313155/Lawq/criminal_dyt3gn.png' className='w-[4rem]' />
                </div>
                <img src='https://res.cloudinary.com/de2rges3m/image/upload/v1708275519/Lawq/blob_1_swks9v.svg' className='w-[5rem] scale-x-[1.2] '/>
              </div>
              <div className='text-xl font-bold'>Criminal Law</div>
              <div className='w-[15rem] text-justify text-sm mt-2'>
                Focuses on legal matters related to corporations, businesses, and commercial transactions.</div>
            </div>

            <div className='relative flex flex-col items-center justify-center '>
              <div>
                <div className='absolute text-3xl text-white -translate-y-2 translate-x-0.5 z-30'>
                  <img src='https://res.cloudinary.com/de2rges3m/image/upload/v1708313155/Lawq/parental-control_knxojl.png' className='w-[4rem]' />
                </div>
                <img src='https://res.cloudinary.com/de2rges3m/image/upload/v1708275519/Lawq/blob_1_swks9v.svg' className='w-[5rem] scale-x-[1.2] '/>
              </div>
              <div className='text-xl font-bold'>Family Law</div>
              <div className='w-[15rem] text-justify text-sm mt-2'>Covers legal matters concerning family , such as divorce, child custody, and adoption.</div>
            </div>
          </div>
        </div>
        <div className='w-full flex mt-20 justify-between relative'>
          <div className='text-4xl font-semibold flex ml-10 w-[37%]'>
            <div className=''>Here are Some of Our Best Rated <span className='text-amber-900'>Lawyers</span>.</div>         
          </div>
          <div className=' flex flex-wrap gap-8 pl-5 w-[56%]'>
            {lawyers.map((item,index) => (
                <div key={index} className='w-[13rem] bg-white rounded-lg shadow-sm overflow-hidden group '>
                  <img src={item.image} className='h-[15rem] w-full object-cover' />
                  <div className='absolute left-10 top-[8rem] opacity-0 group-hover:opacity-100 w-0 group-hover:w-[22rem] transition-all bg-lime-300 bg-opacity-50 overflow-hidden duration-300 p-4 rounded-lg'>
                    <div className='w-[20rem]'>
                      <div className='flex items-center justify-between'>
                        <div className='text-lg font-semibold'>{item.name}</div>
                        <div>{item.rating}⭐</div>
                      </div>
                      <div className='text-xs mt-2 font-medium'>{item.about}</div>
                      <div className='text-xs mt-2 text-amber-800'>Click to know More</div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>

        <div className='w-full flex mt-20 justify-between relative'>
          <div className=' flex flex-col ml-10 w-[37%]'>
            <div className='text-4xl font-semibold'>Find Your Legal<span className='text-amber-900'> Advocate</span>.</div>  
            <div className='text-xs font-semibold w-[70%] mt-2 text-justify'>Use the search bar to discover experienced lawyers tailored to your needs by entering their names or use the selector to find them by their field of expertise and easily locate the right legal support for your specific needs"</div>  
          </div>
          <div className='pl-5 w-[56%]'>
            <div className='w-full h-[4rem] flex items-center justify-between pr-16'>
              <div className='w-[65%] flex items-center border-b-2 border-neutral-600 py-1 px-1 '>
                <input className='w-full bg-transparent outline-none'  placeholder='Search by Name'/>
                <button className='text-black text-lg'><IoIosSearch /></button>
              </div>
              <div className='relative'>
                <div className=' flex items-center px-6 py-2 rounded-lg bg-amber-800  text-neutral-100  select-none' onClick={() => setExpertiseBox(!expertiseBox)}>
                  <div className=''>Expertise</div>
                  <FaAngleDown className='mt-0.5 ml-1'/>
                </div>
                  {expertiseBox && 
                    <div className='absolute bg-white rounded-xl overflow-hidden text-black  top-16 w-[160%] -left-[2rem] flex items-center flex-col'>
                      {expertise.map((item,index) => (
                        <div key={index} onClick={() => {
                          setSearchByField(item)
                          setExpertiseBox(false)
                        }} className='py-1.5 cursor-pointer hover:text-white hover:bg-amber-800 w-full text-center transition-colors'>{item}</div>
                      ))}
                    </div>
                  }
              </div>
            </div>
            <div className='w-full flex flex-wrap gap-8 mt-5'>
              {SearchLawyers.map((item,index) => (
                <div key={index} className='w-[13rem] bg-white rounded-lg shadow-sm overflow-hidden group ' onClick={() => {
                  setShowAbout(true)
                  setShowInfo(item)
                  }}>
                    <img src={item.image} className='h-[15rem] w-full object-cover' />
                    <div className='absolute left-10 top-[11rem] opacity-0 group-hover:opacity-100 w-0 group-hover:w-[22rem] transition-all bg-lime-300 bg-opacity-50 overflow-hidden duration-300 p-4 rounded-lg'>
                      <div className='w-[20rem]'>
                        <div className='flex items-center justify-between'>
                          <div className='text-lg font-semibold'>{item.name}</div>
                          <div>{item.rating}⭐</div>
                        </div>
                        <div className='text-xs mt-2 font-medium'>{item.about}</div>
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
            <div className='absolute w-[40%] h-[90%] bg-neutral-200 rounded-2xl'>
              <div className='w-full flex justify-center mt-2'>
                <div className='w-[3rem] h-0.5 bg-neutral-700 rounded-full'></div>
              </div>
              <div className='text-2xl flex w-full justify-end pr-2 mt-2'><IoClose onClick={() => setShowAbout(false)} /></div>
              <div className='w-full flex justify-between mt-6 pl-10'>
                <div className='flex flex-col text-sm justify-between -mt-1'>
                  <div>
                    <div className='text-2xl font-semibold'>{showInfo.name}</div>
                    <div className='text-xs'>Age: 39Years</div>
                    <div className='w-[15rem] text-xs mt-2'>{showInfo.about}</div>
                    <div className='mt-2'>Price: Rs.4000/Session</div>
                    <div className='mt-1'>Session: 30 min</div>
                  </div>
                  <div className='mb-5 py-2 px-4 cursor-pointer bg-amber-800 rounded-lg w-fit text-white '>Get In Touch</div>
                </div>
                <div className=''>
                  <img className='w-[18rem] h-[20rem] object-cover rounded-l-full border-l' src={showInfo.image}/>
                </div>
              </div>
            </div>
          }
        </div>}
    </div>
  )
}

export default LandingPage


const lawyers=[
  {
    name:"Ethan Reynolds",
    about:"Experienced attorney Emerald provides personalized legal solutions with integrity and dedication, advocating for clients' rights and delivering optimal outcomes.",
    rating:5,
    image:"https://res.cloudinary.com/de2rges3m/image/upload/v1708320127/Lawq/Lawyers/young-successful-businessman-posing-with-crossed-arms_176420-1149_ne4ste.avif"
  },
  {
    name:"Marcus Chen",
    about:"Experienced attorney Emerald provides personalized legal solutions with integrity and dedication, advocating for clients' rights and delivering optimal outcomes.",
    rating:5,
    image:"https://res.cloudinary.com/de2rges3m/image/upload/v1708320126/Lawq/Lawyers/businessman-black-suit-with-tie-posing_114579-15877_bnknzd.avif"
  },
  {
    name:"Sophia Nguyen",
    about:"Experienced attorney Emerald provides personalized legal solutions with integrity and dedication, advocating for clients' rights and delivering optimal outcomes.",
    rating:4.96,
    image:"https://res.cloudinary.com/de2rges3m/image/upload/v1708320125/Lawq/Lawyers/businesswoman-posing_23-2148142829_xlxdxr.avif"
  },
  {
    name:"Alexander Gallagher",
    about:"Experienced attorney Emerald provides personalized legal solutions with integrity and dedication, advocating for clients' rights and delivering optimal outcomes.",
    rating:4.92,
    image:"https://res.cloudinary.com/de2rges3m/image/upload/v1708320124/Lawq/Lawyers/smiling-business-man-sitting-empty-office-desk_1262-5631_dbtuj2.avif"
  },
  {
    name:"Isabella Rivera",
    about:"Experienced attorney Emerald provides personalized legal solutions with integrity and dedication, advocating for clients' rights and delivering optimal outcomes.",
    rating:4.89,
    image:"https://res.cloudinary.com/de2rges3m/image/upload/v1708320125/Lawq/Lawyers/front-view-smiley-woman-posing_23-2149429383_miu5qo.avif"
  },
  {
    name:"Lucas Martinez",
    about:"Experienced attorney Emerald provides personalized legal solutions with integrity and dedication, advocating for clients' rights and delivering optimal outcomes.",
    rating:4.86,
    image:"https://res.cloudinary.com/de2rges3m/image/upload/v1708320125/Lawq/Lawyers/businessman-with-hand-pocket_1098-54_hw1ihl.avif"
  },
]
const SearchLawyers=[
  {
    name:"Ethan Reynolds",
    about:"Experienced attorney Emerald provides personalized legal solutions with integrity and dedication, advocating for clients' rights and delivering optimal outcomes.",
    rating:5,
    image:"https://res.cloudinary.com/de2rges3m/image/upload/v1708320127/Lawq/Lawyers/young-successful-businessman-posing-with-crossed-arms_176420-1149_ne4ste.avif"
  },
  {
    name:"Marcus Chen",
    about:"Experienced attorney Emerald provides personalized legal solutions with integrity and dedication, advocating for clients' rights and delivering optimal outcomes.",
    rating:5,
    image:"https://res.cloudinary.com/de2rges3m/image/upload/v1708320126/Lawq/Lawyers/businessman-black-suit-with-tie-posing_114579-15877_bnknzd.avif"
  },
  {
    name:"Sophia Nguyen",
    about:"Experienced attorney Emerald provides personalized legal solutions with integrity and dedication, advocating for clients' rights and delivering optimal outcomes.",
    rating:4.96,
    image:"https://res.cloudinary.com/de2rges3m/image/upload/v1708320125/Lawq/Lawyers/businesswoman-posing_23-2148142829_xlxdxr.avif"
  },
  {
    name:"Alexander Gallagher",
    about:"Experienced attorney Emerald provides personalized legal solutions with integrity and dedication, advocating for clients' rights and delivering optimal outcomes.",
    rating:4.92,
    image:"https://res.cloudinary.com/de2rges3m/image/upload/v1708320124/Lawq/Lawyers/smiling-business-man-sitting-empty-office-desk_1262-5631_dbtuj2.avif"
  },
  {
    name:"Isabella Rivera",
    about:"Experienced attorney Emerald provides personalized legal solutions with integrity and dedication, advocating for clients' rights and delivering optimal outcomes.",
    rating:4.89,
    image:"https://res.cloudinary.com/de2rges3m/image/upload/v1708320125/Lawq/Lawyers/front-view-smiley-woman-posing_23-2149429383_miu5qo.avif"
  },
  {
    name:"Lucas Martinez",
    about:"Experienced attorney Emerald provides personalized legal solutions with integrity and dedication, advocating for clients' rights and delivering optimal outcomes.",
    rating:4.86,
    image:"https://res.cloudinary.com/de2rges3m/image/upload/v1708320125/Lawq/Lawyers/businessman-with-hand-pocket_1098-54_hw1ihl.avif"
  },
]

const expertise = [
 "Civil Litigation",
"Criminal Defense",
"Family Law",
"Corporate Law",
"Real Estate Law",
"Intellectual Property Law",
"Employment Law",
"Immigration Law",
"Environmental Law",
"Tax Law",
"Healthcare Law",
"International Law"
]