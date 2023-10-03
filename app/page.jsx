'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const Page = () => {
  const router= useRouter()
  return (
    <section className="bg-gray-50">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
        Subjective Examination Simulator
      </h2>

      <p className="hidden text-gray-500 sm:mt-4 sm:block">
       This tool aims to transform the case study experience, from a passive reading approach to an active question based approach to obtain background infomration for a case study.
       This tool is now open to user testing.
       <br></br>
       Task: <br>
       </br>
       This website contains one case study :
       <br>
       </br>
       Details as below:
       <br></br>
       You are an occupational therapy student, you are going to talk to Mary, a patient of yours and you will have to perform a subjective examination to know more about this patient.
       <br>
       </br>
       On the left hand side of the screen, there will be a hint section where you will be notified if you collected a piece of relevant information for your case study, the examination will termiante if the patient gets too agitated or you can hit the terminate session button at any time.
       <br></br>
       Good luck and enjoy!
      </p>
    </div>

    <div className="mx-auto mt-8 max-w-xl">
      
       

        <button
        onClick={()=>{router.push('/casestudy')}}
          type="submit"
          className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
        >
          <span className="text-sm font-medium"> Start </span>

          <svg
            className="h-5 w-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      
    </div>
  </div>
</section>
   
  )
}

export default Page