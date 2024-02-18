"use client"

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

function Nav() {
  const isUserLoggedIn = false;
  const [providers,serProders] = useState(null);
  useEffect(()=>{
    
  },[])

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image src='/assets/images/logo.svg' 
        alt='Logo'
        width={30}
        height={30}
        className='object-contain'
        />
        <p className='logo_text'>
          Promtopia
        </p>
      </Link>

      {/* desctop nav */}
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? 
        (<div className='flex gap-3 md:gap-5'>
          <Link href='/create-link' className='black_btn'>
            Create
          </Link>
          <button type='button' onClick={signOut} className='outline_btn'>
            Sign Out
          </button>
          <Link href='/prfile'>
            <Image 
            src='/assets/images/logo.svg' 
            width={37}
            height={37}
            className='rounded-full'
            alt='Profile'
            />
          </Link>
        </div>
        ):(<></>)}
      </div>
    </nav>
  )
}

export default Nav