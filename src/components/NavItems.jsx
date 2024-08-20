import { FiShoppingCart } from "react-icons/fi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const NavItems = () => {
    return (
        <>
    {/* Signup Offer */}

    <p className="py-1 font-extralight bg-black text-white text-center">Sign up and get 20% off to your first order. <NavLink to="SignUp" className="underline font-normal hover:text-slate-300">Sign Up Now</NavLink></p>


 {/* Header COntainer */}
 <div className="max-w-[1440px] h-[72px] flex items-center justify-between px-8 py-10">
  {/* Logo */}
  <div className="flex items-center">
    <h1 className="text-2xl font-bold text-black font-IntegralCF">SHOP.CO</h1>
  </div>
  {/* Search Bar */}
  <div className="flex items-center w-[580px] px-4 py-2 rounded-full border border-gray-300 bg-[#F5F5F5] text-gray-600">
    <FaMagnifyingGlass className="mx-2" />
    <input
      type="text"
      placeholder="Search for products..."
      className="w-full bg-[#F5F5F5] focus:outline-none"
    />
  </div>
  {/* Search Bar */}

        <div className=" flex justify-around text-3xl font-bold">
        <NavLink className="mx-2 " to="/shop"><FiShoppingCart /></NavLink>
        <NavLink className="mx-2 " to="/profile"><CgProfile /></NavLink>

        </div>

  {/* Icons and Links */}
  <div className="flex items-center space-x-8">

    <nav className="flex items-center space-x-6 text-sm text-black">
        <NavLink className={({isActive})=> isActive ? "text-purple-500 text-lg " : "as"} to="/">Home</NavLink>
        <NavLink className={({isActive})=> isActive ? "text-purple-500 text-lg " : "as"} to="/shop">Shop</NavLink>
        <NavLink className={({isActive})=> isActive ? "text-purple-500 text-lg " : "as"} to="/new">New Arrivals</NavLink>
        <NavLink className={({isActive})=> isActive ? "text-purple-500 text-lg " : "as"} to="/brands">Brands</NavLink>
    </nav>
  </div>
</div>


        </>
    );
};

export default NavItems;