import React from 'react'

const Cards = ({title,description,url}) => {
  return (
    <div className='flex flex-col gap-2 bg-card rounded-sm max-w-150'>
        <img className='rounded pb-2 shadow-black-200' src={url} alt="image" />
        <h2 className='font-bold text-fg1 '>{title.slice(0,10)}</h2>
        <h4 className='text-fg2'>{description.slice(0,100)}</h4>
    </div>
  )
}

export default Cards