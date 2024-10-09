import { Link } from "react-router-dom";
const Card = (props) => {
    // console.log(props.data.info);
    const info = props?.data?.info;
  console.log(info);
  
    return (
      <>
     
        <div className="card md:max-w-[30%] lg:max-w-[20%] md:max-h-[500px] bg-base-100 w-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 overflow-hidden">
        <Link to={"/restaurant/" + info.id}>
          <figure className="relative">
            <img
              src={"https://media-assets.swiggy.com/swiggy/image/upload/" + info.cloudinaryImageId}
              alt={info.name}
              className="w-full h-48 object-cover" // Fixed image height
            />
            <figcaption className="absolute bg-black bg-opacity-70 bottom-0 left-0 w-full text-white text-center py-2 font-bold">
              40% OFF UPTO 80$
            </figcaption>
          </figure>
  
          <div className="card-body md:max-h-[300px]"> {/* Added overflow-auto for scroll */}
            <h2 className="card-title text-lg">
              {info.name}
              <div className="badge badge-success text-sm">{info.isOpen?"Open":"Close"}</div>
            </h2>
            <div className="card-actions justify-start flex-wrap">
              {info.cuisines.map((cuisine, index) => (
                <div key={index} className="badge badge-outline">
                  {cuisine}
                </div>
              ))}
            </div>
            <div className="mt-2">
              <div className="Card-info">
                {info.avgRating} ⭐ | {info.totalRatingsString + " Ratings"}
                <p className="flex items-center gap-2">
                  <i className="fa fa-location-dot"></i> {info.areaName}
                </p>
              </div>
            </div>
          </div>
        </Link>
        </div>
      </>
    );
  };
  
  export default Card;
  