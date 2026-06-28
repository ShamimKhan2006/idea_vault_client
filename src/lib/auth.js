import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
 import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db();

export const auth = betterAuth({
     emailAndPassword: { 
    enabled: true, 
  }, 
  

   socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_SECRET_KEY, 
        }, 
    },
  database: mongodbAdapter(db, {
   
    client
  }),
   session:{
       cookieCache:{
        maxAge:7*24*60*60,
        strategy:"jwt",
        enabled:true,
        
       }
   },

   plugins: [
        jwt(), 
    ]
});