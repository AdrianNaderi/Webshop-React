import React from 'react'
import { useSelector } from "react-redux";
import classes from "./Cart.module.css"

const Cart = () => {
    const cart = useSelector((state) => state.cart)
    return (
     <div className={classes.container}>
       <h2>Shopping Cart</h2>
       {cart.cartItems.lenght === 0 ? (
         <div className="cart-empty">
           <p>Your cart is currently empty</p>
         </div>
       ): (
         <div>
           <div className={classes.titles}>
             <h3 className='product-title'>Product</h3>
             <h3 className='price'>Price</h3>
             <h3 className='quantity'>Quantity</h3>
             <h3 className='subtotal'>Subtotal</h3>
           </div>
           <div className={classes.item}>
             {cart.cartItems?.map(cartItem => (
                <div className='cart-item' key={cartItem.id}>
                   <div className='cart-product'>
                      <img src={cartItem.image} alt={cartItem.name}/>
                      <div>
                          <h3>{cartItem.name}</h3>
                      </div>
                   </div>
                   <div className='cart-product-price'>${cartItem.price}</div>
                   <div className='cart-product-quantity'>
                       <button>-</button>
                       <div className='count'>{cartItem.cartQuantity}</div>
                       <button>+</button>
                   </div>
                   <div className='cart-product-subtotal-price'>
                       ${cartItem.price * cartItem.cartQuantity}
                   </div>
                </div> 
             ))} 
           </div>
           <div className='cart-summary'>
               <div className='cart-checkout'>
                   <div className='total'>
                       <span>TOTAL</span>
                       <span className='amount'>${cart.cartTotalAmount}</span>
                   </div>
                   <button>PROCEED TO CHECKOUT</button>
               </div>
           </div>
         </div>
       )}
     </div>
    );
  };
  
  export default Cart;
