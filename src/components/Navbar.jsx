"use client"
import React from 'react';
import Image from 'next/image';

import { useTheme } from 'next-themes';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const themeToggle = () => {
    setTheme(theme === 'dark' ? "light" : "dark")
  }
  return (
    <nav className='flex justify-between p-2 bg-nav sticky top-0 z-1 border-b shadow-red-500' >
      <Image className='text-red-200' src="/images/blog_logo.svg" alt="logo" width={30} height={30}/>
      <div className='flex gap-5 mr-2'>
        <span>Blogs</span>
        <span>Contact</span>
        <span>About</span>
        <span suppressHydrationWarning onClick={themeToggle}>{theme === 'dark' ? "🌞" : "🌚"

        }</span>
      </div>
    </nav>
  );
};

export default Navbar;
