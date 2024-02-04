import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <nav className='w-full flex justify-between items-center max-w-7xl mx-auto py-2 fixed top-0 z-20 bg-primary'>
        <Link
        href='/'
        >
            <Image 
            src='/logo.svg'
            alt='logo'
            width={100}
            height={62}
            className='object-fill object-center'
            />
        </Link>
    </nav>
  )
}

export default Header