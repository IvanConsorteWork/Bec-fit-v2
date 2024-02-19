export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_DETAILS = "GET_PRODUCT_DETAILS";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
export const SORT_PRODUCTS = "SORT_PRODUCTS";

import products from '../../data/products.json'
import idGenerator from '../../data/idGenerator.js'

export function getAllProducts() {
  return async function (dispatch) {
    let response = idGenerator(products)
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
    });
  };
}
