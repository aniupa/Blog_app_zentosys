
import React from 'react'
import {  RelatedBlogs } from './Bloglist'
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
    return (
        <div className='flex flex-col gap-2 items-center'>

            <img src={img} alt={title} />
            {/* content section */}
            <section className='mx-auto w-full  px-4 sm:max-width-4xl px-6 max-w-4xl lg:px-8 py-12'>
                <h2 className='text-center text-fg1 font-semibold text-2xl mb-6'>Blog Content</h2>
                <article className='text-fg2 leading-7 text-base space-y-6'><ReactMarkdown>{content}</ReactMarkdown></article>

            </section>
            {/* tags */}
            <section>Tags:{tags}</section>
            {/* likes etc */}
            <section className='flex gap-8'>
                <span>👍 : {like}</span><span>🗨️ : {comments}</span><span>🔗 : {share}</span>
            </section>
            {/* author about section */}
            <section className='border-t pt-10 mt-16 '>
                <div
                    className='flex flex-col md:flex-row items-center gap-6'>
                    <img className='rounded-full aspect-1/1 w-24  ' src={profile_image} alt="author pic" />
                    <div>
                        <h3 className='font-semibold text-xl text-fg1 capitalize'>{author}</h3>
                        <p className='max-w-xl  text-fg2'>ABOUT AUTHOR</p>
                        <div className='flex gap-4 mt-3 '>
                            <SocialIcon icon="ri-twitter-x-line" /></div>
                    </div>
                </div>



            </section>
            {/* related posts */}
            <section>
                <h2>RELATED POSTS </h2>
                <div className='grid  grid-cols-3 gap-6'>
                    <RelatedBlogs />


                </div>
            </section>
            {/* comment box */}
            <section>
                <h3>Comment Box</h3>
                <textarea name="comment_box" id="comment">

                </textarea>
            </section>
        </div>
    )
}

export default BlogDetailCard