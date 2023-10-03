// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { PineconeClient } from "@pinecone-database/pinecone";
import { data } from '../../components/constants/data'

import { Document } from "langchain/document";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";
export const runtime = 'edge'
export  async function GET(req: Request) {
   
        // Process a POST request
        async function PineConesetup(){
            
            console.log("starting indexing")
              const client = new PineconeClient();
          await client.init({
            apiKey:'a2324488-6e2b-4382-9d7d-ef91c9219964',
            environment: "us-west4-gcp-free",
          });
          const pineconeIndex = client.Index("sanet");
          
          
          
          const openAIApiKey=process.env.OPENAIAPI
          const pineconeonstance= await PineconeStore.fromDocuments(data, new OpenAIEmbeddings({openAIApiKey:openAIApiKey}), {
            pineconeIndex,
          });
          
          return pineconeonstance
          
          
          }

          await PineConesetup()
          
        


      }
    
   



  
  