import React from 'react'
import { useRecoilState } from 'recoil'
import { currentSideBar } from '../../atoms/CurrentPageState'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  note: string,
  image: string,
  category: string
};

function AddItem() {
  const [activeSideBar, setActiveSideBar] = useRecoilState(currentSideBar);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data)
    setActiveSideBar("previewItem")
  };

  return (
    <div className='h-full font-quicksand  w-[25.1%] bg-[#FAFAFE] shadow-md lg:flex hidden items-center flex-col'>
      <div className='h-full flex flex-col w-full items-center justify-between pt-6 px-10 pb-12'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full space-y-3'>
          <h1 className="font-bold text-xl">Add a new item</h1>
          <div className='w-full'>
            <h1 className="form-label">Name</h1>
            <input type="text" className="form-input" placeholder='Enter a name' {...register('name', { required: true })} />
            {errors.name?.type === 'required' && (
              <p className="formError">name is required !</p>
            )}
          </div>
          <div className='w-full'>
            <h1 className="form-label">Note(optional)</h1>
            <textarea className="form-input" placeholder='enter a note' rows={3} {...register("note")} />
          </div>
          <div className='w-full'>
            <h1 className="form-label">Image(optional)</h1>
            <input type="text" className="form-input" placeholder='enter image URL' {...register("image")} />
          </div>
          <div className='w-full'>
            <h1 className="form-label">category</h1>
            <select className="form-input py-2" placeholder='Enter category' {...register("category", { required: true })} >
              <option value="Fruit and vegetables" className=''>Fruit and vegetables</option>
              <option value="Meat and fish">Meat and fish</option>
              <option value="Beverages">Beverages</option>
            </select>
            {errors.category?.type === 'required' && (
              <p className="formError">category is required !</p>
            )}
          </div>
          <div className='flex justify-center items-center space-x-12 pt-24'>
            <button
              className='text-[#34333A] text-lg font-extrabold'
              onClick={() => setActiveSideBar("viewItems")}>Cancel</button>
            <button type='submit'
              className='py-4 bg-primary text-white text-sm px-8 rounded-xl font-bold'
            >Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddItem