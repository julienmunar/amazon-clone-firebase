import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../redux/cartSlice";
import Image from "next/image";
import { removeItem } from "../redux/cartSlice";
import { OnChangeNumberItem } from "../redux/cartSlice";
import { useRouter } from "next/router";
const SideCart = () => {
  const router=useRouter()
  const dispatch=useDispatch()
  const myShoppingCart = useSelector(selectCart);
  const initialValue = 0;
  const total=myShoppingCart?.map(item=> item.price*item.amount)?.reduce((sum, currentValue)=>sum+currentValue,initialValue)
  const dispatchNewAmount=(id,amount)=>{
    dispatch(OnChangeNumberItem({id:id,
    amount:amount}))}
  return (
    <div className="flex-grow-0 p-3 sticky top-0 ">
      {/* Haut */}
      <div className=" border-b-2 pb-2 pt-2 flex flex-col items-center ">
        <p className="text-xs pb-2">
          Sous-total: <span className="text-[#b12604] font-bold">{total} €</span>{" "}
        </p>
        <button onClick={()=>{router.push('/cart')}} className=" bg-yellow-400 px-3 py-1  text-xs  border border-gray-400 w-full hover:opacity-80 cursor-pointer">
          Passer au paiement
        </button>
        <div className="pt-2">
          <p className="text-xs whitespace-nowrap">
            Cette commande contient un
            <br />
            cadeau
          </p>
        </div>
      </div>
      <div>
        {myShoppingCart?.map((item) => (
          <div key={`${item.id}`} className="flex px-2 py-4">
            <Image src={`${item?.image}`} alt="" width={80} height={80} layout="fixed"/>
            <div className="pl-4">
              <p className=" text-sm whitespace-nowrap truncate text-ellipsis">{item.title}</p>
              <p className="text-[#b12604] font-bold text-sm">{item.price} €</p>
              <div className="flex space-x-2 flex-grow">
              <Image
                className="w-12"
                src="https://logosarchive.com/wp-content/uploads/2021/07/Amazon-Prime-logo.svg"
                alt="test"
                width={30}
                height={30}
              />
            <select className=" w-28 border-solid border-[#DDDDD] border p-1 rounded-md pl-2 " value={item.amount} onChange={(e)=>{
              let result=parseInt(e.target.value)  
              return(dispatchNewAmount(item.id,result)

              )
            }}>
              {}
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
              </div>

             
            <div className="flex space-x-2 pt-2 justify-center items-center ">
            <p className="text-xs text-[#0066C0] font-semibold pt-2 hover:underline cursor-pointer " onClick={()=>{dispatch(removeItem(item.id))}}>Supprimer</p>
            <p className="text-xs text-[#0066C0] font-semibold pt-2 hover:underline cursor-pointer border-l-2 pl-2" >Mettre de coté</p>
            </div>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideCart;
