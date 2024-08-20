
const TopBrands = () => {

    let brandList = [
        "./../../assets/image/TopBrands/Group(1).png",
        "./../../assets/image/TopBrands/Group.png",
        "./../../assets/image/TopBrands/gucci-logo.png",
        "./../../assets/image/TopBrands/prada-logo.png",
        "./../../assets/image/TopBrands/zara-logo.png",
    ]


    return (
        <div className="flex justify-around bg-black py-10">
           {
            brandList.map((value,i)=>{
                return <img key={i} src={value} alt="Brand" />
            })
           } 
        </div>
    );
};

export default TopBrands;