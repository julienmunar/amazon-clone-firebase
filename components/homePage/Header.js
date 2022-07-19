import React from 'react'
import Image from 'next/image'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, useRadioGroup } from '@mui/material';
import { setCartOpen } from '../../redux/layoutSlice';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { selectCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
const Header = () => {
    const dispatch=useDispatch()
    const ChangeCartStatus=()=>{dispatch(setCartOpen())

    }
    const router=useRouter()
const ShoppingList=useSelector(selectCart)
const initialValue=0
const ShoppingListLenght=ShoppingList.map(item=>item.amount).reduce((sum,currentvalue)=>sum+currentvalue,initialValue)

console.log(ShoppingListLenght)

const OpenCartPath=router.pathname =="/articles/[id]"
console.log(OpenCartPath)
console.log(router.pathname)

    return (
        <div className='flex bg-[#131921] md:items-center flex-grow p-1 flex-col md:flex-row relative   '>

            {/* LEFT */}
            <div className='flex text-white space-x-2 flex-grow  md:flex-grow-0 order-1 mt-2 md:mt-0  '>
                <div className='flex flex-grow  cursor-pointer'>
                    <MenuIcon className='md:hidden flex-grow-0' />
                    <div className=' flex flex-grow  justify-center' onClick={()=>{router.push('/')}}>
                        <Image src="https://images-na.ssl-images-amazon.com/images/G/01/magicarp/image/amazon-logo-white.svg" width={127} height={50} alt="amazonLogo" objectFit='contain' className=' flex-grow-0'  />
                    </div>

                </div>
                <div className='   border border-[#131921] hover:border hover:border-gray-300 p-2  hidden xl:block  cursor-pointer'>
                    <p className='text-xs  text-gray-300 font-bold ml-6'>Bonjour</p>
                    <div className='flex '>
                        <FmdGoodIcon />
                        <h2 className=' font-bold text-sm whitespace-nowrap'>Entrez votre adresse</h2>
                    </div>
                </div>
            </div>



            {/* CENTER */}
            <div className='flex text-white items-center md:mr-7 md:ml-7 md:ml-0 flex-grow bg-[#FEBD69]  rounded-md  order-3 '>
                <div className='flex bg-[#F3F3F3] text-[#5F5C5B] py-2 px-2  items-center border-r border-gray-300 hidden lg:block lg:flex  cursor-pointer rounded-l-md '>
                    <p className=' whitespace-nowrap bg-[#F3F3F3] text-gray-700  text-xs '>Toutes nos categories </p>
                    <ArrowDropDownIcon />
                </div>
                <input placeholder='Search' className='w-full text-lg  py-8 lg:py-2 text-black outline-none pl-2   ' />
                <div className=''>
                    <SearchIcon className=' h-10 w-10 p-1.5 pr-1 text-gray-700 ' />
                </div>
            </div>



            {/* RIGHT */}
            <div className='flex text-white justify-between flex-grow-0 order-2 md:order-3'>
                <div className='flex space-x-2'>
                    <ButtonHeader title="Bonjour, identifiez-vous" action="Compte et Listes" dropDown />
                    <ButtonHeader title="Retours" action="et Commandes" />
                </div>

                <div className='flex relative items-center  border py-2 px-2 border-[#131921] hover:border hover:border-gray-300  cursor-pointer' onClick={()=>{ OpenCartPath ? (router.push('/cart')) : (ChangeCartStatus())}}>
                    <p className='absolute text-orange-400 font-bold text-lg left-5 top-0'>{ShoppingListLenght}</p>
                    <ShoppingCartIcon className=' text-4xl' />
                    <p className='font-bold text-sm hidden lg:inline'>Panier</p>
                </div>
            </div>



        </div>
    )
}

export default Header


const ButtonHeader = ({ title, action, dropDown }) => {
    return (
        <div className='  border py-1 px-2 border-[#131921] hover:border hover:border-gray-300 rounded-sm flex flex-col justify-center cursor-pointer' >
            <p className='text-xs whitespace-nowrap'>{title}</p>
            <div className='flex'>
                <h2 className='font-bold text-sm whitespace-nowrap'>{action}</h2>
                {dropDown && <ArrowDropDownIcon />}
            </div>
        </div>

    )
}