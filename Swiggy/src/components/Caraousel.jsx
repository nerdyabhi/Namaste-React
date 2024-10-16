function Carousel(props){

    console.log(props);
    const info =props.data.info;
    console.log(info.imageId);
    
    return (
        <div className="carousel rounded-box h-[200px] tooltip-bottom">
            {info.map((list , index)=>{
              return(
                <div className="carousel-item" data-tip="hello" key={list.imageId}>
                    <img className="h-[200px]" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + list.imageId} alt="Image" />
            </div>
              )
               
            })}
      </div>
    )
}

export default Carousel;