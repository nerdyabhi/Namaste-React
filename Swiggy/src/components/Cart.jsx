import { useDispatch, useSelector } from "react-redux";
import CartData from "./CartData";
import { clearCart } from "../utils/cartSlice";




const Cart = ()=>{
    const cartItems = useSelector(store=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }

    if(cartItems.length ===0) return <>loading...</>
    return(
        <div className="flex flex-col space-y-5">
            <button onClick={()=>handleClearCart()} className="btn w-20 ">Clear Cart</button>
         {cartItems.map((item)=>{
                return <CartData  key ={item.card.info.id} data = {item}/>
         })}
        </div>
    )
}

export default Cart;