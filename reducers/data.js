import { normalize, Schema, arrayOf } from 'normalizr';

const apiFormulas = [
  {
    id: 1,
    name: 'Area of a square',
    formula: '$A = bh$'
  }, {
    id: 2,
    name: 'Area of a square',
    formula: '$A = bh$'
  }, {
    id: 3,
    name: 'Area of a square',
    formula: '$A = bh$'
  }
];

const formulas = new Schema('formulas');
export default normalize(apiFormulas, arrayOf(formulas));
