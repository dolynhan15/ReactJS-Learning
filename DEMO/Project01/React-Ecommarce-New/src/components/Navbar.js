import React, {useContext} from 'react'
import {Link} from "react-router-dom"
import { CartContext } from '../Global/CartContext'

const Navbar = () => {
    const {qty} = useContext(CartContext);
    return (
        <nav>
            <ul className="left">
                
                {/* Không dùng a href mà dùng Link tại sao */}
                {/* Vì a sẽ tạo request mới và reload trang*/}
                {/* Link sẽ link tới SPA */}

                {/* <li><a href="">PakExpress</a></li>  */}
                <li><Link to="/">Shopping Online</Link></li>
            </ul>
            <ul className="right">
                <li><Link to="cart">
                    <span className="shoppingCart"><i class="fas fa-cart-plus"></i>
                        <span className="cartCount">{qty}</span>
                        {/* set quantity cho cart right */}
                    </span>
                </Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;