import { useEffect, useId, useRef, useState } from 'react';
import { products } from '../../assets/products';
import PCard from './../components/PCard';
import { NavLink } from 'react-router-dom';



const Products = () => {

    const x = useId()
    const z = useId()
    const y = useId()

    
    const [PHeading,SetPHeading] = useState("")
    const [deProducts,setProducts] = useState(products)

    const buttons = [{Show:"All",Filter:"All",Ref:x},{Show:"New",Filter:"New",Ref:y},{Show:"Top Selling",Filter:"TopSold",Ref:z}]

        const [classd,setClassd] = useState("All")
    

    return (
        <div className='text-center'>
            {/* Products Heading */}
            <h1 className='font-IntegralCF font-bold text-5xl py-14 text-center'>Products</h1>



        {
            buttons.map((value,i)=>{
                return <button key={i} id={value.Ref} className={`${classd ==value.Filter ? "bg-white border-2 border-yellow-400 border-1" : ""}bg-slate-300 mx-2 px-5 py-3 rounded-lg transition-all  inline-block`} onClick={()=>{

                    setClassd(value.Filter)

                   if(value.Filter == "All"){
                    setProducts(products)
                   }else{
                    setProducts(products.filter((v)=> v.group == value.Filter))
                   } 
                    SetPHeading(value.Show)
                }}>{value.Show}</button>
            })

        }

            <p className='my-7 font-IntegralCF'>Our {PHeading} Products</p>


        <div className='flex justify-around flex-wrap'>
        {
            deProducts.map((v,i)=>{
                return <PCard key={i} datas={v} />
            })
        }
        </div>

        </div>
    );
};

export default Products;