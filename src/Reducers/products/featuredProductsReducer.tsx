import {
  GET_ALL_FEATURED_PRODUCT,
  GET_ALL_FEATURED_PRODUCT_REQUEST
} from './../../Constants/productConstant';

const featuredProductsReducer = (state = [], action: { type: any; payload: any; }) => {
  switch (action.type) {
    case GET_ALL_FEATURED_PRODUCT:
      return action.payload;
    case GET_ALL_FEATURED_PRODUCT_REQUEST:
      return action.payload;
    default:
      return state
  }
}

export default featuredProductsReducer;
