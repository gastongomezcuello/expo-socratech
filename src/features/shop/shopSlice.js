import { createSlice } from "@reduxjs/toolkit";
import allCategories from "../../data/categories";
import allProducts from "../../data/products";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    value: {
      products: allProducts,
      categories: allCategories,
      categorySelected: "",
      productsFilteredByCategory: [],
      productIdSelected: null,
    },
  },
  reducers: {
    setCategorySelected: (state, action) => {
      const categorySelected = action.payload;
      const productsFiltered = allProducts.filter(
        (product) => product.category === categorySelected
      );
      state.value.categorySelected = action.payload;
      state.value.productsFilteredByCategory = productsFiltered;
    },
    setProductIdSelected: (state, action) => {
      state.value.productIdSelected = action.payload;
    },
  },
});

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions;

export default shopSlice.reducer;
