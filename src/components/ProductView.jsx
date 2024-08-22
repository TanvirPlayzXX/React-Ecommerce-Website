import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../../assets/products";
const ProductView = () => {
    let { producti } = useParams();
    const [data,setData] = useState(products.find((v)=> v.Id ==producti))
    console.log(data)


    return (
        <div>
            
        </div>
    );
};

export default ProductView;