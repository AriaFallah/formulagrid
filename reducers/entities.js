import entities from './data';
import { ADD_FORMULA } from '../actions/formula';

export default function reducer(state = entities, action) {
  switch(action.type) {
    case ADD_FORMULA:
      return [
        {
          name: action.name,
          formula: action.formula
        },
        ...state
      ]
    default:
      return state;
  }
}
