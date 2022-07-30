import React from 'react'
import Header from '../components/homePage/Header'
import OrderView from '../components/MyOrdersPage/OrderView'
import { db } from "../firebase";
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  
  orderBy,
} from "firebase/firestore";
import { useSession, signIn, signOut,getSession } from "next-auth/react";
import { json } from 'micro';
import { stringify } from 'postcss';

const stripe=require("stripe")(process.env.STRIPE_SECRET_KEY)


const myorders = ({orders}) => {

  return (
    <div>
        <Header/>
        <OrderView orders={orders}/>
    </div>
  )
}

export default myorders


export async function getServerSideProps(context) {
  
const session = await getSession(context);
console.log(session?.user.email)
if (session == null ){
  return {
    props: {orders:[]}, // will be passed to the page component as props
    }
}
    const commandeRef = collection(
      db,
      `users/${session.user.email}/orders`
    )
    const GetLastValidatedCommand = await getDocs(commandeRef);
    const firebaseOrders = GetLastValidatedCommand.docs.map(item=>({id:item.id,data:item.data()}))
      const ordersStripe= await Promise.all(
        firebaseOrders.map(async({id,data})=> ({
          id,
          timestamp: JSON.stringify(data.timestamp),
          amount:data.ammount,
          images:data.images,
          items:(await stripe.checkout.sessions.listLineItems(id,{limit:50})).data
        }))
      ) 


    
return {
props: {orders:ordersStripe}, // will be passed to the page component as props
}
}