import {
  CHANGE_CAT_SORT
} from './../../Constants/productConstant';

const catSortReducer = (state = [], action: { type: any; payload: any; }) => {
  switch (action.type) {
    case CHANGE_CAT_SORT:
      return action.payload
    default:
      return state
  }
}

export default catSortReducer;
