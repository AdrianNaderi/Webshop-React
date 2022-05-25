import { useEffect } from 'react';
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decreaseCart, getTotals, removeFromCart } from '../../store/cart-slice';
import classes from "./Cart.module.css"

const Cart = () => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch();

    useEffect(() =>{
       dispatch(getTotals());
    }, [cart, dispatch]);
    
    const handleRemoveFromCart = (cartItem) =>{
        dispatch(removeFromCart(cartItem));
    };

    const handleDecreaseCart = (cartItem) => {
      dispatch(decreaseCart(cartItem));
    };

    const handleIncreaseCart = (cartItem) => {
      dispatch(addToCart(cartItem));
    };
    return (
     <div className={classes.container}>
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
             <h3 className={classes.subtotal}>Subtotal</h3>
           </div>
           <div className="cart-items">
             {cart.cartItems?.map(cartItem => (
                <div className={classes.items} key={cartItem.id}>
                   <div className={classes.product}>
                     <div className={classes.removebtn}><button className={classes.removeitem} onClick={() =>handleRemoveFromCart(cartItem)}>X</button></div>
                      <img src={cartItem.image} alt={cartItem.name}/>
                      <div>
                          <h3>{cartItem.name}</h3>
                      </div>
                   </div>
                   <div className='cart-product-price'>${cartItem.price}</div>
                   <div className={classes.quantity}>
                       <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                       <div className={classes.count}>{cartItem.cartQuantity}</div>
                       <button className={classes.increase} onClick={() => handleIncreaseCart(cartItem)}>+</button>
                   </div>
                   <div className={classes.totalprice}>
                       ${cartItem.price * cartItem.cartQuantity}
                   </div>
                </div> 
             ))} 
           </div>
           <div className={classes.summary}>
               <div className={classes.checkout}>
                   <div className={classes.subtotal}>
                       <span>TOTAL</span>
                       <span className={classes.amount}>${cart.cartTotalAmount}</span>
                   </div>
                   <button className={classes.proceed}>PROCEED TO CHECKOUT</button>
               </div>
           </div>
         </div>
       )}
     </div>
    );
  };
  
  export default Cart;
