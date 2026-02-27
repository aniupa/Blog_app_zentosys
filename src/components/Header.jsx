import React from 'react'

const Header = () => {
    return (
        <header className='flex flex-col items-center justify-center text-center px-6 py-20 bg-background1 bg-gradient-to-b from-background1 to-background2'>
            <p className="text-sm tracking-widest uppercase opacity-70">
                Welcome to
            </p>

            <h1 className="text-5xl font-bold mt-3 max-w-3xl leading-tight">
                Stories, Ideas & Insights That Actually Matter
            </h1>

            <p className="mt-6 max-w-2xl text-lg opacity-80">
                Discover thoughtful articles on technology, creativity,
                productivity, and modern digital life — written to inform,
                inspire, and challenge how you think.
            </p>

          
        </header>
    )
}

export default Header