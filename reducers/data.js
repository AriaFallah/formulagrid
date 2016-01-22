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

const formula = new Schema('formula');
export default normalize(apiFormulas, arrayOf(formula));
