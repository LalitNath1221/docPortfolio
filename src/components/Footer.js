import React from 'react'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import ContactForm from './ContactForm'
function Footer() {
  return (
    <div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden py-10">
      <img src={img3} className="absolute top-0 left-0 h-full md:w-full md:h-auto -z-10" alt="" />
        <div className="w-full flex flex-col items-center justify-center pl-10">
          <p className='text-4xl font-semibold font-serif'>Contact Us For All Of Your Health Related Questions</p>
          <div className="pt-8">
              <a
              className="inline-flex text-white cursor-pointer items-center gap-1 rounded border-green bg-green-700 px-4 py-2 font-bold hover:text-green-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-300 focus-visible:ring-offset-2 active:opacity-100"
              href=""
            >
             Have you worked with us? Write a Review!
            </a>
              </div>
        </div>
        <div className='md:w-4/5 mx-auto shadow-xl p-4'>
          <div className='p-4 bg-white opacity-80'>
          <ContactForm/>
          </div>
        </div>
      </div>
    <footer className='border-t-2 border-t-green-600'>
      <div className="grid grid-cols-2 p-8 gap-4">
        <div className='p-2'>
          <div className='pb-2'>
          <p className='text-4xl py-2 border-b-2 border-b-gray-600 text-gray-600'>Address here</p>
          </div>
          <div id="locationOnMap" className='w-full py-4 aspect-video'>
            <div className='bg-gray-400 py-4 h-full flex justify-center items-center'>
              <p className="text-lg text-black">map here</p>
            </div>
          </div>
          <div className='pl-2 pt-2'>
            <div className='flex flex-row gap-2'>
              <div>
                <p className='text-3xl text-green-600'>
              <i class="bi bi-geo-alt-fill"></i></p>
              </div>
              <div>
              <p className='text-3xl text-green-600 pb-2'> Address here</p>
              <p id='addline-1' className='py-1 text-lg'>Lorem ipsum dolor sit amet</p>
              <p id="addline-2" className='py-1 text-lg'>Lorem ipsum dolor sit.</p>
              <p id='addline-3' className='py-1 text-lg'>+91 123456780</p>
              </div>
            </div>
            <div className='flex flex-row gap-2 py-2'>
              <div>
                <p className='text-3xl text-green-600'>
                <i class="bi bi-alarm"></i></p>
              </div>
              <div>
              <p className='text-3xl text-green-600 pb-2'> Hours</p>
              <p id='daytimeline-1' className='py-1 text-lg'>Monday: 10am-8pm</p>
              <p id='daytimeline-2' className='py-1 text-lg'>Tuesday: 10am-8pm</p>
              <p id='daytimeline-3' className='py-1 text-lg'>Wedenesday: 10am-8pm</p>
              <p id='daytimeline-4' className='py-1 text-lg'>Thursday: 10am-8pm</p>
              <p id='daytimeline-5' className='py-1 text-lg'>Friday: 10am-8pm</p>
              <p id='daytimeline-6' className='py-1 text-lg'>Suterday: 10am-8pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className='p-2'>
          <div className='flex flex-col items-center'>
            <div className=' w-full flex flex-row py-4 justify-center items-center bg-gray-400'>
              <p className='text-green-800 text-4xl'>logo hare</p>
            </div>
            <div className=' w-full py-8 justify-center items-center'>
              <p className='w-full text-3xl text-center'>Parterns detail</p>
              <div className='flex flex-row justify-evenly py-8'>
                <div className='w-1/4 aspect-square bg-gray-400'> </div>
                <div className='w-1/4 aspect-square bg-gray-400'> </div>
              </div>
            </div>
            <div className='p-4'>
              <p className='px-2 md:px-4 lg:px-8 text-lg text-green-500 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis sed rem facere quaerat neque earum dolores possimus mollitia, molestias voluptatem?</p>
            </div>
            <div className='p-8'>
            <div className="grid grid-flow-col gap-4">
            <a
              className="inline-flex text-white cursor-pointer items-center gap-1 rounded border border-green-700 bg-green-700 hover:bg-white hover:text-green-700 px-3 py-2 font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
              href=""
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              className="inline-flex text-white cursor-pointer items-center gap-1 rounded border border-green-700 bg-green-700 hover:bg-white hover:text-green-700 px-3 py-2 font-semibold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
              href=""
            >
              <i class="bi bi-facebook"></i>
            </a>
            <a
              className="inline-flex text-white cursor-pointer items-center gap-1 rounded border border-green-700 bg-green-700 hover:bg-white hover:text-green-700 px-3 py-2 font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
              href=""
            >
              <i class="bi bi-pinterest"></i>
            </a>
            <a
              className="inline-flex text-white cursor-pointer items-center gap-1 rounded border border-green-700 bg-green-700 hover:bg-white hover:text-green-700 px-3 py-2 font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
              href=""
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              className="inline-flex text-white cursor-pointer items-center gap-1 rounded border border-green-700 bg-green-700 hover:bg-white hover:text-green-700 px-3 py-2 font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
              href=""
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
          <div className='flex flex-row py-4'><a
              className="mx-auto inline-flex text-white cursor-pointer items-center gap-1 rounded border-2 border-green-700 bg-green-700 px-4 py-2 font-bold hover:text-green-700 hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
              href=""
            >
              Patient Portal
            </a></div>
            </div>

          </div>
        </div>
      </div>
      <div className='bg-green-700 flex flex-col justify-center items-center py-8'>
        <p className='text-gray-300 text-base text-center cursor-pointer'><a href="#"> © 2023 Karen R. Threlkel ND | All rights reserved | Sitemap | Privacy Policy</a></p>
        <p className='text-lg text-gray-300 cursor-pointer'><a href="#">Developers log & details</a></p>
      </div>
    </footer>
    </div>
  )
}

export default Footer