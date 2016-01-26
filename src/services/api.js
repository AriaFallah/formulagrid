import Parse from 'parse'
import pwrap from 'pwrap'

// Bootstrap parse
Parse.initialize("i0aPvQRmU9Cs94NMOkudjDIX67Y1X2dN4Aft502Q", "xtHn84kNOyGR3xvarcSvaTNoJWwK3NgBdumspbKW")

// Parse classes
const FORMULA_CLASS = Parse.Object.extend('Formula')

// For handling Parse's silly promise implementation
const p = pwrap()
const normalize = p((fn, resolve, reject) => fn.then(resolve, reject))

function callApi(parseClass, method, options) {
  switch(method) {
    case 'FIND':
      const query = new Parse.Query(parseClass)
      return normalize(query.find())
    default:
      return null
  }
}

// Create a class specific request
const formulaRequest = callApi.bind(null, FORMULA_CLASS)

const addFormula    = (formula) => formulaRequest('', )
const getFormula    = (query)   => formulaRequest('FIND', query)
const editFormula   = (formula) => formulaRequest('', )
const deleteFormula = (query)   => formulaRequest('', )

export default {
  addFormula,
  getFormula,
  editFormula,
  deleteFormula,
}
