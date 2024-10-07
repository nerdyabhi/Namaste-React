// import { data } from './mockdata';
import Card from "./components/Card";
import { useState } from 'react';

const imgPrefix = "https://media-assets.swiggy.com/swiggy/image/upload/";
const API_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4757928&lng=88.415546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
const res = await fetch('https://cors-anywhere.herokuapp.com/' + API_URL);
const data = await res.json(); 
console.log(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
// console.log(data?.data.cards[1].card.gridElements.infoWithStyle.restauratnts);

function App() {
    // let num =0;
    const [num , setNum] = useState(Number(0));
    return (
        <div className='card-container'>
            
            <button onClick={()=>{
                setNum(num+1);
                console.log(num);
                
            }} >Click Me</button>
            {data.map((card, index) => {
                return <Card key={card.id} data={card} num = {num} />;  // Add 'return'
            })} 
        </div>
    );
}

export default App;
