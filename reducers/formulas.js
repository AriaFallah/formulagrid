import { formulas } from './data';
import { ADD_FORMULA } from '../actions/formula';

export default function formula(state = formulas, action) {
  switch(action.type) {
    case ADD_FORMULA:
      return [
        {
          name: 'NEW',
          formula: 'NEW'
        },
        ...state
      ]
    default:
      return state;
  }
}
