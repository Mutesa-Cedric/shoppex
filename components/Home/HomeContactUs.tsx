function HomeContactUs() {
  return (
    <div className="flex justify-between md:w-full w-screen md:flex-row md:space-y-0 space-y-8 lg:px-[150px] md:px-[80px] px-4 pt-8 pb-24 flex-col">
      <div className='flex flex-col md:items-start items-center space-y-8 md:w-2/4'>
        <h1 className='font-bold text-2xl'>Contact us</h1>
        <p className='font-bold text-gray-500 leading-7 md:text-start text-center'>Something to tell us? <br /> Fell free to contact us , we&apos;ll be  open and happy <br /> to receive your idea and consider it. </p>
      </div>
      <div className='md:w-2/4 relative' >
        <form className="flex flex-col space-y-8 w-full md:pl-24">
          <input type="email" placeholder='email address'
            className=' rounded-3xl h-12 z-10 px-5 focus:outline-none  border border-white focus:border-primary' />
          <textarea name="message" id="" cols={30} rows={8} placeholder="Message"
            className=' pl-5 pt-3 rounded-3xl z-10 focus:outline-none border border-white focus:border-primary' />
          <button className='md:self-end bg-[#FF8A00] text-white px-10 font-bold py-[5px] rounded-3xl cursor-pointer'>
            <span>send</span>
          </button>
        </form>
        <div className="absolute bottom-0 top-0 w-full h-full border"
          style={{ background: ' linear-gradient(92.3deg, rgba(255, 138, 0, 0.25) -4.35%, rgba(217, 217, 217, 0) 97.96%);', filter: "blur(30px)", transform: "rotate(-180deg)" }}></div>
      </div>
    </div>
  )
}

export default HomeContactUs