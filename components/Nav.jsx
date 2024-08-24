'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Provider from '@components/Provider';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  
  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setProviders();
  }), [];

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href="/" className='flex gap-2 flex-center'>
      <Image className='object-contain' src="/assets/images/logo2.svg" alt='logo' width={50} height={40}/>
      <p className='logo_text'>NyontekPrompt</p>
      </Link>

      <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
          <div className='flex gap-3'>
            <Link className='black_btn' href="create-prompt">
            Create
            </Link>

            <button type='button' onClick={signOut} className='outline_btn'>Sign Out</button>
              <Link href='/profile'>
              <Image src='assets/images/logo.svg' width={35} height={35} alt='user'/> </Link>
          </div>
        ): (
          <>
            {providers && 
              Object.values(providers).map((provider) =>(
              <button type='button' key={provider.name} onClick={() => signIn(provider.id)} className='black_btn'>
                Sign In
              </button>
            ))}
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav