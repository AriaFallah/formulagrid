const Firebase = require('firebase');

const firebase = new Firebase('https://sizzling-heat-5193.firebaseio.com/formulas');
firebase.push({
  name: 'Test',
  formula: 'Test2'
});
