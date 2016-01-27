import Parse from 'parse'
import { Schema, normalize, arrayOf } from 'normalizr'

// Bootstrap parse
Parse.initialize("i0aPvQRmU9Cs94NMOkudjDIX67Y1X2dN4Aft502Q", "xtHn84kNOyGR3xvarcSvaTNoJWwK3NgBdumspbKW")

// Parse classes
const FORMULA_CLASS = Parse.Object.extend('Formula')

// Normalizr Schemas
const formulaSchema = new Schema('formulas')

function callApi(parseClass, method, options) {
  switch(method) {
    case 'FIND':
      const query = new Parse.Query(parseClass)
      return query.find().then((data) => normalize(data, arrayOf(formulaSchema)))
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
