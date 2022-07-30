import { ReceiptRounded } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { OnChangeNumberItem } from "../../redux/cartSlice";
import { removeItem } from "../../redux/cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react"
const stripePromise=loadStripe(process.env.stripe_public_key)

const BodyCart = () => {
  const { data: session } = useSession()
  const CartListRq = useSelector(selectCart);
  const initialValue = 0;
  const total=CartListRq?.map(item=> item.price*item.amount)?.reduce((sum, currentValue)=>sum+currentValue,initialValue)
  const totalItems=CartListRq?.map(item=> item.amount)?.reduce((sum, currentValue)=>sum+currentValue,initialValue)
  const createCheckOutSession=async()=>{

   const stripe= await stripePromise

    // CALL BACKEND IN NEXT JS
   const checkoutSession= await axios.post('/api/create-checkout-session', {
      items:CartListRq,
      email:session.user.email
    })

      console.log(checkoutSession)
    //REDIRECT USER/CUSTOMER

    const result=await stripe.redirectToCheckout({
      sessionId:checkoutSession.data.id
    })
    if(result.error){alert(result.error.message)}
    console.log(result)
  }
 

  return (
    <div className="bg-[#eaeded]   flex  flex-col items-center">
      <div className="pt-8">
      <Image src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"  width={1080} height={250} alt="banner"/>
      </div>
      
      {/* BODY */}
      <div className=" md:px-6 pb-40 w-full rounded-sm flex flex-col md:flex-row  ">
        {/* BODYLEFT */}
        <div className=" flex-grow p-4 md:mr-4 bg-white ">
          <div className=" border-b">
            <h2 className=" text-3xl">Votre panier</h2>
            <p className=" text-sm text-[#007185]">
              Désélectionner tous les éléments
            </p>
            <p  className=" text-right text-[#565959] text-sm">Prix</p>
          </div>

          {CartListRq.length !== 0 ? ( CartListRq.map((item) => (
            <div className="pt-4 border-b " key={`${item.id}`}>
              <CartList
                id={item.id}
                image={item.image}
                title={item.title}
                amount={item.amount}
                price={item.price}
              />
            </div>
          ))):(<div>
            
            <h2 className=" text-2xl">Votre Panier est Vide </h2>
          </div>)
         }
        </div>
              {/* BODYRIGHT */}
      <div className="bg-white p-4 rounded-sm ">
        <p className=" text-lg">
          Sous-total ({totalItems} articles): <span className=" font-bold"> {total}€</span>
        </p>
        <button
          onClick={()=>{createCheckOutSession()} }
          className=" bg-yellow-400 px-3 py-1 mt-4  text-xs  border border-gray-400 w-full hover:opacity-80 cursor-pointer"
          >
          Passer la Commande
        </button>
      </div>
      </div>
      

    </div>
  );
};

export default BodyCart;

// ADDITIONAL COMPONENT

const CartList = ({ id, image, title, amount, price }) => {
  const dispatch = useDispatch();
  const dispatchNewAmount = (id, amount) => {
    dispatch(OnChangeNumberItem({ id: id, amount: amount }));
  };
  return (
    <div className="flex ml-10 mb-4 ">
      <div className="mr-8">
        <Image src={image} alt="image" width={130} height={150} />
      </div>
      <div className="flex flex-col items-start">
        <p className=" text-lg">{title}</p>
        <p className=" text-xs text-[#007600]">En stock</p>
        <Image
          src="https://logosarchive.com/wp-content/uploads/2021/07/Amazon-Prime-logo.svg"
          alt="test"
          width={30}
          height={30}
        />

        <div>
          <select
            className=" w-28 border-solid border-[#DDDDD] border p-1 shadow-md  border-gray-200 rounded-lg pl-2  bg-gray-100 mt-8"
            value={amount}
            onChange={(e) => {
              let result = parseInt(e.target.value);
              return dispatchNewAmount(id, result);
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>

          <div className="flex space-x-2 pt-2 justify-center items-center ">
            <p
              className="text-xs text-[#0066C0] font-semibold pt-2 hover:underline cursor-pointer "
              onClick={() => {
                dispatch(removeItem(id));
              }}
            >
              Supprimer
            </p>
            <p className="text-xs text-[#0066C0] font-semibold pt-2 hover:underline cursor-pointer border-l-2 pl-2">
              Mettre de coté
            </p>
          </div>
        
        </div>
      </div>
      <div className=" flex-grow">
            <p className=" text-right text-lg font-bold whitespace-nowrap">{price} €</p>
      </div>
    </div>
  );
};
