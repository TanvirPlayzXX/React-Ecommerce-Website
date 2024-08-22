import { FaStar } from "react-icons/fa"
import { useRef } from "react";
import { NavLink } from "react-router-dom";
const PCard = ({datas}) => {
  const stark = useRef()


  return (
    <div className="text-left">
      <img src={datas.img} alt="Img" />
      <h2 className="font-Satoshi font-bold">{datas.Name}</h2>
      <span>#</span>
      <p className="font-bold">{datas.price}</p>
      <NavLink to={`/shop/products/${datas.Id}`}>P</NavLink>
    </div>
  );
};

export default PCard;