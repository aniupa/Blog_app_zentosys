import React from 'react'

const Header = ({title,description,welcome,children}) => {
    return (
        <header className='flex flex-col items-center justify-center text-center px-6 py-20 bg-background1 bg-gradient-to-b from-background1 to-background2'>
            {welcome &&  <p className="text-sm tracking-widest uppercase opacity-70">
               { "Welcome to" }
            </p>}

            <h1 className="text-5xl text-fg1 font-bold mt-3 max-w-3xl leading-tight">
               { title || "Stories, Ideas & Insights That Actually Matter"}
            </h1>

            <div className="mt-6 max-w-2xl text-fg2 text-lg opacity-80">
               
                 { children ||` Discover thoughtful articles on technology, creativity,
                productivity, and modern digital life — written to inform,
                inspire, and challenge how you think.`}
            </div>

          
        </header>
    )
}

export default Header