import React from 'react'
import subscriber from '../../assets/subscriber.svg'

const ContactSection = () => {
  return (
    <div className='flex flex-col items-center'>
        <span className="text-[6rem] font-acorn_sb ">Contact ME!!</span>
        <div className="mt-16 pb-2 pr-2 flex justify-around w-full"> 
            <img src={subscriber} alt="subscriber" className='w-1/3'/>
            <form action="" className="contactForm w-1/2 flex flex-col space-y-4 items-center justify-start">
                <input type="text" placeholder='Full Name' />
                <input type="email" placeholder="What's your Email ?"/>
                <textarea placeholder='Your questions..'/>
                <button type='submit' className='bg-gradient-to-l from-[#56719A] to-[#56719A] bg-[length:100%] hover:bg-[length:0%] bg-no-repeat text-white border-2 hover:text-black border-black font-3xl px-[0.5em] py-[0.5em] tracking-widest transition-all ease-in duration-150 rounded-[6px] cursor-grab text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactSection