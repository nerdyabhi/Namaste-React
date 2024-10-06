import { data } from './mockdata';
import Card from "./components/Card";
import './css/main.css'
import { useState } from 'react';
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
