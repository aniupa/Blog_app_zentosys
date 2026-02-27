import React from 'react'

const Footer = () => {
    return (
        <footer className='flex flex-col bg-nav shadow-md shadow mt-2'>
           
                <div className='flex justify-between border-b'>
                    <span>Logo</span> <span>BLOG_NAME <br />
                        Thoughtful articles on tech, design & productivity</span>
                    </div> 
                    
                    
            <section className='grid grid-cols-3 max-w-5xl mx-auto gap-16 ' >
                <div><span className='border-b'>Explore</span>  <ul>
                    <li>Home</li>
                    <li>Blogs</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul></div>
                <div><span className='border-b'>Resources</span>  <ul>
                    <li>Docs</li>
                    <li>guides</li>
                    <li>privacy</li>
                    <li>FAQS</li>
                </ul></div>
                <div><span className='border-b'>Company</span>  <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms</li>
                </ul></div>
              
            </section>
            <div className='flex gap-5 justify-center  '>
                <span className='hover:bg-sec'>🐦</span><span className='hover:bg-sec'> 💼</span><span className='hover:bg-sec'>🐙</span><span className='hover:bg-sec'>📘</span>
            </div>
            <div className='px-5 border-t  flex justify-between'> <span>© 2026 BlogName  </span><span>Made with Next.js & Tailwind CSS</span></div>
        </footer>
    )
}

export default Footer