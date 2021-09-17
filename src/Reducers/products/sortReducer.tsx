import {
  CHANGE_SORT
} from './../../Constants/productConstant';

const sortReducer = (state = '', action: { type: any; payload: any; }) => {
  switch (action.type) {
    case CHANGE_SORT:
      return action.payload
    default:
      return state
  }
}

export default sortReducer;
