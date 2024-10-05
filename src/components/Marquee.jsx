import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-black-500 flex'>
      <div className="border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        {/* Image in motion */}
        <motion.div 
          initial={{ x: '0%' }} 
          animate={{ x: '-100%' }} 
          transition={{ repeat: Infinity, ease: 'linear', duration: 10 }} 
          className='flex'  // Flex container to hold images
        >
          <img src="/TB-Logo.png" alt="Logo" className="inline-block w-[16vw] h-auto mr-5" />
          <img src="/TB-Logo.png" alt="Logo" className="inline-block w-[16vw] h-auto mr-5" />
          <img src="/TB-Logo.png" alt="Logo" className="inline-block w-[16vw] h-auto mr-5" />
          <img src="/TB-Logo.png" alt="Logo" className="inline-block w-[16vw] h-auto mr-5" />
          <img src="/TB-Logo.png" alt="Logo" className="inline-block w-[16vw] h-auto mr-5" />
          {/* Duplicate images for a smoother transition */}
          <img src="/TB-Logo.png" alt="Logo" className="inline-block w-[16vw] h-auto mr-5" />
          <img src="/TB-Logo.png" alt="Logo" className="inline-block w-[16vw] h-auto mr-5" />
          <img src="/TB-Logo.png" alt="Logo" className="inline-block w-[16vw] h-auto mr-5" />
          <img src="/TB-Logo.png" alt="Logo" className="inline-block w-[16vw] h-auto mr-5" />
          <img src="/TB-Logo.png" alt="Logo" className="inline-block w-[16vw] h-auto mr-5" />
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
