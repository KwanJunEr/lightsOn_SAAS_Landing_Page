import React from 'react'
import logo from '@/public/assets/logosaas.png'
import Image from 'next/image'
import SocialX from '@/public/assets/social-x.svg'
import SocialInsta from '@/public/assets/social-insta.svg'
import SocialLinkedIn from '@/public/assets/social-linkedin.svg'
import SocialPin from '@/public/assets/social-pin.svg'
import SocialYoutube from '@/public/assets/social-youtube.svg'

const Footer = () => {
  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className='container'>
      <div className="inline-flex relative before:absolute before:inset-0 before:blur before:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)]">
        <Image src={logo} height={40} alt="SAAS Logo" className='relative'/>
        </div>
        <nav className='flex flex-col md:flex-row gap-6 mt-6 md:justify-center'>
          <a href = "#">About</a>
          <a href = "#">Features</a>
          <a href = "#">Customers</a>
          <a href = "#">Pricing</a>
          <a href = "#">Help</a>
          <a href = "#">Careers</a>
        </nav>
        <div className='flex justify-center gap-6 mt-6'>
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className='mt-6'>&copy; 2024 LightsOn Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
