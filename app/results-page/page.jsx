'use client'
import React, { use } from 'react'
import { useEffect,useState } from 'react';
import { useRouter } from 'next/navigation';
import NoSSRWrapper from"../components/dynamic"
import { useSearchParams } from 'next/navigation'
const search =require ("../components/constants/data")
const Page = () => {
  const router= useRouter()
  const [data,setdata]=useState()
  const searchParams = useSearchParams()
  const handleConvert = () => {
    window.print();
  };
  const refreshPage = () => {
    
    router.push('/casestudy')
  };
  //const confirminfo = searchParams.get('confirmed')
  const confirminfo= JSON.parse(window.localStorage.getItem('confirmedinfo'))
  console.log(JSON.parse(window.localStorage.getItem('data')))

  console.log(search)
  useEffect(() => {
   console.log(search.data)
  }, []);
  if (window) {
  return (

    <div>
      <div className="bg-indigo-600 px-4 py-3 text-white">
  <p className="text-center text-sm font-medium">
  Please complete this feedback form to help us improve <br>
        </br>
        <a href='https://forms.gle/q6pUuHpXA1MhBYiPA' target='_blank'>https://forms.gle/q6pUuHpXA1MhBYiPA</a>
  </p>
</div>
       The simulation is now finished.
        Below are your results and your transcript.
        <br>
        </br>
        <br>
        </br>You can download the report and share with other people.
        <br></br>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={handleConvert} >Generate PDF report</button>
        <a className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded" onClick={refreshPage}>Start another Conversation</a>
        <h1>Personal Information</h1>
       
        {search.data.map((item) => (
        item.metadata.category=="personal information" ? (
          <div key={item.id} className={`${confirminfo.includes(item.metadata.id)?"bg-green-500":"bg-orange-500"} w-1/2 p-4 m-4`}>
            {/* Content for each div */}
            {JSON.stringify(item.pageContent)}
          </div>
        ) : null
      ))}
        <h1>Hobbies</h1>
       
        {search.data.map((item) => (
        item.metadata.category=="hobbies" ? (
          <div key={item.id} className={`${confirminfo.includes(item.metadata.id)?"bg-green-500":"bg-orange-500"} w-1/2 p-4 m-4`}>
            {/* Content for each div */}
            {JSON.stringify(item.pageContent)}
          </div>
        ) : null
      ))}
        <h1>Home environment</h1>
        
        {search.data.map((item) => (
        item.metadata.category=="home environment" ? (
          <div key={item.id} className={`${confirminfo.includes(item.metadata.id)?"bg-green-500":"bg-orange-500"} w-1/2 p-4 m-4`}>
            {/* Content for each div */}
            {JSON.stringify(item.pageContent)}
          </div>
        ) : null
      ))}
        <h1>Medical History</h1>
        
        {search.data.map((item) => (
        item.metadata.category=="medical history" ? (
          <div key={item.id} className={`${confirminfo.includes(item.metadata.id)?"bg-green-500":"bg-orange-500"} w-1/2 p-4 m-4`}>
            {/* Content for each div */}
            {JSON.stringify(item.pageContent)}
          </div>
        ) : null
      ))}
        <h1>Hospital Admission</h1>
       
        {search.data.map((item) => (
        item.metadata.category=="hospital admission" ? (
          <div key={item.id} className={`${confirminfo.includes(item.metadata.id)?"bg-green-500":"bg-orange-500"} w-1/2 p-4 m-4`}>
            {/* Content for each div */}
            {JSON.stringify(item.pageContent)}
          </div>
        ) : null
      ))}
        <h1>Falls</h1>
        
        {search.data.map((item) => (
        item.metadata.category=="falls" ? (
          <div key={item.id} className={`${confirminfo.includes(item.metadata.id)?"bg-green-500":"bg-orange-500"} w-1/2 p-4 m-4`}>
            {/* Content for each div */}
            {JSON.stringify(item.pageContent)}
          </div>
        ) : null
      ))}
        <h1>Concern</h1>
       
        {search.data.map((item) => (
        item.metadata.category=="concerns" ? (
          <div key={item.id} className={`${confirminfo.includes(item.metadata.id)?"bg-green-500":"bg-orange-500"} w-1/2 p-4 m-4`}>
            {/* Content for each div */}
            {JSON.stringify(item.pageContent)}
          </div>
        ) : null
      ))}

      Transcript:
      <section>
        {JSON.parse(window.localStorage.getItem('data')).map(e=>
          <div key={e.role}>
            <div className={e.role=="user"?"bg-slate-200":""} key={e.role}>
            {e.role}:

            </div>
            
            <div className={e.role=="user"?"bg-slate-200":""} key={e.role}>
            {e.content}:

            </div>
            </div>)}
        
       
      </section>
    </div>

  )}
        }


export default Page