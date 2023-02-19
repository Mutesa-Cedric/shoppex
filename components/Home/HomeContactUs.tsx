import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import axios from "../../axios.config";
import toast from "react-hot-toast";

function HomeContactUs() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (name && email && message) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [name, email, message])


  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('/message', {
        name,
        email,
        message
      })
      if (res.status === 200) {
        toast.success("message sent successfully!")
        setName('');
        setEmail('');
        setMessage('');
        setLoading(false);
      } else {
        toast.error("something went wrong! please try again")
        setLoading(false);
      }
    } catch (error) {
      toast.error("something went wrong! please try again")
      setLoading(false);
      // console.log(error);
    }
  }

  return (
    <div id="contact-us" className="flex justify-between md:w-full w-screen md:flex-row md:space-y-0 space-y-8 lg:px-[150px] md:px-[80px] px-4 pt-8 pb-16 flex-col">
      <div className='flex flex-col md:items-start items-center space-y-8 md:w-2/4'>
        <h1 className='font-bold text-2xl'>Contact us</h1>
        <p className='font-bold text-gray-500 leading-7 md:text-start text-center'>Something to tell us? <br /> Fell free to contact us , we&apos;ll be  open and happy <br /> to receive your idea and consider it. </p>
      </div>
      <div className='md:w-2/4 relative' >
        <form onSubmit={handleSubmit} className="flex flex-col space-y-8 w-full md:pl-24">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" placeholder='your names'
            className=' rounded-3xl h-12 z-10 px-5 focus:outline-none  border border-white focus:border-primary' />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email" placeholder='email address'
            className=' rounded-3xl h-12 z-10 px-5 focus:outline-none  border border-white focus:border-primary' />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            id="" cols={30} rows={4} placeholder="Message"
            className=' pl-5 pt-3 rounded-3xl z-10 focus:outline-none border border-white focus:border-primary' />

          {
            loading ?
              <button disabled className="bg-[#FF8A00] text-white px-12 flex items-center justify-center font-bold py-3 rounded-3xl">
                <svg aria-hidden="true" role="status" className="inline w- h-5 mr-3 text-gray-600 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                </svg>
                Loading...
              </button>
              :
              <button
                disabled={!canSubmit}
                className={`z-50 md:self-end ${canSubmit ? "bg-[#FF8A00] text-white" : 'bg-gray-200 text-gray-800'} px-12 flex items-center justify-center font-bold py-3 rounded-3xl ${canSubmit ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                <span>send</span>
              </button>
          }

        </form>
        <div className="absolute bottom-0 top-0 w-full h-full border"
          style={{ background: ' linear-gradient(92.3deg, rgba(255, 138, 0, 0.25) -4.35%, rgba(217, 217, 217, 0) 97.96%);', filter: "blur(30px)", transform: "rotate(-180deg)" }}></div>
      </div>
    </div>
  )
}

export default HomeContactUs