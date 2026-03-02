"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useTheme } from 'next-themes';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const themeToggle = () => {
    setTheme(theme === 'dark' ? "light" : "dark")
  }
  return (
    <nav className='flex justify-between p-2 bg-nav sticky top-0 z-10 border-b  p-2' >
      <Image className='text-red-200' src="/images/blog_logo.svg" alt="logo" width={30} height={40} />
      <div className='flex gap-5 mr-2'>
        <Link href={'/'}>Home</Link>
        <Link href={'/blogs'}>Blogs</Link>

        <Link href={'/Contact'}>Contact</Link>
        <Link href={'/about'}>About</Link>
        <span suppressHydrationWarning onClick={themeToggle}>{theme === 'dark' ? "🌞" : "🌚"

        }</span>
      </div>
    </nav>
  );
};

export default Navbar;
