import React,{useState, useEffect} from 'react'
import bgImage from './new_bg_blur.jpeg'
import benefitImage from './benefit_bg.jpg';
import beBoseImage from './beYourOwnBose.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typing from 'react-typing-effect';
function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 800, // Default animation duration in milliseconds
      once: false,   // Whether animation should happen only once
    });
  }, []);
  useEffect(() => {
    setLoaded(true); // Trigger the fade-in effect on mount
  }, []);
  return (
    <>

      <div
      className={`absolute top-0 w-full h-screen bg-fixed bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${ loaded ? 'opacity-100' : 'opacity-0'} m-0 overflow-hidden`}
      style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className = {`w-full h-screen flex flex-col justify-center items-center bg-opacity-0 p-6 transition-transform duration-700 ease-in-out ${loaded ? 'translate-x-0' : '-translate-x-full'}`}>
        <h1 className=' text-center font-bold max-w-7xl text-4xl md:text-5xl '>LIC PART TIME AGENT</h1>
        <p className='text-xs md:text-xl'>--Your journey to financial freedom starts here--</p>
        <a className='mt-3 px-4 py-2 rounded-xl bg-blue-900 text-yellow-200 font-semibold text-xl transition hover:scale-110' href="https://forms.gle/q34LP2jcHhJjKm2x8" target="_blank">Apply Now</a>
      </div>


      {/* Benefits SECTION */}
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
            <img src={beBoseImage} className="w-full h-full object-cover object-center rounded" alt="" />
          </div>
          
        </div>
        <h3 className='m-3 text-xl md:text-2xl font-semibold '>So, what are you waiting for? Apply now by clicking the button below.</h3>
        <a className='mt-3 px-4 py-2 rounded-xl bg-blue-900 text-yellow-200 font-semibold text-xl transition hover:scale-110' href="https://forms.gle/q34LP2jcHhJjKm2x8" target="_blank">Apply Now</a>

      </div>
      
    </>
    
  )
}

export default Home

