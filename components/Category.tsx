import React from 'react'
import Item from './Item'
interface Props{
    category: string
}
function Category({category}:Props) {
  return (
    <div className='flex flex-col my-10'>
        <h1 className="font-bold text-[18px] leading-[22.3px] mb-2">{category}</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-8'>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
    </div>
  )
}

export default Category