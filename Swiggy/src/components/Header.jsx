import React from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import { useSelector } from "react-redux";

function Header() {
  const isOnline = useIsOnline();
  const cartItems = useSelector((store) => store.cart.items)
  return (
    <div className="navbar bg-base-100 px-4">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Abhi Sharma</Link>
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden md:block">
          <p>{isOnline ? '🟢' : '🔴'}</p>
        </div>

        <Link to="/Cart" className="btn btn-ghost">
          Cart ({cartItems.length})
        </Link>

        <div className="form-control hidden md:block">
          <input 
            type="text" 
            placeholder="Search" 
            className="input input-bordered w-24 md:w-auto" 
          />
        </div>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-8 md:w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
