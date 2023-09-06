import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: true,
    },
    reducers: {
        addToCart(state, action) {
            let selectedItem = action.payload;
            let existingItem = state.itemsList.find(
                (item) => item.id === selectedItem.id
            );
            if (existingItem) {
                state.itemsList = state.itemsList.map((item) => {
                    if (item.id === selectedItem.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                            totalPrice: item.totalPrice + item.price,
                        };
                    } else return item;
                });
            } else {
                state.itemsList.push({
                    id: selectedItem.id,
                    name: selectedItem.name,
                    price: selectedItem.price,
                    quantity: 1,
                    totalPrice: selectedItem.price,
                });
				state.totalQuantity++;
            }
        },
        removeFromCart(state, action) {
            let selectedItem = action.payload;
            let existingItem = state.itemsList.find(item => item.id === selectedItem.id);
            if (existingItem.quantity > 1) {
                state.itemsList = state.itemsList.map((item) => {
                    if (item.id === selectedItem.id) {
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                            totalPrice: item.totalPrice - item.price,
                        };
                    } else return item;
                });
            } 
			else if(existingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter(item => item.id !== selectedItem.id);
				state.totalQuantity--;
            }
        },
        toggleCartShow(state, action) {
			state.showCart = !state.showCart;
		},
    },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
