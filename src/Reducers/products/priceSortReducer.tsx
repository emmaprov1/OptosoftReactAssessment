import {
  CHANGE_PRICE_SORT
} from './../../Constants/productConstant';

const priceSortReducer = (state = '', action: { type: any; payload: any; }) => {
  switch (action.type) {
    case CHANGE_PRICE_SORT:
      return action.payload
    default:
      return state
  }
}

export default priceSortReducer;
