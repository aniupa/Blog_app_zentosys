import React from 'react'
import Cards from "@/components/Cards";

export  const Bloglist = async () => {
    const res = await fetch('https://dev.to/api/articles');
    if (!res.ok) {

        throw new Error('failed to fetch blogs');
    }
    const blogs = await res.json();
   
    
    
   

    return (
       <>  
       {(blogs ? blogs.map((m) => (
            <Cards key={m.id} id={m.id} title={m.title} description={m.description} url={m.social_image} />
        )) : <>loading...</>)}</>
    )
}
export  const RelatedBlogs = async () => {
    const res = await fetch('https://dev.to/api/articles');
    if (!res.ok) {

        throw new Error('failed to fetch blogs');
    }
    const blogs = await res.json();
    const newBlogs=blogs.slice(0,3)

    return (
        <>{(newBlogs ? newBlogs.map((m) => (
            <Cards key={m.id} id={m.id} title={m.title} description={m.description} url={m.social_image} />
        )) : <>loading...</>)}</>
    )
}

