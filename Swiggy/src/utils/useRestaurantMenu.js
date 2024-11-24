import { useState, useEffect } from "react";

const useRestaurantMenu = (restId) => {
    console.log("Restaurant Id is:", restId);
    
    const API_URL = `https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.4757928&lng=88.415546&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`;
    const [resInfo, setResInfo] = useState(null); // Use null to represent initial loading state

  

    const fetchData = async () => {
        try {
            const res = await fetch(API_URL, {
                headers: {
                    'x-cors-api-key': 'temp_80ae29e0aaf1745c60020d1d1e7a3fe4'
                }
            });
            console.log("---Making request");
            
            if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`); // Handle non-200 responses
            const json = await res.json();
            console.log(json);
            
            setResInfo(json);
        } catch (error) {
            console.error("Error fetching data:", error);
            setResInfo(null); // Optional: handle error state
        }
    };

    useEffect(() => {
        if (restId) fetchData(); // Avoid fetching if restId is undefined or invalid
    }, []);

    return resInfo;
};

export default useRestaurantMenu;
