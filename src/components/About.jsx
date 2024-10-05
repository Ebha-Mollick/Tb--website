import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black '>
      <h1 className = "font-['Neue-Montreal'] leading-[3.5vw] text-[3vw] tracking-tighter">Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
      <div className="w-full flex gap-5 mt-20 border-t-[1px] border-[#88a037]">
        <div className="w-1/2 ">
        <h1 className="text-7xl mt-10">Our approach:</h1>
        <button className=" uppercase px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white flex gap-5 items-center">Read More 
          <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
        </button>
      </div>
      <div className = "w-1/2 h-[70vh] mt-10 rounded-3xl bg-[#b0c859]"></div>
    </div>
    </div>
  )
}

export default About
