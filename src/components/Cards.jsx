import React from 'react'

const Cards = ({title,description,url}) => {
  const onHover='hover:cursor-pointer transform-gpu hover:scale-[1.03] '
  return (
    <div className={`flex flex-col gap-2 bg-card rounded-sm max-w-full ${onHover} p-2`}>
      <div className='relative aspect-video'> <img className='rounded-md pb-2 ' src={url} alt="title" />
        </div>
       <h2 className='font-semi-bold text-fg1 line-clamp-2 '>{title}</h2>
        <p className='text-fg2 line-clamp-3'>{description}</p>
    </div>
  )
}

export default Cards