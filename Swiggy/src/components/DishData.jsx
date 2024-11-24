import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const DishData = (props)=>{
    const dispatch = useDispatch();

    const handleAddItem = (item)=>{
        dispatch(addItem(item))
    }
    const data = props.data.card.card;
    const imgPrefix = "https://media-assets.swiggy.com/swiggy/image/upload/";

    return (  
        <div tabIndex={0} className="collapse collapse-arrow w-full md:w-8/12 m-auto my-3 shadow-lg py-3">
        <div className="collapse-title text-xl font-medium">
            {data.title}
        </div>

        <div className="collapse-content">
          {data.itemCards.map((item)=>{
            const info = item.card.info;
            return (
                <div key={info.id} className="flex flex-col md:flex-row border-b border-b-slate-700 p-2 md:p-3 m-2 items-center justify-between">
                   <div className="flex flex-col text-left w-full md:w-9/12 p-2 md:p-3">
                        <h1 className="text-base md:text-lg font-bold">{info.name}({info.length})</h1>
                        <h1 className="text-sm md:text-md font-bold">₹{info.price/100}</h1>
                        <h1 className="text-xs md:text-sm">{info.description}</h1>
                   </div>
                   <div className="flex flex-col items-center w-full md:w-auto">
                    <img className="w-full md:w-30 max-h-24 rounded-lg shadow-lg m-2" src={imgPrefix + info.imageId} alt={info.name} />
                    <button 
                        onClick={()=> handleAddItem(item)} 
                        className="bg-green-800 w-full md:w-auto text-white py-1 px-3 rounded-lg btn hover:scale-105 text-sm md:text-base"
                    >
                        Add to cart
                    </button>
                   </div>
                </div>
            )
          })}
        </div>
        </div>
    )
}

export default DishData;