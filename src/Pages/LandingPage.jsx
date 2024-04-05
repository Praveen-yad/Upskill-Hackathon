import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { GrFormNextLink, GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const LandingPage = () => {
  const [expertiseBox, setExpertiseBox] = useState(false);
  const [searchByField, setSearchByField] = useState("");
  const [showAbout, setShowAbout] = useState(false);
  const [showInfo, setShowInfo] = useState([]);
  const [nav, setNav] = useState(true);
  const handleNav = () => setNav(!nav);
  return (
    <div className="bg-[#0000000d] overflow-hidden flex flex-col items-center relative">
      {/* <div className="fixed -z-10 text-[25rem] tracking-widest font-[900] translate-y-8 translate-x-4 bg-gradient-to-b from-neutral-100 to-neutral-300 opacity-[0.4] bg-clip-text text-transparent">
        {" "}
        MENTOR
      </div> */}
      <div className="z-10 w-full h-[4rem] pl-5 pr-12  flex justify-between items-center border-b border-gray-300 ">
        <div className="text-md scale-y-[1.15] font-medium">Mentor_Link</div>
        <div className="md:flex hidden space-x-10 relative">
          <div>Home</div>
          <div>About Us</div>
          <div>Mentor_Link</div>
          <div>Contact Us</div>

          <div className="text-white z-10">Signup</div>
          <div className="absolute -translate-y-7 translate-x-2 right-0">
            <img
              src="https://res.cloudinary.com/de2rges3m/image/upload/v1708278101/Lawq/blob_4_zuxygw.svg"
              className="w-[5rem] scale-x-[1.35]"
            />
          </div>
        </div>

        <div onClick={handleNav} className=" md:hidden block relative z-9999">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            !nav
              ? "left-0  w-[100%] h-full border-r border-r-gray-900 translate-x-0 duration-500 ease-out bg-gradient-to-b from-neutral-100 to-neutral-300 text-black md:hidden absolute top-[4rem] border-t"
              : "fixed left-[-100%]"
          }
        >
          <ul className="pt-24 p-4 uppercase">
            <li className="p-4 border-b border-gray-300">Home</li>
            <li className="p-4 border-b border-gray-300">About Us</li>
            <li className="p-4 border-b border-gray-300">Mentor_Link</li>
            <li className="p-4 border-b border-gray-300">Contact </li>
          </ul>
        </div>
      </div>

      <div className="md:flex md:justify-between w-full flex-col-3">
        <div className="md:w-[30vw] pl-14">
          <div className="text-5xl font-bold mt-20">
            "Empowering Every Aspect of Your Journey 🚀Every Step of the Way"
          </div>
          <div className="mt-14 text-2xl relative md:flex md:items-center">
            <div className="text-black mr-3 z-20">Hire</div>
            <div>Mentors</div>
            <img
              src="https://res.cloudinary.com/de2rges3m/image/upload/v1708278101/Lawq/blob_4_zuxygw.svg"
              className="absolute top-0 -translate-x-6 -translate-y-[22px] w-[5rem] scale-x-[1.35] -rotate-12"
            />
            <div className="w-[1.5rem] mt-0.5 h-[1px] ml-1 bg-red-500"></div>
          </div>
          <div className="md:mt-[1rem] text-lg font-semibold text-gray-900 py-4vw w-[19rem] m-0">
            Discovering the perfect mentorship fit just became effortles. Say
            goodbye to endless searches and bewildering options..
          </div>
        </div>
        <div className="flex relative justify-center translate-x-8">
          <img
            src="https://res.cloudinary.com/de2rges3m/image/upload/v1708275519/Lawq/blob_1_swks9v.svg"
            className="z-10 absolute top-[30vh] scale-125 scale-x-[1.4] -rotate-[25deg] -translate-x-8"
          />
          <img
            src="https://res.cloudinary.com/de2rges3m/image/upload/v1708278313/Lawq/blob_5_jtncev.svg"
            className="z-10 absolute top-[46vh] scale-[0.7] translate-x-7"
          />
          <img
            src="https://res.cloudinary.com/de2rges3m/image/upload/v1708275065/Lawq/IMG_20240218_220830k_c9h2l6.png"
            className="md:h-[96vh] -translate-y-8 pt-10 z-30 object-cover hidden"
          />
        </div>
        <div className="w-[30vw]">
          <div className=" md:mt-[7rem] w-[24rem] px-8 py-8 ml-6 md:ml-0 text-justify text-lg">
            Embark on life's transformative journey with expert guidance and
            personalized support from our diverse mentor community.
          </div>
        </div>
      </div>

      <div className="z-30 md:flex md:flex-col md:items-center relative md:w-[90%] w-[100%] bg-gradient-to-b from-white via-[#fff0] to-[#fff0] -translate-y-[2rem] rounded-2xl mt-24 ">
        <img
          src="https://res.cloudinary.com/de2rges3m/image/upload/v1708282570/Lawq/gavel-2492011_1280_mrsn5g.png"
          className="w-[10rem] absolute right-0 -top-16 "
        />
        <div className="w-full flex flex-col items-center">
          <div className="text-3xl w-[50%] text-center mt-8 font-semibold">
            Discover ourskilled mentors,specializing a all fields.
          </div>

          <div className="flex w-full md:justify-around justify-center items-center flex-wrap mt-14">
            <div className="relative flex flex-col  items-center justify-center  ">
              <div>
                <div className="absolute text-3xl text-white -translate-y-2 -translate-x-1 z-30">
                  <img
                    src="https://res.cloudinary.com/de2rges3m/image/upload/v1708313155/Lawq/businessman_hfnobw.png"
                    className="w-[4rem]"
                  />
                </div>
                <img
                  src="https://res.cloudinary.com/de2rges3m/image/upload/v1708275519/Lawq/blob_1_swks9v.svg"
                  className="w-[5rem] scale-x-[1.2] "
                />
              </div>
              <div className="md:text-xl text-3xl font-bold mt-4">Subject Matter Expertise</div>
              <div className="w-[15rem] text-justify text-sm mt-2">
                Mentors specialized in fields or industries such as technology,
                finance, marketing, and law.
              </div>
            </div>

            <div className="md:relative flex flex-col items-center justify-center ">
              <div>
                <div className="absolute text-3xl text-white -translate-y-3 translate-x-0.5 z-30">
                  <img
                    src="https://res.cloudinary.com/de2rges3m/image/upload/v1708313155/Lawq/criminal_dyt3gn.png"
                    className="w-[4rem]"
                  />
                </div>
                <img
                  src="https://res.cloudinary.com/de2rges3m/image/upload/v1708275519/Lawq/blob_1_swks9v.svg"
                  className="w-[5rem] scale-x-[1.2] "
                />
              </div>
              <div className="text-xl font-bold">
                Professional Growth Mentoring
              </div>
              <div className="w-[15rem] text-justify text-sm mt-2">
                Focuses on career advancement and guidance in job search,
                networking and workplace challenges.
              </div>
            </div>

            <div className="relative flex flex-col items-center justify-center ">
              <div>
                <div className="absolute text-3xl text-white -translate-y-2 translate-x-0.5 z-30">
                  <img
                    src="https://res.cloudinary.com/de2rges3m/image/upload/v1708313155/Lawq/parental-control_knxojl.png"
                    className="w-[4rem]"
                  />
                </div>
                <img
                  src="https://res.cloudinary.com/de2rges3m/image/upload/v1708275519/Lawq/blob_1_swks9v.svg"
                  className="w-[5rem] scale-x-[1.2] "
                />
              </div>
              <div className="text-xl font-bold">Life Skills Mentoring</div>
              <div className="w-[15rem] text-justify text-sm mt-2">
                Foster holistic development and personal growth through life
                skills mentoring.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex mt-20 flex-wrap justify-center md:justify-between relative">
          <div className="text-4xl font-semibold flex ml-10 w-[37%]">
            <div className="h-[13rem] w-[23rem] ">
              Here are Some of Our Best Rated{" "}
              <span className="text-amber-900">Mentor's</span>.
            </div>
          </div>
          <div className=" flex flex-wrap gap-8 pl-5 w-[56%]">
            {lawyers.map((item, index) => (
              <div
                key={index}
                className="w-[13rem] bg-white rounded-lg shadow-sm overflow-hidden group "
              >
                <img
                  src={item.image}
                  className="h-[15rem] w-full object-cover"
                />
                <div className="absolute left-10 top-[8rem] opacity-0 group-hover:opacity-100 w-0 group-hover:w-[22rem] transition-all bg-lime-300 bg-opacity-50 overflow-hidden duration-300 p-4 rounded-lg">
                  <div className="w-[20rem]">
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-semibold">{item.name}</div>
                      <div>{item.rating}⭐</div>
                    </div>
                    <div className="text-xs mt-2 font-medium">{item.about}</div>
                    <div className="text-xs mt-2 text-amber-800">
                      Click to know More
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-center mt-20 md:justify-between relative">
          <div className=" flex flex-col ml-10 md:w-[37%] w-full">
            <div className="text-4xl font-semibold">
              Find Your Personal <span className="text-amber-900">Mentor</span>.
            </div>
            <div className="text-xs font-semibold w-[70%] mt-2 text-justify">
              "Discover tailored mentorship by searching names or selecting
              expertise fields. Connect with seasoned mentors for personalized
              guidance in personal growth, career development, and life
              challenges. Streamline your journey to find the perfect mentor for
              your needs on our user-friendly platform."
            </div>
          </div>
          <div className="pl-5 w-[56%]">
            <div className="w-full h-[4rem] flex flex-wrap items-center md:justify-between pr-16">
              <div className="md:w-[65%] w-full  flex items-center border-b-2 border-neutral-600 py-1 px-1 ">
                <input
                  className="w-full bg-transparent outline-none"
                  placeholder="Search by Name"
                />
                <button className="text-black text-lg">
                  <IoIosSearch />
                </button>
              </div>
              <div className="relative">
                <div
                  className=" flex items-center px-6 py-2 rounded-lg bg-amber-800  text-neutral-100  select-none"
                  onClick={() => setExpertiseBox(!expertiseBox)}
                >
                  <div className="">Expertise</div>
                  <FaAngleDown className="mt-0.5 ml-1" />
                </div>
                {expertiseBox && (
                  <div className="absolute bg-white rounded-xl overflow-hidden text-black  top-16 w-[160%] -left-[2rem] flex items-center flex-col">
                    {expertise.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setSearchByField(item);
                          setExpertiseBox(false);
                        }}
                        className="py-1.5 cursor-pointer hover:text-white hover:bg-amber-800 w-full text-center transition-colors"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="w-full flex flex-wrap gap-8 mt-5">
              {SearchLawyers.map((item, index) => (
                <div
                  key={index}
                  className="w-[13rem] bg-white rounded-lg shadow-sm overflow-hidden group "
                  onClick={() => {
                    setShowAbout(true);
                    setShowInfo(item);
                  }}
                >
                  <img
                    src={item.image}
                    className="h-[15rem] w-full object-cover"
                  />
                  <div className="absolute left-10 top-[11rem] opacity-0 group-hover:opacity-100 w-0 group-hover:w-[22rem] transition-all bg-lime-300 bg-opacity-50 overflow-hidden duration-300 p-4 rounded-lg">
                    <div className="w-[20rem]">
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-semibold">{item.name}</div>
                        <div>{item.rating}⭐</div>
                      </div>
                      <div className="text-xs mt-2 font-medium">
                        {item.about}
                      </div>
                      <div className="text-xs mt-2 text-amber-800">
                        Click to know More
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showAbout && (
        <div className="w-[100vw] h-[100vh] fixed flex items-center justify-center z-30 backdrop-blur-md flex-col ">
          <div
            className="w-full h-[100vh]"
            onClick={() => setShowAbout(false)}
          ></div>
          {showInfo && (
            <div className="absolute w-[40%] h-[90%] bg-neutral-200 rounded-2xl">
              <div className="w-full flex justify-center mt-2">
                <div className="w-[3rem] h-0.5 bg-neutral-700 rounded-full"></div>
              </div>
              <div className="text-2xl flex w-full justify-end pr-2 mt-2">
                <IoClose onClick={() => setShowAbout(false)} />
              </div>
              <div className="w-full flex justify-between mt-6 pl-10">
                <div className="flex flex-col text-sm justify-between -mt-1">
                  <div>
                    <div className="text-2xl font-semibold">
                      {showInfo.name}
                    </div>
                    <div className="text-xs">Age: 39Years</div>
                    <div className="w-[15rem] text-xs mt-2">
                      {showInfo.about}
                    </div>
                    <div className="mt-2">Price: Rs.4000/Session</div>
                    <div className="mt-1">Session: 30 min</div>
                  </div>
                  <div className="mb-5 py-2 px-4 cursor-pointer bg-amber-800 rounded-lg w-fit text-white ">
                    Get In Touch
                  </div>
                </div>
                <div className="">
                  <img
                    className="w-[18rem] h-[20rem] object-cover rounded-l-full border-l"
                    src={showInfo.image}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LandingPage;

const lawyers = [
  {
    name: "Ethan Reynolds",
    about:
      "Experienced mentor Ethan offers tailored guidance and support to aspiring entrepreneurs, helping them navigate challenges and achieve their goals with determination and passion.",
    rating: 5,
    image:
      "https://res.cloudinary.com/de2rges3m/image/upload/v1708320127/Lawq/Lawyers/young-successful-businessman-posing-with-crossed-arms_176420-1149_ne4ste.avif",
  },
  {
    name: "Marcus Chen",
    about:
      "Experienced mentor Marcus specializes in leadership development, empowering individuals to unlock their full potential and lead with authenticity and purpose.",
    rating: 5,
    image:
      "https://res.cloudinary.com/de2rges3m/image/upload/v1708320126/Lawq/Lawyers/businessman-black-suit-with-tie-posing_114579-15877_bnknzd.avif",
  },
  {
    name: "Sophia Nguyen",
    about:
      "Experienced mentor Sophia provides personalized career coaching, guiding professionals towards fulfilling and successful career paths with empathy and insight.",
    rating: 4.96,
    image:
      "https://res.cloudinary.com/de2rges3m/image/upload/v1708320125/Lawq/Lawyers/businesswoman-posing_23-2148142829_xlxdxr.avif",
  },
  {
    name: "Alexander Gallagher",
    about:
      "Experienced mentor Alexander specializes in personal branding, helping individuals showcase their unique strengths and values to build a compelling personal brand that stands out.",
    rating: 4.92,
    image:
      "https://res.cloudinary.com/de2rges3m/image/upload/v1708320124/Lawq/Lawyers/smiling-business-man-sitting-empty-office-desk_1262-5631_dbtuj2.avif",
  },
  {
    name: "Isabella Rivera",
    about:
      "Experienced mentor Isabella offers expertise in communication skills, empowering individuals to communicate effectively and confidently in various personal and professional settings.",
    rating: 4.89,
    image:
      "https://res.cloudinary.com/dpwqggym0/image/upload/v1712046400/upskill/zbiflrcyovc8tiwl1jo7.avif",
  },
  {
    name: "Lucas Martinez",
    about:
      "Experienced mentor Lucas specializes in public speaking, equipping individuals with the skills and confidence to deliver impactful and engaging presentations with poise and clarity.",
    rating: 4.86,
    image:
      "https://res.cloudinary.com/de2rges3m/image/upload/v1708320125/Lawq/Lawyers/businessman-with-hand-pocket_1098-54_hw1ihl.avif",
  },
];
const SearchLawyers = [
  {
    name: "Ethan Reynolds",
    about:
      "Experienced mentor Ethan offers tailored guidance and support to aspiring entrepreneurs, helping them navigate challenges and achieve their goals with determination and passion.",
    rating: 5,
    image:
      "https://res.cloudinary.com/de2rges3m/image/upload/v1708320127/Lawq/Lawyers/young-successful-businessman-posing-with-crossed-arms_176420-1149_ne4ste.avif",
  },
  {
    name: "Marcus Chen",
    about:
      "Experienced mentor Marcus specializes in leadership development, empowering individuals to unlock their full potential and lead with authenticity and purpose.",
    rating: 5,
    image:
      "https://res.cloudinary.com/de2rges3m/image/upload/v1708320126/Lawq/Lawyers/businessman-black-suit-with-tie-posing_114579-15877_bnknzd.avif",
  },
  {
    name: "Sophia Nguyen",
    about:
      "Experienced mentor Sophia provides personalized career coaching, guiding professionals towards fulfilling and successful career paths with empathy and insight.",
    rating: 4.96,
    image:
      "https://res.cloudinary.com/de2rges3m/image/upload/v1708320125/Lawq/Lawyers/businesswoman-posing_23-2148142829_xlxdxr.avif",
  },
  {
    name: "Alexander Gallagher",
    about:
      "Experienced mentor Alexander specializes in personal branding, helping individuals showcase their unique strengths and values to build a compelling personal brand that stands out.",
    rating: 4.92,
    image:
      "https://res.cloudinary.com/de2rges3m/image/upload/v1708320124/Lawq/Lawyers/smiling-business-man-sitting-empty-office-desk_1262-5631_dbtuj2.avif",
  },
  {
    name: "Isabella Rivera",
    about:
      "Experienced mentor Isabella offers expertise in communication skills, empowering individuals to communicate effectively and confidently in various personal and professional settings.",
    rating: 4.89,
    image:
      "https://res.cloudinary.com/dpwqggym0/image/upload/v1712046400/upskill/zbiflrcyovc8tiwl1jo7.avif",
  },
  {
    name: "Lucas Martinez",
    about:
      "Experienced mentor Lucas specializes in public speaking, equipping individuals with the skills and confidence to deliver impactful and engaging presentations with poise and clarity.",
    rating: 4.86,
    image:
      "https://res.cloudinary.com/de2rges3m/image/upload/v1708320125/Lawq/Lawyers/businessman-with-hand-pocket_1098-54_hw1ihl.avif",
  },
];

const expertise = [
  "Entrepreneurship",
  "Leadership Development",
  "Career Coaching",
  "Personal Branding",
  "Communication Skills",
  "Public Speaking",
  "Time Management",
  "Networking",
  "Project Management",
  "Financial Management",
  "Technology and Innovation",
  "Creativity and Innovation",
];
