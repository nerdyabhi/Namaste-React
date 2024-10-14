import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from '../utils/useRestaurantMenu'

const RestaurantMenu = () => {
    const restId = useParams().restId;
    
   const resInfo = useRestaurantMenu(restId);
    
   console.log(resInfo);
   
   if (resInfo.length===0 ) return (<h1>Loading...</h1>);
   
   
    
    const imgPrefix = "https://media-assets.swiggy.com/swiggy/image/upload/";
    const {name , feeDetails , city , cloudinaryImageId , avgRating , totalRatingString} = resInfo.data.cards[2].card.card.info;
   
    const menu = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;

    
  return (
    <div className="flex flex-col items-center justify-center">
      <img className="w-[200px]" src={imgPrefix + cloudinaryImageId} alt="" />
      <h1>{name}</h1>
      <p>{feeDetails.restaurantId}</p>
      <p>{city}</p>
      <p>{avgRating + "⭐ | " + totalRatingString}</p>


      <div className="flex-col">
            {menu.map((item)=>{
                const {id , imageId , description , category , name } = item.card.info
                return (
                    <div key={id} className="flex gap-10 m-10 flex-wrap">
                        <img className="w-20 h-20" src={imgPrefix + imageId} alt="Image" />
                        <p>{name}</p>
                    </div>
                )
            })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
