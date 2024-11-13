import AOS from 'aos';
import 'aos/dist/aos.css';
import benefitImage from './benefit_bg.jpg';
import React,{useState, useEffect} from 'react'
import Typing from 'react-typing-effect';
function Benefits() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Default animation duration in milliseconds
      once: false,   // Whether animation should happen only once
    });
  }, []);
  return (
<div className='p-3 m-2 flex flex-col justify-center items-center'>
        <h1 className='text-2xl m-3 font-bold text-center md:text-3xl lg:text-4xl'><Typing
        text={["Benefits Of Becoming An LIC Agent"]}
        speed={100}
        eraseSpeed={0}
        eraseDelay={1000}
        typingDelay={500}
        cursor="_"
        /></h1>
        <div className='my-4 mx-auto mt-12 flex flex-col lg:flex-row gap-11 justify-center items-center'>
          <div data-aos="fade-right" className='w-[100%] h-36 md:h-48 overflow-hidden lg:w-[40%] lg:h-96'>
            <img src={benefitImage} className="w-full h-full object-cover object-center rounded" alt="" />
          </div>
          {/* cards */}
          <div className='flex gap-5 flex-wrap justify-center items-center md:w-[70%] w-[100%] font-semibold font-sans'>   
            <div data-aos="fade-up" className='p-2 w-56 h-24 shadow-md rounded flex bg-slate-50 justify-center items-center text-center transition !hover:translate-y-1 hover:bg-blue-900 hover:text-white '>Decide your working timings & Be your own boss</div>
            <div data-aos="fade-up" className='p-2 w-56 h-24 shadow-md rounded flex bg-slate-50 justify-center items-center text-center hover:bg-blue-900 hover:text-white'>Ever Expending Unlimited Income </div>
            <div data-aos="fade-up" className='p-2 w-56 h-24 shadow-md rounded flex bg-slate-50 justify-center items-center text-center hover:bg-blue-900 hover:text-white'>Income twice a month (Two Closing)
            </div>
            <div data-aos="fade-up" className='p-2 w-56 h-24 shadow-md rounded flex bg-slate-50 justify-center items-center text-center hover:bg-blue-900 hover:text-white'>Regular Increasing Renewal Income </div>
            <div data-aos="fade-up" className='p-2 w-56 h-24 shadow-md rounded flex bg-slate-50 justify-center items-center text-center hover:bg-blue-900 hover:text-white'>Leave a Legacy & Guaranteed Income for Generation
            </div>
            <div data-aos="fade-up" className='p-2 w-56 h-24 shadow-md rounded flex bg-slate-50 justify-center items-center text-center hover:bg-blue-900 hover:text-white'>Freedom of Working anywhere , Nationally & Internationally</div>
            <div data-aos="fade-up" className='p-2 w-56 h-24 shadow-md rounded flex bg-slate-50 justify-center items-center text-center hover:bg-blue-900 hover:text-white'>Work in Part time/ Full Time, Work as per your choice
            </div>
            <div data-aos="fade-up" className='p-2 w-56 h-24 shadow-md rounded flex bg-slate-50 justify-center items-center text-center hover:bg-blue-900 hover:text-white'>Work with current Job and increase your income as per your potential</div>
            <div data-aos="fade-up" className='p-2 w-56 h-24 shadow-md rounded flex bg-slate-50 justify-center items-center text-center hover:bg-blue-900 hover:text-white'>Great opportunity to be famous & Public personality
            </div>
            <div data-aos="fade-up" className='p-2 w-56 h-24 shadow-md rounded flex bg-slate-50 justify-center items-center text-center hover:bg-blue-900 hover:text-white'>Great Club Membership Benefits for Performing Advisors other than income
            </div>
            <div data-aos="fade-up" className='p-2 w-56 h-24 shadow-md rounded flex bg-slate-50 justify-center items-center text-center hover:bg-blue-900 hover:text-white'>Superb Product monopoly benefits for being an LIC Agent</div>
            <div data-aos="fade-up" className='p-2 w-56 h-24 shadow-md rounded flex bg-slate-50 justify-center items-center text-center hover:bg-blue-900 hover:text-white'>No high-end qualification and investment is required & No financial risk.
            </div>
          </div>
        </div>
      </div>
  )
}

export default Benefits