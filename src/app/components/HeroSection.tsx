import React from 'react';
import Link from 'next/link';

function HeroSection() {
  return (
    <div id="hero-section" className='w-full h-96' >
      <div className='w-full h-full mb-5 m-0 flex flex-row-reverse drop-shadow-xl' style={{
        backgroundImage: "url(/Hero-background.jpg)",
      }}>
        <div className='bg-zinc-100 w-1/3 drop-shadow-xl '>
        <div className='flex flex-row justify-center items-center'>
          <div className='p-4 m-3'>
            <h1 className='text-center text-3xl '>Find affordable storage here</h1><br />
            <h3 className='text-center text-2xl mb-1'>Rent By Phone:</h3>
            <a className='text-center text-2xl font-medium text-emerald-900' href="tel:+1-845-594-4064"><h2>(845) 594-4064</h2></a>
          </div>
        </div>
        <h3 className='text-center text-2xl'>Or Online:</h3>
        <br />
        <div className='
      grid place-content-center 
      place-items-center 
      gap-2 grid-rows-1 
      grid-flow-row-dense'>
          <Link className='btn-blue col-span-2 text-2xl ' href={"/rent"}>Rent Now</Link>
          <Link className='btn-blue bg-emerald-600 hover:bg-emerald-700' href={"/portal/login"}>Login</Link>
          <Link className='btn-blue bg-emerald-600 hover:bg-emerald-700' href={"/portal/signup"}>Sign Up</Link>
        </div>
      </div >
        </div>
    </div >
  );
}

export default HeroSection;;