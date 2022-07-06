import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

function Item() {
    const [hover, setHover] = useState(false)
    return (
        <div className="px-4  bg-white py-4 flex items-center
             justify-between rounded-2xl shadow-sm">
            <p className="font-medium">Chicken 1KG</p>
            <AiOutlinePlus size={20} color={hover ? "#F9A109" : ""} onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)} className="transition-all duration-100 hover:scale-125"
                className="cursor-pointer"/>
        </div>
    )
}

export default Item
