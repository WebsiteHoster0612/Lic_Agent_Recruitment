import React from 'react'

function Contact() {
  return (
    <div className='p-3 m-2 flex flex-col justify-center items-center'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl m-3 font-bold text-center'>Contact Us</h1>
        <div className='my-4 mx-auto mt-12 flex flex-col gap-11 justify-center items-center shadow min-w-[70%] min-h-72 font-semibold'>
          <p>EMAIL :- sh.tajender182@licindia.com</p>
          <p>PHONE NUMBER :- 8059101182</p>
          <a className='mt-3 px-4 py-2 rounded-xl bg-blue-900 text-yellow-200 font-semibold text-xl transition hover:scale-110' href="https://forms.gle/q34LP2jcHhJjKm2x8" target="_blank">Send an enquiry</a>
        </div>
        <div></div>
      </div>
  )
}

export default Contact