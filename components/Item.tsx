import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

function Item() {
    return (
        <div className="px-4 bg-white py-4 flex items-center
             justify-between rounded-2xl shadow-sm">
            <p className="font-medium">Chicken 1KG</p>
            <AiOutlinePlus size={20} />
        </div>
    )
}

export default Item