import Header from './Header';
import Carousel from './Caraousel';
import Card from './Card';
import { useEffect, useState } from 'react';
import Shimmer from  './Shimmer'
import {mockData} from '../mock-data'
function Body() {
    const [data , setData] = useState([]);
    const [resList, setResList] = useState([]);

    const fetchData = async () => {
        const API_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4757928&lng=88.415546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        const res = await fetch('https://cors-anywhere.herokuapp.com/' + API_URL);
        let res_data = await res.json();
        setData(res_data);
        setResList(res_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    };

    useEffect(() => {
        console.log("UseEffect called...");
        setData(mockData);
        setResList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        // fetchData();
    }, []);

    // Show loading message if data is not yet fetched
    if (resList.length === 0) {
        return(
            <> 
                <Shimmer/>
            </>
        )
    }

    return (
        <>
            <Carousel data={data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle} />
            <div className="mt-10 flex items-center justify-center flex-wrap gap-4">
                {resList.map((res) => (
                    <Card key={res.info.id} data={res} />
                ))}
            </div>
            <div className="mt-2 h-[40vh]"></div>
        </>
    );
}

export default Body;
