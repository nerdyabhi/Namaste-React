import React from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import { useSelector } from "react-redux";

function Header() {
  const isOnline = useIsOnline();
  const cartItems = useSelector((store) => store.cart.items)
  return (


    <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">Abhi Sharma</Link>
  </div>


    
    <div className="mr-3">
      <p>{isOnline ? '🟢' : '🔴'}</p>
      </div>


      <div className="flex gap-5 mr-8 md:mr-10 ">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/Grocery">Grocery</Link>
        <Link to="/Grocery">Cart - {cartItems.length} Items</Link>
      </div>


  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
     
    </div>
  </div>
        </div>
    );
}

export default Header;