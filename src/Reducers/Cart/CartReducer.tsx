import { ADD_CART } from '../../Constants/cartConstant';

const CartReducer = (state = [], action: { type: string; data: boolean; }) => {
  switch (action.type) {
    case ADD_CART:
      return action.data;
    default:
      return state
  }
}

export default CartReducer;
