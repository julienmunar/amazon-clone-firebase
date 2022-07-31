
import * as admin from "firebase-admin"
import { NextApiRequest, NextApiResponse } from 'next';
const serviceAccount = require ('../../permissions.json')
const { buffer, text, json } = require('micro');
//SECURE CONNECTION TO DB
const app = !admin.apps.length ? admin.initializeApp({
    credential:admin.credential.cert(serviceAccount)
}): admin.app();


// SECURE CONNECTION TO STRIPE

const stripe=require("stripe")(process.env.STRIPE_SECRET_KEY)

const endpointSecret = process.env.STRIPE_SIGNING_SECRET

const fullFillOrder=async(session)=>{

    return app.firestore().collection('users').doc(session.metadata.email).collection('orders').doc(session.id).set({
        ammount:session.amount_total /100,
        amount_shipping:session.total_details.amount_shipping /100,
        images:JSON.parse(session.metadata.images),
        timestamp:admin.firestore.FieldValue.serverTimestamp()
    })
    .then(()=>{
        console.log(`SUCCESS:ORder ${session.id} has been added to the DB` )
    })
}
let handle
export default   handle= async (req, res) => {
   if (req.method === "POST"    ){
        const requestBuffer = await buffer(req)
        const payload = requestBuffer.toString()
        const sig=req.headers["stripe-signature"];
      
        let event;

        // Verify that EVENT CAME FROM STRIPE

        try{
    
   
            event=stripe.webhooks.constructEvent(payload,sig,endpointSecret)
            
        }
        catch(error){
         
            return res.status(400).send(`webHook error : ${error.message}`)
        }

        // handle the checkout.session.completed event
        if (event.type === 'checkout.session.completed'){
            const session = event.data.object;
            console.log(session)

            // FULL FILL THE ORDER
            return fullFillOrder(session).then(()=>{res.status(200)}).catch((error)=>res.status.send(`WebHook is in error ${error.message}`))
        }

   }
  }

  export const config = {
    api:{
        bodyParser:false,
        externalResolver: true
    }
  }