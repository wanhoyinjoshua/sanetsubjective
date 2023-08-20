// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'
export const runtime = 'edge'
export  async function POST(req: Request) {
   
        // Process a POST request
        const {message} = await req.json()
    console.log(message)
   
    console.log("request sent")
    const configuration = new Configuration({
        apiKey: process.env.OPENAIAPI,
    })
    const openai = new OpenAIApi(configuration)
    
    //bodyparts
    //legs, arms , legs/arm

    //aim
    //"improve ability to stand up", "improve balance and walking", "improve ability to reach for objects while standing", "improve ability to sitting balance while reaching objects", 
    //"improve ability to move forward at the shoulder" , "improve ability to move your arm forward", "improve ability to bend and straighten your elbow"
    //"improve ability to move your fingers" , "improve ability to move forward at the shoulder"
    //

    //difficulty
    //beginner , advanced 

    //impairment
    //balance, strength 

    //
 
   

    let result = {}

    // system prompt as additional guard rail for function call
    let function_system_prompt = 
    `classify the user input into one of three categpres, "neutral", "agitating", or "soothing", do not provide any other response other than the label.`

    let messages:any = [{ role: 'system', content: function_system_prompt }]

    messages.push({ role: 'user', content: message})


    try {
        
        const result = await openai.createCompletion({
           
            model : 'text-davinci-003',
        max_tokens : 1024,
        temperature : 0,
        prompt:`classify the user input into one of three categpres, "neutral", "agitating", or "soothing", classify as agitating if it is condesending or close ended questions, classify as soothing if it is open ended and less personal do not provide any other response other than the label. user message as below :*${message}`
       
        })
        /*
        result = await chatCompletion({
            messages,
            functions
        })
*/
        
         
          // Respond with the stream
          return result

        
       

    } catch(error) {

        console.log(error)

    }


      }
    
   



  
  