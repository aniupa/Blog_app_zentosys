import Image from 'next/image'


const Footer = () => {
    const iconStyle = 'p-2 rounded-md hover:bg-sec hover:scale-110 transition-transform cursor-pointer';
    const SocialIcon = ({ icon }) => {
        return <span className={iconStyle}><i className={icon}></i></span>
    }
    const SectionHeaders = ({ title }) => {
        return <span className='font-semibold text-fg1 mb-3 block'>{title}</span>
    }
    const hoverLinkStyle = 'hover:text-fg1 hover:cursor-pointer';
    return (
        <footer className=' bg-nav border-t mt-1 border-white/10 text-center   w-full py-6'>

            <div className='max-w-7xl mx-auto px-6'>
                {/* footer hero */} 
                <div className='text-center'>


                    <div className='flex items-center justify-center gap-2 '><span>
                        <Image className='text-red-200' src="/images/blog_logo.svg" alt="logo" width={30} height={30} />
                    </span> <h2 className='text-2xl font-semibold'>Feather</h2></div>
                    <p className='text-sm text-fg2 mt-2'>Thoughtful articles on tech, design & productivity</p>



                </div>
                {/* links */}

                <section className='grid grid-cols-3 md:grid-cols-3 gap-12 mt-16 text-sm ' >
                    <div><SectionHeaders title={"Explore"} />  <ul className='space-y-2 text-fg2 transition-colors'>
                        <li className={hoverLinkStyle}>Home</li>
                        <li className={hoverLinkStyle}>Blogs</li>
                        <li className={hoverLinkStyle}>About</li>
                        <li className={hoverLinkStyle}>Contact</li>
                    </ul></div>
                    <div><SectionHeaders title={"Resources"} /> <ul className='space-y-2 text-fg2'>
                        <li className={hoverLinkStyle}>Docs</li>
                        <li className={hoverLinkStyle}>guides</li>
                        <li className={hoverLinkStyle}>privacy</li>
                        <li className={hoverLinkStyle}>FAQS</li>
                    </ul></div>
                    <div><SectionHeaders title={"Company"} />  <ul className='space-y-2 text-fg2'>
                        <li className={hoverLinkStyle}>About</li>
                        <li className={hoverLinkStyle}>Contact</li>
                        <li className={hoverLinkStyle}>Terms</li>
                    </ul></div>

                </section>

                {/* social icons */}
                <section className='flex gap-5 mt-10 pt-6    justify-center'>
                    <SocialIcon icon="ri-twitter-x-line" />
                    <SocialIcon icon="ri-linkedin-fill" />
                    <SocialIcon icon="ri-github-fill" />
                    <SocialIcon icon="ri-instagram-line" />

                </section>

                <div className='px-5 border-t border-gray-700 mt-10 pt-6 text-sm text-fg2 flex justify-between'> <span>© 2026 Feather  </span><span>Made with Next.js & Tailwind CSS</span></div></div>

        </footer>
    )
}

export default Footer