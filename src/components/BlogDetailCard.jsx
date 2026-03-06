
import React from 'react'
import { RelatedBlogs } from './Bloglist'
import { SocialIcon } from './Footer'
import ReactMarkdown from 'react-markdown'

const BlogDetailCard = async ({ img, author, profile_image,
    title,
    content,
    tags,
    like,
    comments,
    share,
    published_on,
    Reading_time, id }) => {
    const hero_logo = "/images/blog_logo.svg"
    return (
        <div className='flex flex-col gap-2 items-center max-w-screen p-2 sm:max-w-250 mx-auto'>
            {/* hero img */}
            <img src={img} alt={title} className='w-full rounded' />
            {/* author section */}
            <section className='p-2 px-4 w-full flex gap-4'>
                <img src={profile_image} alt="author" className='rounded-full w-10 aspect-square' /><div className='flex grow-1 flex-col text-sm'><h3 className='text-fg1 font-bold capitalize'>{author}</h3><p className='text-fg2 text-xs capitalize '>posted on {published_on}</p></div>
            </section>
            {/* likes etc */}
            <section className=' flex gap-8'>
                <span>👍 : {like}</span><span>🗨️ : {comments}</span><span>🔗 : {share}</span>
            </section>
            {/* title */}
            <section className='pt-2 px-4 font-bold text-2xl'>
                {title}
            </section>
            {/* tags */}
            {/* <section className='text-md'>{tags}</section> */}
            {/* content section */}
            <section className='mx-auto w-full  px-4 sm:max-width-4xl px-6 max-w-4xl lg:px-8 py-12'>
                <article className='prose:lg text-fg2 leading-7 text-base space-y-6'><ReactMarkdown>{content}</ReactMarkdown></article>

            </section>




            {/* comment box */}
            <section className='flex gap-4 w-full mx-2'>
                <img src={hero_logo} alt="logo" className='w-12 rounded-full  aspect-square' />
                <textarea name="comment_box" id="comment" placeholder='Add to the discussion ' className='rounded-sm border border-border w-full mr-2 p-2 mb-2 text-fg1'>

                </textarea>
            </section> 
             {/* related posts */}
            <section >
                <h2>RELATED POSTS </h2>
                <div className='grid  grid-cols-1 gap-4 '>
                    <RelatedBlogs />


                </div>
            </section>
        </div>
    )
}

export default BlogDetailCard