import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    
    return (
        <div className="flex flex-col items-center  justify-center border h-[100vh]">
            <h1>Oopsy Daisy! , Something went wrong...</h1>
            <h2>Error : {err.data}</h2>
            <h2>Status : {err.statusText + status}</h2>
        </div>
    )
}

export default Error;