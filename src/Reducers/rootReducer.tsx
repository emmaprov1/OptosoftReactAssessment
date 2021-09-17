import { combineReducers } from 'redux';
import { CartReducer, catSortReducer, featuredProductsReducer, priceSortReducer, productsReducer, sortReducer, toggleReducer } from '.';

const rootReducer = combineReducers({
  toggle: toggleReducer,
  cart: CartReducer,
  products: productsReducer,
  featured: featuredProductsReducer,
  sort: sortReducer,
  catSort: catSortReducer,
  priceSort: priceSortReducer
});

export default rootReducer;
