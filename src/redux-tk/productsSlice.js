import { createSlice } from '@reduxjs/toolkit'
import products from '../data/products.json'
import idGenerator from '../data/idGenerator'

const initialState = {
  allProducts: idGenerator(products),
  currentProducts: [],
  productDetail: {},
  filters: [{key: 'brand', value: ''}, {key: 'category', value: ''}],
  sorts: [{key: 'name', value: ''}, {key: 'price', value: ''}]
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getAllProducts: (state) => {
      state.currentProducts = state.allProducts
    },
    getProductDetails: (state, action) => {
      state.productDetail = state.allProducts.find(product => product.id == action.payload)
    },
    filterProducts: (state, action) => {
      let { key, value }= action.payload
      for (let obj of state.filters) {
        if (obj.key == key) {
          obj.value = value
        }
      }

      state.currentProducts = state.allProducts.filter((product) => state.filters.every((filter) => 
      filter.value != '' 
      ? product[filter.key] === filter.value 
      : product))
      
      if (state.currentProducts.length == 0) {
        state.currentProducts = state.allProducts
      }
    },
    // sortProducts: (state, action) => {
    //   let { key, value }: SortType = action.payload
    //   state.allProducts = value == 'asc' || ''
    //   ? state.allProducts.sort(function (a, b) {
    //     if (a[key] > b[key]) {
    //       return 1;
    //     } else if (a[key] < b[key]) {
    //       return -1;
    //     }
    //     return 0;
    //   })
    //   : state.allProducts.sort(function (a, b) {
    //     if (a[key] <b[key]) {
    //       return 1;
    //     } else if (a[key] > b[key]) {
    //       return -1;
    //     }
    //     return 0;
    //   });
    //   return products
    // }
  },
})

export const { filterProducts, getAllProducts, getProductDetails } = productsSlice.actions

export default productsSlice.reducer