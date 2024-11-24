import { useParams } from "react-router-dom";
import useRestaurantMenu from '../utils/useRestaurantMenu'
import DishData from './DishData';
const imgPrefix = "https://media-assets.swiggy.com/swiggy/image/upload/";


const RestaurantMenu = () => {
  const restId = useParams().restId;
  const resInfo = useRestaurantMenu(restId);
      
  if (!resInfo ) return (<h1>Loading...</h1>);

  
   const tempCards = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
   const itemCards = tempCards.filter((c)=>{
      return c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
   })
    
   const restData = resInfo?.data?.cards[2]?.card?.card?.info;
   return (
    <>
    <div className="flex flex-col items-center justify-center ">
       <img  className="w-40 max-h-40 shadow-lg shadow-gray-700 rounded-r-lg" src={imgPrefix + restData.cloudinaryImageId} alt="" />
       <h1 className="font-bold text-lg mt-3">{restData.name}</h1>
       <h1 className="text-sm">{restData.avgRating} ⭐ | {restData.totalRatingsString}</h1>
       <h1 className="text-sm">{restData.city}</h1>
     </div>

    <div className="flex flex-col">
      {
        itemCards.map((item , index)=>{
          
              return (
              <>
              

              <DishData key={index} data={item} />
              </>
          )
        })
      }
    </div>


    </>
  );
};

export const withPromotedLabel = (Card)=>{
    return (props)=>{
      return(
        <>
          {/* <label className="m-2 p-2  z-[100] bg-black  text-white">4+rating</label> */}
          <Card {...props}/>
        </>
      )
    }
}
export default RestaurantMenu;
