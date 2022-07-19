import React, { useState } from "react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ReactStars from "react-rating-stars-component";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch,useSelector } from "react-redux";
import { addItem } from "../../redux/cartSlice";
const ListArticle = ({ data }) => {
  const router = useRouter();
  const dispatch=useDispatch()


  const GoToArticleDetail = (id) => {
    id && router?.push(`/articles/${id}`);
  };
  return (
    <div className="grid grid-flow-row-dense auto-cols-fr  auto-rows-fr  grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  m-2 gap-4 ">
      {data.map((product) => {
        return (
          <div key={product.id}>
            <Product
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
              description={product.description}
              GoToArticleDetail={GoToArticleDetail}
              id={product.id}
         
            />
          </div>
        );
      })}
    </div>
  );
};

export default ListArticle;

const Product = ({
  title,
  price,
  image,
  description,
  rating,
  id,
  GoToArticleDetail,
}) => {
  const dispatch=useDispatch()
  const [isPrime] = useState(Math.random() < 0.5);
  const addToCart=()=>{
    dispatch(addItem({
      id:id,
      title:title,
      amount:1,
      price:price,
      image:image
      
    }))
  }

  return (
    <div className="gap-3 p-4 flex flex-col  items-center bg-white pt-10" onClick={addToCart}>
      <div className=" h-72 w-52">
        <Image
          src={image}
          width={200}
          height={250}
         layout="responsive"
          className="cursor-pointer"
          onClick={() => {
            GoToArticleDetail(id);
          }}
        />
      </div>

      <p
        onClick={() => {
          GoToArticleDetail(id);
        }}
        className="text-[#4A9AA8] text-xl cursor-pointer hover:underline line-clamp-1 "
      >
        {title}
      </p>
      <p className="text-sm  line-clamp-2">{description}</p>
      <ReactStars
        count={5}
        value={rating.rate}
        size={14}
        half={true}
        activeColor="#E28839"
        edit={false}
      />
      <p className="text-2xl font-bold relative pb-4 whitespace-nowrap">
        {price} <span className="absolute text-sm ">€</span>
      </p>

      {/* {isPrime && (
       <div className="flex whitespace-nowrap pb-4 items-center space-x-2">
        <Image className="w-12"
          src="https://logosarchive.com/wp-content/uploads/2021/07/Amazon-Prime-logo.svg"
       
          alt="test" width={40} height={40}
        />
        <p className="text-xs text-gray-400">FREE Next Day Delivery</p>
      </div> )} */}

      <button className=" bg-yellow-400 p-2 w-full hover:opacity-80 cursor-pointer">
        Add to Card
      </button>
    </div>
  );
};
