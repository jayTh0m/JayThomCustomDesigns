import React from 'react'
import HeroCanvas from './canvas/HeroCanvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={` absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div className='z-10'>
          <h1 className='text-[#915eff] text-lg'>JayThom Custom Designs</h1>
          <p className= 'mt-2 text-white-100 text-lg'>Handyman and Home Remodeling Services <br className='sm:block hidden'/>serving Bridgeton and Maryland Heights</p>
        </div>
      </div>       
      <HeroCanvas/>

    </section>
  )
}

export default Hero