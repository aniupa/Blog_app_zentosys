
import React from 'react'
import Cards from './Cards'
import { Bloglist } from './Bloglist'

const BlogDetailCard = async ({ img, author,profile_image,
    title,
    content,
    tags,
    like,
    comments,
    share,
    published_on,
    Reading_time, id}) => {
    return (
        <div className='flex flex-col gap-2 items-center'>

            <img src={img} alt={title} />
            <section className='flex flex-col gap-8'>
                <h2 className='text-center'>Blog Content</h2>
                <p >{content}</p>

            </section>
            <section>Tags:{tags}</section>
            <section className='flex gap-8'>
                <span>👍 : {like}</span><span>🗨️ : {comments}</span><span>🔗 : {share}</span>
            </section>
            <section>
                <img className='rounded-full aspect-1/1 w-15' src={profile_image} alt="author pic" />
                <span>  Author : {author}</span>
              
            </section>
            <section>
                <h2>RELATED POSTS </h2>
                <div className='grid  grid-cols-3 gap-6'>
                  <Bloglist/>
                  
                   
                </div>
            </section>
            <section>
                <h3>Comment Box</h3>
                <textarea name="comment_box" id="comment">

                </textarea>
            </section>
        </div>
    )
}

export default BlogDetailCard