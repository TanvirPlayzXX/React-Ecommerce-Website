
const TopBrands = () => {

    let brandList = [
        "./../../assets/image/TopBrands/Group(1).png",
        "./../../assets/image/TopBrands/Group.png",
        "./../../assets/image/TopBrands/gucci-logo.png",
        "./../../assets/image/TopBrands/prada-logo.png",
        "./../../assets/image/TopBrands/zara-logo.png",
    ]


    return (
        <div className=" bg-black py-10">
            <div className="max-w-[1440px] m-auto flex justify-around">
           {
            brandList.map((value,i)=>{
                return <img key={i} className="w-fit" src={value} alt="Brand" />
            })
           } 
        </div>
        </div>
    );
};

export default TopBrands;