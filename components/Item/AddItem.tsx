import React from 'react'
import { useRecoilState } from 'recoil'
import { currentSideBar } from '../../atoms/CurrentPageState'

function AddItem() {
  const [activeSideBar, setActiveSideBar] = useRecoilState(currentSideBar);
  return (
    <div className='h-full font-quicksand  w-[25.1%] bg-[#FAFAFE] shadow-md lg:flex hidden items-center flex-col'>
      <div className='h-full flex flex-col w-full items-center justify-between pt-6 px-10 pb-12'>
        <form className='flex flex-col w-full space-y-3'>
          <h1 className="font-bold text-xl">Add a new item</h1>
          <div className='w-full'>
            <h1 className="form-label">Name</h1>
            <input type="text" className="form-input" placeholder='Enter a name' />
          </div>
          <div className='w-full'>
            <h1 className="form-label">Note(optional)</h1>
            <textarea className="form-input" placeholder='enter a note' rows={3} />
          </div>
          <div className='w-full'>
            <h1 className="form-label">Image(optional)</h1>
            <input type="text" className="form-input" placeholder='enter image URL' />
          </div>
          <div className='w-full'>
            <h1 className="form-label">category</h1>
            {/* <select className="form-input" placeholder='Enter category' >
                <option value="Fruit and vegetables" className='my-2'>Fruit and vegetables</option>
                <option value="Meat and fish">Meat and fish</option>
                <option value="Beverages">Beverages</option>
            </select> */}
            <input type="text" className="form-input" placeholder='Enter a category' />
          </div>
        </form>
        <div className='flex justify-center items-center space-x-12 '>
          <button
            className='text-[#34333A] text-lg font-extrabold'
            onClick={() => setActiveSideBar("viewItems")}>Cancel</button>
          <button
            className='py-4 bg-primary text-white text-sm px-8 rounded-xl font-bold'
            onClick={() => setActiveSideBar("previewItem")}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default AddItem