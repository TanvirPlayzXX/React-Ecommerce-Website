import { Button } from "../components/Button";
import Counter from './../components/Counter';


const Banner = () => {
    return (
        <div className="  bg-[#F2F0F1]">
            <div className="pt-20 max-w-[1150px]  pb-0 m-auto  bg-banner-texture  bg-no-repeat bg-top">
           <h2 className="text-6xl font-IntegralCF font-bold w-[40rem]">FIND CLOTHES THAT MATCHES YOUR STYLE</h2> 
            <p className="my-5 font-Satoshi w-2/5">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <Button text={"Shop Now"} />

        <Counter end={200} text="International Brands" />
        <Counter end={2000} text="High-Quality Products" style="mx-7 px-7 border-l-slate-400 border-r-slate-400 border-2 border-t-white border-b-white"/>
        <Counter end={30000} text="Happy Customers" />
        </div>
        </div>
    );
};

export default Banner;