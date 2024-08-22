import { FaStar } from "react-icons/fa"
import { useRef } from "react";
const PCard = ({datas}) => {
  const stark = useRef()

  console.log(stark)

  return (
    <div className="text-left">
      <img src={datas.img} alt="Img" />
      <h2>{datas.Name}</h2>
      <p></p>
    </div>
  );
};

export default PCard;