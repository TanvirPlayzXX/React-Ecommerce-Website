import { FiShoppingCart } from "react-icons/fi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
const NavItems = () => {

  const [input,setInput] = useState(false)
  const [nav,setNav] = useState(false)




    return (
        <div className="sticky top-0 left-0 bg-slate-100">
    {/* Signup Offer */}

    <p className="py-1 font-extralight bg-black text-white text-center">Sign up and get 20% off to your first order. <NavLink to="SignUp" className="underline font-normal hover:text-slate-300">Sign Up Now</NavLink></p>


 {/* Header COntainer */}
 <div className=" h-[72px] relative flex  items-center max-w-[1440px] m-auto justify-around px-8 py-10">
  {/* Logo */}
  <FaBars onClick={()=>setNav(!nav)} className="sm:hidden text-3xl cursor-pointer"/>
  <div className="  flex items-center">
    <h1 className="text-2xl font-bold text-black font-IntegralCF">SHOP.CO</h1>
  </div>


  {/* Icons and Links */}
  <div className="flex items-center space-x-8">

    <nav className={`flex items-center max-md:fixed max-md:text-white max-md:bg-black max-md:w-fit max-md:p-2 top-36 ${nav? "right-0 left-0" : "-left-full"} transition-all space-x-6 text-sm text-black`}>
        <NavLink className={({isActive})=> isActive ? "text-purple-500 text-lg " : "as"} to="/">Home</NavLink>
        <NavLink className={({isActive})=> isActive ? "text-purple-500 text-lg " : "as"} to="/shop">Shop</NavLink>
        <NavLink className={({isActive})=> isActive ? "text-purple-500 text-lg " : "as"} to="/new">New Arrivals</NavLink>
        <NavLink className={({isActive})=> isActive ? "text-purple-500 text-lg " : "as"} to="/brands">Brands</NavLink>
    </nav>
  </div>



  {/* Search Bar */}

  <div className={`items-center max-sm:absolute top-16  left-1/2 max-sm:-translate-x-1/2 flex   bg-[#dce0e0] max-sm:${input? "inline-flex" : "hidden"}  w-fit px-4 py-2 rounded-full border border-gray-300  text-gray-600`}>
  <FaMagnifyingGlass  className="mx-2 text-3xl " />
    <input
      type="text"
      placeholder="Search for products..."
      className={` focus:outline-none  bg-transparent sm:basis-64 ml-1`}
    />
  </div>
  {/* Search Bar */}

        <div className=" flex justify-around text-3xl font-bold">
        <FaMagnifyingGlass onClick={()=> setInput(!input)} className="mx-2 sm:hidden cursor-pointer transition-all focus:text-slate-600" />
        <NavLink className="mx-2 " to="/shop"><FiShoppingCart /></NavLink>
        <NavLink className="mx-2 " to="/profile"><CgProfile /></NavLink>

        </div>


</div>


        </div>
    );
};

export default NavItems;