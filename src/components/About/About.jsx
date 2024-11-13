import React from 'react'
import Typing from 'react-typing-effect';
import beBoseeImage from './beYourOwnBose.jpg';
function About() {
  return (
    <div className='p-3 m-2 flex flex-col justify-center items-center'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl m-3 font-bold text-center'>About</h1>
        <div className='my-4 mx-auto mt-12 flex flex-col-reverse lg:flex-row gap-11 justify-center items-center'>
          <div className='lg:w-[50%] w-[100%]'><Typing
          text={["Discover an exciting opportunity to join our team as a life insurance agent, where you’ll be instrumental in helping families and individuals secure their financial future. Our organization is a trusted leader in life insurance solutions, dedicated to providing top-tier financial security for our clients. We seek motivated and passionate professionals who are eager to make a difference and support our clients in achieving their financial aspirations. As part of our team, you'll benefit from comprehensive training, access to advanced tools and resources, and a supportive environment that fosters success. Your role will involve building meaningful relationships, understanding clients' unique needs, and offering tailored life insurance solutions that help them reach their goals. With a competitive package, ample room for career advancement, and ongoing professional development, this is a rewarding path for those who thrive on challenges, possess excellent communication skills, and are dedicated to achieving success. If you’re looking for a career that makes a real impact, consider joining us as a life insurance agent."]}
          speed={30}
          eraseSpeed={0}
          eraseDelay={10000}
          typingDelay={500}
          cursor="_"
          className='font-serif'
          />
          </div>
          <div data-aos="fade-left" className='w-[100%] overflow-hidden lg:w-[50%] lg:h-96'>
            <img src={beBoseeImage} className="w-full h-full object-cover object-center rounded" alt="" />
          </div>
          
        </div>
        <h3 className='m-3 text-2xl font-semibold'>So, what are you waiting for? Apply now by clicking the button below.</h3>
        <a className='mt-3 px-4 py-2 rounded-xl bg-blue-900 text-yellow-200 font-semibold text-xl transition hover:scale-110' href="https://forms.gle/q34LP2jcHhJjKm2x8" target="_blank">Apply Now</a>
      </div>
  )
}

export default About