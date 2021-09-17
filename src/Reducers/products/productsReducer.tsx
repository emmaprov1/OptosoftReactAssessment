import {
  GET_ALL_PRODUCT,
  GET_ALL_PRODUCT_REQUEST
} from './../../Constants/productConstant';

const productsReducer = (state = [], action: { type: any; payload: any; }) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return action.payload;
    case GET_ALL_PRODUCT_REQUEST:
      return action.payload;
    default:
      return state
  }
}

export default productsReducer;
