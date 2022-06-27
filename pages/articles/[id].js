import React from 'react'
import Footer from '../../components/homePage/Footer'
import Header from '../../components/homePage/Header'
import Nav from '../../components/homePage/Nav'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useRouter } from 'next/router';
import Body from "../../components/ArticleDetail/Body"
const  ProductDetail = ({result}) => {
  const Router=useRouter()
  console.log(result)
  return (
    <div>
      <Header/>
      <Nav/>

     
      <div className='  max-w-screen-2xl mx-auto'>
        <div className='flex items-center text-gray-600 text-xs pl-8 pb-28 pt-5 cursor-pointer' onClick={()=>{Router.push("/")}}>
          <ArrowLeftIcon/>
          <p>Retour aux résultats</p>
        </div>
        <div>
      <Body result={result}/>




        </div>
 {/* Chemin ou retour resulat */}
      {/* Body avec Image Titre desciroption  */}
      {/* Colonne de droite ajouter panier  */}
      {/* Colonne de Gauche Photo Sup */}

      </div>
      <Footer/>
    </div>
  )
}

export default ProductDetail

export async function getServerSideProps(context) {
 const {id}=context.query

 const fetchData= await fetch(`https://fakestoreapi.com/products/${id}`)
 const result=await fetchData.json()
  return {
    props: {result}, // will be passed to the page component as props
  }
}