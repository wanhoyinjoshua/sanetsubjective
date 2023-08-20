import { Document } from "langchain/document";
const  data = [
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

  module.exports = {
    data: data
  };