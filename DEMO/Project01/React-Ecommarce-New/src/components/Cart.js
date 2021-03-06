import React, {useContext} from "react"
import { CartContext } from "../Global/CartContext";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Cart = () => {
    
    const {shoppingCart, totalPrice, qty, dispatch} = useContext(CartContext);
    // {shoppingCart, totalPrice, qty, dispatch }
    const handleToken = async(token) => {
        // console.log(token); //data input for payment
        const product = {name: "All Products", price: totalPrice};
        const response= await axios.post("http://localhost:8000/checkout",{ //trong server.js
            product,
            token
        });
        console.log(response)
    }

    return (
        <div className="cart-container">
            <div className="cart-details" style={{marginTop: '100px'}}>
                {/* <h2>Shopping cart</h2> */}

                {shoppingCart.length > 0 ?  
                //cart//
                 shoppingCart.map(cart => (
                     <div className="cart" key={cart.id}>
                        <span className="cart-image">
                        <img src={cart.image} alt="not found" />
                        </span>
                         

                         <span className="cart-product-name">{cart.name}</span>
                         <span className="cart-product-price">${cart.price}.00</span>
                         <span className="inc" onClick={() => dispatch({type: 'INC', id: cart.id, cart})}><i className="fas fa-plus"></i></span>
                         <span className="product-quantity">{cart.qty}</span>
                         <span className="dec" onClick={() => dispatch({type: 'DEC', id: cart.id, cart})}><i className="fas fa-minus"></i></span>
                         <span className="product-total-price">{cart.price * cart.qty}</span>
                         <span className="delete-product" onClick={() => dispatch({type: 'DELETE', id: cart.id, cart})}>
                         <i className="fas fa-trash-alt"></i></span>
                        </div>
                        

                 ))
                : 'Sorry your cart is currently empty'}
            </div>
        {shoppingCart.length > 0 ? <div className="cart-summary">
                <div className="summary">
                    <h3>Cart Summary</h3>
                    <div className="total-items">
                        <div className="items">Total Items</div>
                        <div className="items-count">{qty}</div>
                    </div>
                    <div className="total-price-section">
                        <div className="just-title">Total Price</div>
                        <div className="items-price">${totalPrice}.00</div>
                    </div>
                    <div className="stripe-section">
                        {/* show button Pay With Card */}
                        <StripeCheckout
                         stripeKey="pk_test_51J5v1gIiI1LbArDLaoVWy4Ycs5faq944ZMSfspQMOxfTKIu1PtK9hHCk8w2AN5v9U14VeXXfbjuy6rb9T6mhKoRE005VCA3Z0x"
                         token={handleToken}
                         billingAddress
                         shippingAddress
                         amount={totalPrice * 100}
                         name ="All products"
                        >

                        </StripeCheckout>
                    </div>
                </div>
            </div> : ''}
        </div>
    )
}
export default Cart;