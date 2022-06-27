import React,{useState} from "react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ReactStars from "react-rating-stars-component";
import Image from "next/image";
import { useRouter } from "next/router";
const ListArticle = ({ data }) => {
  const router = useRouter();
  
  const GoToArticleDetail = (id) => {
    id && router?.push(`/articles/${id}`);
  };
  return (
    <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4   m-2 gap-5 ">
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

  const [isPrime]=useState( Math.random()<0.5)

  return (
    <div className="gap-3 p-4 bg-white">
      <div className="pb-4 h-52 max-w-xs grid place-content-center bg-gray-50">
        <Image
          src={image}
          width={150}
          height={200}
          className="object-contain cursor-pointer"
          onClick={() => {
            GoToArticleDetail(id);
          }}
        />
      </div>

      <p onClick={() => {
            GoToArticleDetail(id);
          }} className="text-[#4A9AA8] text-xl cursor-pointer hover:underline">
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
      <p className="text-2xl font-bold relative pb-4">
        {price} <span className="absolute text-sm">€</span>
      </p>
    
      {isPrime && (
       <div className="flex whitespace-nowrap pb-4 items-center space-x-2">
        <img className="w-12"
          src="https://logosarchive.com/wp-content/uploads/2021/07/Amazon-Prime-logo.svg"
       
          alt="test"
        />
        <p className="text-xs text-gray-400">FREE Next Day Delivery</p>
      </div> )}

      <button className=" bg-yellow-400 p-2 w-full hover:opacity-80 cursor-pointer">
        Add to Card
      </button>
    </div>
  );
};
