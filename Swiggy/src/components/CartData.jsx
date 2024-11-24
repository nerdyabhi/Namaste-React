const imgPrefix = "https://media-assets.swiggy.com/swiggy/image/upload/";


const CartData = ({data})=>{
    const info = data.card.info;
    return (
        <>
              <div className="flex border-b border-b-slate-700 p-3 m-2 items-center justify-center">
                   <div className="flex flex-col text-left w-9/12 p-3">
                        <h1 className="text-lg font-bold">{info.name}({info.length})</h1>
                        <h1 className="text-md font-bold">₹{info.price/100}</h1>
                        <h1 className="text-sm">{info.description}</h1>
                   </div>
                   <div className="flex flex-col items-center relative">
                    <img className="w-30 max-h-24 rounded-lg shadow-lg   m-2 or" src={imgPrefix + info.imageId} alt="" />
                        <button className="bg-green-800 w-full text-white py-1 px-3 rounded-lg bottom-0  absolute hover:scale-105">Add to cart</button>
                   </div>
                </div>
        </>
    )
}

export default CartData;