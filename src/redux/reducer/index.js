import { GET_ALL_PRODUCTS } from "../actions";

const initialState = {
  allProducts: [],
  currentProducts: [], 
  productDetail: [],
  filters: [],
  sorts: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
          ...state,
          allProducts: action.payload,
          currentProducts: action.payload          
      } 
    default: 
      return {
          ...state
      }      
    }
  };
  
  export default rootReducer;