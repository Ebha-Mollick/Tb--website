import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex px-32 items-center gap-5'>
        <div className="cardcontainer  h-[50vh] w-1/2">
            <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
                <img className='w-32'src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-5 py-1 rounded-xl border-2 left-10 bottom-10 '>&copy; 2019-2022</button>
            </div>
        </div>
        <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
            <div className="card w-1/2 flex relative items-center justify-center rounded-xl h-full bg-[#192826]">
            <img className='w-32'src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='absolute px-5 py-1 rounded-xl border-2 left-10 bottom-10 '>&copy; RATING 5.0 ON CLUTCH</button>
            </div>
 
            <div className="card w-1/2 flex relative items-center justify-center rounded-xl h-full bg-[#192826]">
            <img className='w-32 leading-tighter'src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='absolute px-5 py-1 rounded-xl border-2 left-10 bottom-10 '>&copy; BUSSINESS BOOTCAMP</button>
            </div>
        </div>
    </div>
  )
}

export default Cards
