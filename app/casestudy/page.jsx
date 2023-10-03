'use client'
import { useRouter } from 'next/navigation';
import { useChat} from 'ai/react'
import {AgitationAnlyser} from".././components/utils/AgitationAnalyser"
import { useState ,useEffect,useRef} from 'react'
import Recording from '../components/modals/Recording';
const data =require ("../../app/components/constants/data")
import ProgressBarComponent from '.././components/Progressbar/Progressbar'
export default function Index() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  const [paused,isPause]=useState(false)
  recognition.continuous = false;
  recognition.interimResults = false;
  const [agitation,setagitation]=useState(0)
  const [end,setEnd]=useState(false)
  const [speakingnow,isspeakingnow]=useState(false)
    const div = useRef(null)
  const formref=useRef(null)

 

  function pause_session(){

  }
  useEffect(() => {

   if(agitation==0){
    const start =window.confirm("Welcome, click yes to start the simulaiton")
    startaudio()
    
    if (start==false){
      router.push("")

    }
   }
   
    if(agitation>5&&end!=true){
      const interval2 = setInterval(() => {
        setagitation((prevCount) => prevCount + 0.01);
      }, 1000); // Update the count every 1000ms (1 second)
  
      return () => {
        clearInterval(interval2); // Cleanup the interval on component unmount
      };

    }
    else if (agitation>=10&&end!=true){
      setEnd((prevCount) => !prevCount)
      setagitation(0)


    }
    else if (agitation<5&&end!=true)
    {
      const interval = setInterval(() => {
        setagitation((prevCount) => prevCount );
      }, 1000); // Update the count every 1000ms (1 second)
  
      return () => {
        clearInterval(interval); // Cleanup the interval on component unmount
      };

    }
   
  }, [agitation,end]);

  const router = useRouter();
  const refreshPage = () => {
    setagitation((prevCount) => 0);
    router.refreshPage()
  };
function onResponse(e){
  var currentid=e.headers.get('id')
  console.log(JSON.parse(currentid))
  const combinedSet = new Set([...JSON.parse(currentid), ...confirmedinfo]);
const combinedList = Array.from(combinedSet);
setConfirmedInfo(combinedList)

}
function terminate_session(){
  const speechSynth = window.speechSynthesis;
  speechSynth.cancel();
  localStorage.setItem('confirmedinfo', JSON.stringify(confirmedinfo));
  localStorage.setItem('data',JSON.stringify(messages))



  router.push(`/results-page`)


}
  function onFinish(message){
    console.log(message.headers)
    console.log(message.content)
   
      // Your window-related operations
      // I will have to then classify does the user fit any criterias???
      const speechSynth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance();
      utterance.text = message.content;
      speechSynth.cancel();
        speechSynth.speak(utterance);
     utterance.onend=()=>{
        startaudio()
     
       

    }
    
    

  }
function endsimulation(){
  setagitation((prevCount) => prevCount + 100);

}
  async function submithandler(e){
    //will have to first determin the agitation level first, modify the value first 
    e.preventDefault();
    const isAgitation=await AgitationAnlyser(input)
    console.log(isAgitation)
    if (isAgitation=="agitating"&&agitation!=10){
      //increase 
      setagitation(function(prevCount) {
        //need to update the agitation here...
        
        let chatRequestOptions={
          options:{body:{"agitation":prevCount + 1}}
          
         
      };
      
        handleSubmit(e,chatRequestOptions)
  
        return prevCount + 1;
      })
      

    }
    else if (isAgitation=="soothing"&&agitation!=0){
      //decrease 
      setagitation(function(prevCount) {
        //need to update the agitation here...
        
        let chatRequestOptions={
          options:{body:{"agitation":prevCount - 1}}
          
         
      };
      
        handleSubmit(e,chatRequestOptions)
  
        return prevCount - 1;
      })

    }
    
    else{
      //no change 
      setagitation(function(prevCount) {
        //need to update the agitation here...
        
        let chatRequestOptions={
          options:{body:{"agitation":prevCount}}
          
         
      };
      
        handleSubmit(e,chatRequestOptions)
  
        return prevCount;
      })

    }
    
    

    
  }

  const { messages, input, handleInputChange,setInput, handleSubmit } = useChat({onFinish:onFinish,onResponse:onResponse})

const [sampleanswer,setSample]=useState(data)
const [confirmedinfo,setConfirmedInfo]=useState([0])
const concerncatno= sampleanswer.data.filter((doc)=>doc.metadata.category=="concerns").length
const hobbiescatno= sampleanswer.data.filter((doc)=>doc.metadata.category=="hobbies").length
const personalinfocatno= sampleanswer.data.filter((doc)=>doc.metadata.category=="personal information").length
const medhistorycatno= sampleanswer.data.filter((doc)=>doc.metadata.category=="medical history").length
const fallscatno= sampleanswer.data.filter((doc)=>doc.metadata.category=="falls").length
const hosadmissioncatno= sampleanswer.data.filter((doc)=>doc.metadata.category=="hospital admission").length
const homeenvcatno= sampleanswer.data.filter((doc)=>doc.metadata.category=="home environment").length

const confirmconcerncatno= sampleanswer.data.filter((doc)=>doc.metadata.category=="concerns"&&confirmedinfo.includes(doc.metadata.id)).length
const confirmhobbiescatno= sampleanswer.data.filter((doc)=>doc.metadata.category=="hobbies"&&confirmedinfo.includes(doc.metadata.id)).length
const confirmpersonalinfocatno= sampleanswer.data.filter((doc)=>doc.metadata.category=="personal information"&&confirmedinfo.includes(doc.metadata.id)).length
const confirmmedhistorycatno= sampleanswer.data.filter((doc)=>doc.metadata.category=="medical history"&&confirmedinfo.includes(doc.metadata.id)).length
const confirmfallscatno= sampleanswer.data.filter((doc)=>doc.metadata.category=="falls"&&confirmedinfo.includes(doc.metadata.id)).length
const confirmhosadmissioncatno= sampleanswer.data.filter((doc)=>doc.metadata.category=="hospital admission"&&confirmedinfo.includes(doc.metadata.id)).length
const confirmhomeenvcatno= sampleanswer.data.filter((doc)=>doc.metadata.category=="home environment"&&confirmedinfo.includes(doc.metadata.id)).length

const handleConvert = () => {
  window.print();
};

function stopSpeechRecognition() {
  isspeakingnow(false)
  isPause(true)
  recognition.abort()
  recognition.stop()
  
  console.log('Speech recognition terminated.');
  
}
async function startaudio(){
    console.log("hi")
    
    setInput('')
    if (typeof window !== 'undefined') {
        // Your window-related operations
        // I will have to then classify does the user fit any criterias???
        isspeakingnow(true)
        
        
        if (!recognition.isRecording) {
            recognition.start();
            recognition.isRecording = true;
          }
        
      
        recognition.onresult = (event) => {
            const recognizedText = event.results[0][0].transcript;
            console.log(recognizedText)
            setInput(recognizedText)
            
            

          };
        recognition.onspeechend = () => {
            recognition.stop();
            recognition.abort()
            console.log("Speech recognition has stopped.");
          };
          async function click(){
            if(speakingnow){
              formref.current.click()

            }
            

          }

          recognition.onend= async ()=>{
            
            recognition.abort()
            
              formref.current.click()

            
            
              

            
            isspeakingnow(false)
            
            
            
          }
  
      }

  
}

  return (
    <div className="flex h-screen">
         {speakingnow?<Recording terminate={terminate_session} pause={stopSpeechRecognition}></Recording>:<div></div>} 

       
      <section className="w-1/3 p-4">
      {agitation<100?  <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded" onClick={terminate_session}>End Conversation</button>:null}
    
        <h1>Personal Information</h1>
        <span>{confirmpersonalinfocatno}/{personalinfocatno}</span>
        <h1>Hobbies</h1>
        <span>{confirmhobbiescatno}/{hobbiescatno}</span>
        <h1>Home environment</h1>
        <span>{confirmhomeenvcatno}/{homeenvcatno}</span>
        <h1>Medical History</h1>
        <span>{confirmmedhistorycatno}/{medhistorycatno}</span>
        <h1>Hospital Admission</h1>
        <span>{confirmhosadmissioncatno}/{hosadmissioncatno}</span>
        <h1>Falls</h1>
        <span>{confirmfallscatno}/{fallscatno}</span>
        <h1>Concern</h1>
        <span>{confirmconcerncatno}/{concerncatno}</span>
       
      

     

      </section>
      {agitation>=10?<section>
        The simulation is now finished.
        Below are your results and your transcript.
        You can download the report and share with other people.
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={handleConvert}>Generate PDF report</button>
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded" onClick={refreshPage}>Start another Conversation</button>
        <h1>Personal Information</h1>
        <span>{confirmpersonalinfocatno}/{personalinfocatno}</span>
        {sampleanswer.data.map((item) => (
        item.metadata.category=="personal information" ? (
          <div key={item.id} className={`${confirmedinfo.includes(item.metadata.id)?"bg-green-500":"bg-orange-500"} w-1/2 p-4 m-4`}>
            {/* Content for each div */}
            {JSON.stringify(item.pageContent)}
          </div>
        ) : null
      ))}
        <h1>Hobbies</h1>
        <span>{confirmhobbiescatno}/{hobbiescatno}</span>
        {sampleanswer.data.map((item) => (
        item.metadata.category=="hobbies" ? (
          <div key={item.id} className={`${confirmedinfo.includes(item.metadata.id)?"bg-green-500":"bg-orange-500"} w-1/2 p-4 m-4`}>
            {/* Content for each div */}
            {JSON.stringify(item.pageContent)}
          </div>
        ) : null
      ))}
        <h1>Home environment</h1>
        <span>{confirmhomeenvcatno}/{homeenvcatno}</span>
        {sampleanswer.data.map((item) => (
        item.metadata.category=="home environment" ? (
          <div key={item.id} className={`${confirmedinfo.includes(item.metadata.id)?"bg-green-500":"bg-orange-500"} w-1/2 p-4 m-4`}>
            {/* Content for each div */}
            {JSON.stringify(item.pageContent)}
          </div>
        ) : null
      ))}
        <h1>Medical History</h1>
        <span>{confirmmedhistorycatno}/{medhistorycatno}</span>
        {sampleanswer.data.map((item) => (
        item.metadata.category=="medical history" ? (
          <div key={item.id} className={`${confirmedinfo.includes(item.metadata.id)?"bg-green-500":"bg-orange-500"} w-1/2 p-4 m-4`}>
            {/* Content for each div */}
            {JSON.stringify(item.pageContent)}
          </div>
        ) : null
      ))}
        <h1>Hospital Admission</h1>
        <span>{confirmhosadmissioncatno}/{hosadmissioncatno}</span>
        {sampleanswer.data.map((item) => (
        item.metadata.category=="hospital admission" ? (
          <div key={item.id} className={`${confirmedinfo.includes(item.metadata.id)?"bg-green-500":"bg-orange-500"} w-1/2 p-4 m-4`}>
            {/* Content for each div */}
            {JSON.stringify(item.pageContent)}
          </div>
        ) : null
      ))}
        <h1>Falls</h1>
        <span>{confirmfallscatno}/{fallscatno}</span>
        {sampleanswer.data.map((item) => (
        item.metadata.category=="falls" ? (
          <div key={item.id} className={`${confirmedinfo.includes(item.metadata.id)?"bg-green-500":"bg-orange-500"} w-1/2 p-4 m-4`}>
            {/* Content for each div */}
            {JSON.stringify(item.pageContent)}
          </div>
        ) : null
      ))}
        <h1>Concern</h1>
        <span>{confirmconcerncatno}/{concerncatno}</span>
        {sampleanswer.data.map((item) => (
        item.metadata.category=="concerns" ? (
          <div key={item.id} className={`${confirmedinfo.includes(item.metadata.id)?"bg-green-500":"bg-orange-500"} w-1/2 p-4 m-4`}>
            {/* Content for each div */}
            {JSON.stringify(item.pageContent)}
          </div>
        ) : null
      ))}

      Transcript:
      <section>
        {JSON.stringify(messages)}
      </section>
       


      </section>:
      <section ref={div} className="w-2/3 p-4 h-80 overflow-auto">
        
          <ProgressBarComponent progress={((agitation/10)*100).toFixed(1)} />
      {messages.map(m => (
        <div key={m.id}>
          {m.role === 'user' ? 'OT(student): ' : 'Patient: '}
          {m.content}
        </div>
      ))}
 
      <form onSubmit={(e)=>{submithandler(e)}}>
        
        <label>
          
          <input className='invisible fixed bottom-10000' type='number' value={agitation} name="agitation" ></input>
          
        </label>
        <section  className='fixed bottom-0'>
          
        <button onClick={()=>{isPause(true)}} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
  Pause
</button>
        <section className=" grid grid-cols-3 gap-4    border border-gray-300 rounded mb-8 shadow-xl p-2">
        <button class="bg-gray-300 " onClick={startaudio}>Record Audio</button>
        <input
            class="bg-white-300 "
            value={input}
           
            onChange={handleInputChange}
          />
        <button ref={formref} type="submit" class="bg-gray-300 ">Send</button>
          </section>

        </section>
      
         
        
      </form>
     

      </section>}
      
      
    </div>
  )
}