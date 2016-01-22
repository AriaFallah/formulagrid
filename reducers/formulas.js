import { ADD_FORMULA } from '../actions/formula';
import { formulas } from './data';

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
