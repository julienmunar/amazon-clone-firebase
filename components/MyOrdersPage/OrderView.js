import React, { useEffect, useState } from "react";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Moment from 'react-moment';
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const OrderView = ({ orders }) => {
  console.log(orders);

  // useEffect(() => {
  //     const fetchCommands = async () => {
  //       const commandeRef = collection(
  //         db,
  //         `users/${email}/orders`
  //       );
  //       const GetLastValidatedCommand = await getDocs(commandeRef);
  //       const GetFireBaseCommands = await GetLastValidatedCommand.docs.map(item=> ({ id:item.id,data:item.data()}))
  //       console.log("GetFirebaseCommands",GetFireBaseCommands)
  //       const orders= await Promise.all(GetFireBaseCommands.map(async(item) =>{
  //         ({ item:(await stripe.checkout.sessions.listLineItems(item.id))})

  //     } ))
  //         console.log("orders",orders)
  //     };
  //     fetchCommands();
  //   }, [email]);

  return (
    <div >
      <div className=" max-w-xs md:max-w-4xl  xl:max-w-5xl mx-auto pt-10">
        <p className="border-b border-[#FEBD69]  text-2xl font-medium">
          Vos Commandes
        </p>
        <p className="text-xs pt-2 text-right">
          {parseInt(orders.length)} Commandes
        </p>

        <div className=" space-y-4 mt-4 pb-10">
          {/* ORDER LIST  */}
          {orders.map((order) => (
            <div key={order.id}>
              <OrderListView
                id={order.id}
                stripeItems={order.items}
                images={order.images}
                amount={order.amount}
                unixTimestamp={JSON.parse(order.timestamp)}

              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderView;

const OrderListView = ({ id, stripeItems, images, amount,unixTimestamp }) => {

  const initialValue=0
  const totalItems=stripeItems.map(item=> item.quantity).reduce((sum, selectedItem)=>sum+selectedItem,initialValue)
 console.log(unixTimestamp.seconds)
  return (
    //  Container
    <div  className=" border border-gray-100 rounded-md flex flex-col">
      {/* Banner  */}
      <div className="flex text-gray-700 bg-slate-100 flex-col md:flex-row">
        {/* Left */}
        <div className="flex space-x-8 flex-grow">
          <div>
            <p className=" font-semibold">Commande passée </p>
            <Moment format="D MMM YYYY" className=" text-sm" unix>{unixTimestamp.seconds}</Moment>
          </div>
          <div>
            <p className="font-semibold  uppercase">Total </p>
            <div className="flex space-x-2 text-sm flex-col md:flex-row">
              <p className=" whitespace-nowrap">{amount} <span className=" font-semibold whitespace-nowrap">euros</span></p>
              <p className=" whitespace-nowrap">Livrée dans un jour - 6 euros</p>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className=" max-w-xs">
          <p className="  truncate text-ellipsi text-xs">Order Number {id}</p>
         <p className=" text-blue-500 font-semibold">{totalItems} items</p>
        </div>
      </div>
      
      {/* BODY */}
      <div className="flex  flex-grow w-full p-4 space-x-4">
        {
          images.map(image => <div key={`${image}`}><Image src={image} alt='product' width={150} height={150} objectFit="contain" /></div>) 
        }
       
      </div>
    </div>
  );
};
