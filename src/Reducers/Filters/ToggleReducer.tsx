import { TOGGLE } from '../../Constants/filterConstant';

const ToggleReducer = (state = [], action: { type: string; data: boolean; }) => {
  switch (action.type) {
    case TOGGLE:
      return action.data;
    default:
      return state
  }
}

export default ToggleReducer;
