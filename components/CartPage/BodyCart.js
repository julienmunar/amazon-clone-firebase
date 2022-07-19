import { ReceiptRounded } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { OnChangeNumberItem } from "../../redux/cartSlice";
const BodyCart = () => {
  
  const CartListRq = useSelector(selectCart);
  console.log(CartListRq);
  return (
    <div className="bg-[#eaeded]  py-20  flex ">
      {/* BODY */}
      <div className=" bg-white mx-6 p-4 flex-grow rounded-sm ">
        {/* BODYLEFT */}
        <div>
          <div className=" border-b pb-6">
            <h2 className=" text-3xl">Votre panier</h2>
            <p className=" text-sm text-[#007185]">
              Désélectionner tous les éléments
            </p>
          </div>
          {CartListRq.map((item) => (
            <div className="pt-10 border-b " key={`${item.id}`}>
              <CartList
                id={item.id}
                image={item.image}
                title={item.title}
                amount={item.amount}
                price={item.price}
              />
            </div>
          ))}
        </div>

 
      </div>
             {/* BODYRIGHT */}
             <div className="bg-white mr-6 p-4 rounded-sm ">
            <p>Sous-total (2 articles): 37,94 €</p>
            </div>
    </div>
  );
};

export default BodyCart;




// ADDITIONAL COMPONENT

const CartList = ({ id, image, title, amount, price }) => {
  const dispatch=useDispatch()
  const dispatchNewAmount=(id,amount)=>{
    dispatch(OnChangeNumberItem({id:id,
    amount:amount}))}
  return (
    <div className="flex ml-10 ">
      <div>
        <Image src={image} alt="image" width={150} height={150} />
      </div>
      <div>
        <p>{title}</p>
        <p>En stock</p>
        <Image
          className="w-12"
          src="https://logosarchive.com/wp-content/uploads/2021/07/Amazon-Prime-logo.svg"
          alt="test"
          width={40}
          height={40}
        />
        <select
          className=" w-28 border-solid border-[#DDDDD] border p-1 shadow-md  border-gray-200 rounded-lg pl-2  bg-gray-100"
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
      </div>
    </div>
  );
};
