import axios from 'axios';

export async function  AgitationAnlyser(usermessage:string):Promise<string>{
    //from here I need to call another api... to determine whether it is agitated or not 0 / 1 
    //make a post request here
    console.log("hiii")
    const postData = async (usermessage:any) => {
        try {
          const response = await axios.post('/api/semantics', {
            // Your data to be sent in the POST request body
            message: usermessage
          });
      
          // Handle the response here
          console.log('Response:', response.data.choices[0].text.replace(/\s+/g, ''));
          return  response.data.choices[0].text.replace(/\s+/g, '').toLowerCase()
        } catch (error) {
          // Handle errors here
          return error
        }
      };
      
     const  result= postData(usermessage);
     return result


}