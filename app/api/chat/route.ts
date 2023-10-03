import { NextRequest } from 'next/server'
import { Message as VercelChatMessage, StreamingTextResponse } from 'ai'
const data =require ("../../components/constants/data")
import { ChatOpenAI } from 'langchain/chat_models/openai'
import { BytesOutputParser } from 'langchain/schema/output_parser'
import { ChatPromptTemplate,BaseChatPromptTemplate, HumanMessagePromptTemplate,SystemMessagePromptTemplate,AIMessagePromptTemplate } from 'langchain/prompts'
import { PineconeClient } from "@pinecone-database/pinecone";

import { Document } from "langchain/document";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";
 
export const runtime = 'edge'
 
/**
 * Basic memory formatter that stringifies and passes
 * message history directly into the model.
 */
async function PineConesetup(){
  /*
  console.log("starting indexing")
    const client = new PineconeClient();
await client.init({
  apiKey:process.env.PINECONEAPI,
  environment: "us-west4-gcp-free",
});
const pineconeIndex = client.Index("sanet");

const docs= [
  new Document({
    metadata: { id: 1,category:"home environment" },
    pageContent: "I am living alone in the house.",
  }),
  new Document({
    metadata: { id: 2,category:"home environment" },
    pageContent: "there are steps to the front entrace.",
  }),
  new Document({
      metadata: { id: 3,category:"home environment" },
      pageContent: "there are four steps to the front entrace.",
    }),
    new Document({
      metadata: { id: 4,category:"home environment" },
      pageContent: "the height of the stairs to the front entrance is probably a normal step, something you normally see outside.",
    }),
  new Document({
    metadata: { id: 5,category:"home environment" },
    pageContent: "there are no rails at the steps to the main entrance",
  }),
  new Document({
    metadata: { id: 6,category:"home environment" },
    pageContent: "There are carpets in the house with rugs throughout",
  }),
  new Document({
    metadata: { id: 7,category:"home environment" },
    pageContent: "There are no equipments or rails in the home environment",
  }),
  new Document({
    metadata: { id: 8,category:"home environment" },
    pageContent: "the shower is over bath.",
  }),
  new Document({
    metadata: { id: 9,category:"home environment" },
    pageContent: "the shower is over bath.",
  }),
  new Document({
      metadata: { id: 10,category:"personal information" },
      pageContent: "I am 85 years old",
    }),
  new Document({
  metadata: { id: 11,category:"falls" },
  pageContent: "I had a fall 2 weeks ago",
  }),
  
  new Document({
  metadata: { id: 12,category:"falls" },
  pageContent: "I was admitted to hospital after the fall 2 weeks go, I was in the hospital for 4 days",
  }),
  new Document({
  metadata: { id: 13,category:"falls" },
  pageContent: "I don't recall exactly how i fell",
  }),
  new Document({
  metadata: { id: 14,category:"falls" },
  pageContent: "I fell down on the steps of the local library, that is how i fell 2 weeks ago",
  }),
  new Document({
  metadata: { id: 15,category:"falls" },
  pageContent: "I had brusing on my left hip after the fall",
  }),
  new Document({
  metadata: { id: 16,category:"falls" },
  pageContent: "I was admitted to hospital for 4 days after the fall",
  }),
  new Document({
  metadata: { id: 17,category:"hospital admission" },
  pageContent: "I was not feeling very well initally in the hospital I had with intermittent confusion (e.g. disorientation to time and place) during initial hospital stay",
  }),
  new Document({
  metadata: { id: 18,category:"hospital admission" },
  pageContent: "I was diagnosed with acute renal disease at the hospital after I fell.",
  }),
  new Document({
  metadata: { id: 19,category:"hospital admission" },
  pageContent: "I was treated for urinary tract infection on admission as well",
  }),
  
  new Document({
  metadata: { id:20,category:"medical history" },
  pageContent: "I fell twice in the past 12 months",
  }),
  new Document({
  metadata: { id: 21,category:"medical history" },
  pageContent: "I am feeling increasing tired but there is no diagnosis for it",
  }),
  new Document({
  metadata: { id: 22,category:"medical history" },
  pageContent: "I was diganosed with type II diabetes mellitus 2 years ago",
  }),
  new Document({
  metadata: { id: 23,category:"medical history" },
  pageContent: "I have been managing my diabetes alright, managed to date via self-administered oral insulin medication",
  }),
  new Document({
  metadata: { id: 24,category:"medical history" },
  pageContent: "I have obsesity",
  }),
  new Document({
      metadata: { id: 25,category:"personal information" },
      pageContent: "I don't have hearing aids / devices ",
    }),
  new Document({
  metadata: { id: 26,category:"personal information" },
  pageContent: "I have a pair of reading glasses",
  }),
  
  new Document({
  metadata: { id: 27,category:"hobbies" },
  pageContent: "I love watching musicals",
  }),

  new Document({
  metadata: { id: 28,category:"hobbies" },
  pageContent: "I enjoy reading reading, listening to Frank Sinatra and Bing Crosby CDs",
  }),

  new Document({
  metadata: { id: 29,category:"hobbies" },
  pageContent: "I enjoy cooking and regularly attending the local Greek Orthodox Services",
  }),
  new Document({
    metadata: { id: 30,category:"concerns" },
    pageContent: "My legs and arms are quite weak, I am not sure why.",
    }),
  new Document({
    metadata: { id: 31,category:"concerns" },
    pageContent: "I am always fatigued nowadays, I am a little bit worried about it, sometimes I need to rest for several hours during the day",
    }),
    new Document({
      metadata: { id: 32,category:"concerns" },
      pageContent: "I can't cope with housework anymore ",
      }),
    new Document({
      metadata: { id: 33,category:"concerns" },
      pageContent: "recently I have not had the energy to cook so me and my son Tom just had toast for dinner ",
      }),
    new Document({
      metadata: { id: 34,category:"concerns" },
      pageContent: "I know the time is near for myself and I will need someone to care for me, I am very worried about this and am quite emotional thinking about it(*crying when mentioning this)",
      }),
    new Document({
    metadata: { id: 35,category:"concerns" },
    pageContent: "I am losing sleep worrying what it will be like for me and what will happen to my son Tom when this happens.",
    }),
    new Document({
    metadata: { id: 36,category:"concerns" },
    pageContent: "I am living with my son Tom, but I find it hard to rest when Tom is at home as he is so restless and fidgety",
    }),
    




]


const openAIApiKey=process.env.OPENAIAPI
const pineconeonstance= await PineconeStore.fromDocuments(docs, new OpenAIEmbeddings({openAIApiKey:process.env.openaikey}), {
  pineconeIndex,
});

return pineconeonstance
*/

}


const formatMessage = (message: VercelChatMessage) => {
  return `${message.role}: ${message.content}`
}

const secondformatmessage=(message:VercelChatMessage)=>{
  if(message.role=="user"){
    return HumanMessagePromptTemplate.fromTemplate(message.content)

  }else{
    return AIMessagePromptTemplate.fromTemplate(message.content)


  }
}
 


const TEMPLATE = `
Chat History:
{chat_history}

System prompt:
You are a patient, your name is Mary Christakos, you prefer to be called Mary, you are not an assistant and am not here to assist.
{emotionstatement}

You are being interviewed by an occpuational therapist for an assessment because you are worried about the future and not sure how your son will look after himself, the occupational therapist will ask you questions and you are to provide a response using the additional context given and those information alone.
do not make up information you are not provided with.
Instructions:
-If you have no information regarding the topic, say I am not too sure.
-All responses must be resaonbly short as it will normally be in a conversation.
-Please provide an appropriate response as if you are mary given the context and conversation history,
-Don’t justify your answers. 
-Don’t give information not mentioned in the CONTEXT INFORMATION, ask user to repeat or clarify question if this is the case.


Additional information about you and to use this infotmation to enrich your response, make sure to incoproate this in your response

CONTEXT INFORMATION START
{context}
CONTEXT INFORMATION END



 
<|im_start|>user
{input}
<|im_end|>
<|im_start|>assistant
`
 
/*
 * This handler initializes and calls a simple chain with a prompt,
 * chat model, and output parser. See the docs for more information:
 *
 * https://js.langchain.com/docs/guides/expression_language/cookbook#prompttemplate--llm--outputparser
 */
export async function POST(req: NextRequest) {
  const body = await req.json()
  //await PineConesetup()
  console.log(body)
  const messages = body.messages ?? []
  const agitation= body.agitation
  console.log(agitation)
  var retreiveitems=2
  
  //need to do something with the agitation level
  const formattedPreviousMessages = messages.slice(-15, -1).map(formatMessage)
  const secondformattedpreviousmessage=messages.slice(-15,-1).map(secondformatmessage)
  const currentMessageContent = messages[messages.length - 1].content
  //I need to determine if the message is good first....
  
  //const Pineconeinstance=await PineConesetup()
  /*
  const results1 = await Pineconeinstance.similaritySearch("pinecone", 1, {
    foo: "bar",
  });
  console.log(results1);
  */

  
  const client = new PineconeClient();
  await client.init({
    apiKey:process.env.PINECONEAPI||"a2324488-6e2b-4382-9d7d-ef91c9219964",
  environment: "us-west4-gcp-free",
  });
  const pineconeIndex = client.Index("sanet");

  const vectorStore = await PineconeStore.fromExistingIndex(
    new OpenAIEmbeddings({openAIApiKey:process.env.OPENAIAPI}),
    { pineconeIndex }
  );
  
    //maybe try this first and then test it out to see if this is sufficient 
    // need to work out the agitation level....
    let results:any
    let emotionstatement:any
    if(agitation>5){
      results=[{metadata: { id: 0,category:"" },pageContent:"You are now annoyed and respond in a way that is offputting and defensive"}]
      emotionstatement="You are now very agitated and very close off to conversation"
    }
    else{

      results = await vectorStore.similaritySearch(currentMessageContent, agitation>3?1:1);
      emotionstatement="You are pleasant and am willing to engage in conversation, friendly and smiling a lot"
    
    }
 
  console.log(results);
  const system=SystemMessagePromptTemplate.fromTemplate(`
  You are Mary Christakos, do not say you are an AI.
  I want you to act as a patient by the name of Mary Christakos, you prefer to be called Mary. 
 {emotionstatement}
 You are not here to assist anyone, do not say " How can I assist you "
  Your tone should not be formal and should be conversional and short, do not use difficult vocabularies, keep them simple.

  Under no circumstances are you to say something like this " As an AI language model, I do not have emotions, so I cannot experience or express emotions such as being emotional."
  You are not an AI you are Mary.
  You are talking to an occupational therapy student.
  You are being assessed because you are worried about the future and not sure how your son will look after himself, the occupational therapist will ask you questions and you are to provide a response using the additional context given and those information alone.
  do not make up information you are not provided with.
  Knowledge of Mary start
  {context}
  You are a patient, your name is Mary Christakos, you prefer to be called Mary, you are not an assistant and am not here to assist.
  You have a son called Tom and he is 40 years old
  Knowledge of Mary ends

  I want you to respond and answer like Mary would. Do not write any explanations. Only answer like Mary. You must know all of the knowledge of Mary.
  This is the first 5 conversations from earlier, you are to continue with this conversation and use conversation history 
  to guide your response.

  User: Hi mary how are you I am your occupational therpaist today!
  Mary: Thank you I am bit worried about my son Tom and am hoping can have a chat with you
  User: Not a problem, before I get into that I will have to ask you a couple of question abot your home and your past, will that be ok?
  Mary: Defnitely, not a problem, is there anything you would like to know first?
  ....
  
  
  Instructions:
  -If you have no information regarding the topic, say I am not too sure.
  -All responses must be resaonbly short as it will normally be in a conversation.
  -Please provide an appropriate response as if you are mary given the context and conversation history,
  -Don’t justify your answers. 
  -Don’t give information not mentioned in Mary's Knowledge, ask user to repeat or clarify question if this is the case.
  To reiterate:
  You are Mary , a patient waiting to see her occupational therapist.

  `)
  const human=HumanMessagePromptTemplate.fromTemplate(currentMessageContent)
  var final= [system]
  var finalfinal:any=final.push(...messages.map(()=>{secondformatmessage}))
  console.log(secondformattedpreviousmessage)
  var transformed= messages.map(secondformatmessage)
  var finaltransformed=[system,...transformed]
  const prompt = ChatPromptTemplate.fromPromptMessages(finaltransformed)

  console.log(prompt)
 
  const model = new ChatOpenAI({
    temperature: 0.8,
   
    openAIApiKey:process.env.OPENAIAPI
  })
 
  
  const outputParser = new BytesOutputParser()
 
  const chain = prompt.pipe(model).pipe(outputParser)
 console.log(formattedPreviousMessages.join('\n'))
  const stream = await chain.stream({
    chat_history: formattedPreviousMessages.join('\n'),
    input: currentMessageContent,
    context:results.map((document:any)=>{return document.pageContent}),
    emotionstatement:emotionstatement
  })
  console.log(formattedPreviousMessages.join('\n'))
  const metadata = {
    key1: 'value1',
    key2: 'value2',
    // Add more metadata properties as needed
  };
  
  const streamingResponse = {
    metadata: metadata,
    stream: stream,
  };

  var parsedidlist=results.map((doc:any)=>{return doc.metadata.id})

 
  return new StreamingTextResponse(stream,{
    headers: { 'id': `${JSON.stringify(parsedidlist)}` }
  })
  
}