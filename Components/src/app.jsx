import Header from './components/Header'
import Carousel from './components/Caraousel';
import Card from './components/Card';


    // const API_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4757928&lng=88.415546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // const res = await fetch('https://cors-anywhere.herokuapp.com/' + API_URL);
    // const data = await res.json(); 
    // console.log(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

 function  App() {

    // Prepare an empty array to hold Card components
  const cards = [];

  // Using a loop to push Card components into the array
  for (let i = 0; i < 5; i++) {
    cards.push(<Card key={i} />); // Ensure each Card has a unique key
  }

  return (
    <>
      <Header />
      <Carousel />
      <div className='mt-10 flex items-center justify-center flex-wrap gap-4'>
      {cards} {/* Render the array of Card components */}
      </div>
        <div className="mt-2 h-[100vh]" ></div>
    </>
  );
}

export default App;