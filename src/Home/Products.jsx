import { useState } from 'react';
import { products } from '../../assets/products';
import PCard from './../components/PCard';
import { NavLink } from 'react-router-dom';

const Products = () => {

    
    const [PHeading,SetPHeading] = useState("")
    const [deProducts,setProducts] = useState(products)

    const buttons = [{Show:"All",Filter:"All"},{Show:"New",Filter:"New"},{Show:"Top Selling",Filter:"TopSold"}]

    return (
        <div className='text-center'>
            {/* Products Heading */}
            <h1 className='font-IntegralCF text-5xl py-14 text-center'>Products</h1>



        {
            buttons.map((value,i)=>{
                return <NavLink key={i} className="mx-2 px-5 py-3 rounded-lg bg-slate-300 hover:bg-white transition-all hover:border-2 hover:border-yellow-400 inline-block" onClick={()=>{

                   if(value.Filter == "All"){
                    setProducts(products)
                   }else{
                    setProducts(products.filter((v)=> v.group == value.Filter))
                   } 
                    SetPHeading(value.Show)
                }}>{value.Show}</NavLink>
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