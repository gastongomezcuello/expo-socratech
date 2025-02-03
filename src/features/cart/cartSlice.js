import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: {
      updatedAt: new Date().toLocaleString(),
      total: 0,
      items: [],
    },
  },
  reducers: {
    setCart: (state, action) => {
      state.value = {
        items: action.payload.items,
        total: action.payload.total,
        updatedAt: action.payload.updatedAt,
      };
    },

    addItem: (state, action) => {
      debugger;
      const productRepeated = state.value.items.find(
        (item) => item.id === action.payload.id
      );
      if (productRepeated) {
        const itemsUpdated = state.value.items.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity += action.payload.quantity;
            return item;
          }
          return item;
        });
        const total = itemsUpdated.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        state.value = {
          ...state.value,
          items: itemsUpdated,
          total,
          updatedAt: new Date().toLocaleString(),
        };
      } else {
        state.value.items.push(action.payload);
        const total = state.value.items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );

        state.value = {
          ...state.value,
          total,
          updatedAt: new Date().toLocaleString(),
        };
      }
    },

    removeItem: (state, action) => {
      const itemsUpdated = state.value.items.filter(
        (item) => item.id !== action.payload.id
      );
      const total = itemsUpdated.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      state.value = {
        ...state.value,
        items: itemsUpdated,
        total,
        updatedAt: new Date().toLocaleString(),
      };
    },
    clearCart: (state) => {
      state.value = {
        items: [],
        total: 0,
        updatedAt: new Date().toLocaleString(),
      };
    },
  },
});

export const { addItem, removeItem, setCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
