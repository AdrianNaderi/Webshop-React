import { createSlice } from "@reduxjs/toolkit";

const product1 = ({
    id: 1,
    name: "Röd klänning",
    price: 300.321,
    image: "/img/blouse.png",
    cartQuantity: 1,
});
const product2 = ({
    id: 2,
    name: "Blå klänning",
    price: 100,
    image: "/img/blouse.png",
    cartQuantity: 2,
});

const initialState = {
    cartItems: [product1, product2],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice ({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((Item) => Item.id === action.payload.id);
              if(itemIndex >= 0){
                  state.cartItems[itemIndex].cartTotalQuantity += 1
              } else {
                  const tempProduct = {...action.payload, cartTotalQuantity: 1};
                  state.cartItems.push(tempProduct);
              }
        },
        removeFromCart(state, action){
            const nextCartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            );
            state.cartItems = nextCartItems;
        },
        decreaseCart(state, action){
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )
            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -=1
            } else if (state.cartItems[itemIndex].cartQuantity === 1){
                const nextCartItems = state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                );
                state.cartItems = nextCartItems;
            };
        },
        getTotals(state, action){
            let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem)=>{
                const { price, cartQuantity} = cartItem;
                const itemTotal = price * cartQuantity;
                
                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal;
            }, {
                total: 0,
                quantity: 0
            });
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
    },
});

export const { addToCart, removeFromCart, decreaseCart, getTotals } = cartSlice.actions;
export default cartSlice.reducer;