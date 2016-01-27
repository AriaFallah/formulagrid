import Parse from 'parse'
import normalize from '../services/normalize'

// Bootstrap parse
Parse.initialize("i0aPvQRmU9Cs94NMOkudjDIX67Y1X2dN4Aft502Q", "xtHn84kNOyGR3xvarcSvaTNoJWwK3NgBdumspbKW")

// Parse classes
const FORMULA_CLASS = Parse.Object.extend('Formula')

// Normalize the data
const normalizeData = (data) => normalize(data, 'formulas')
const buildQuery = (parseClass, options) => {
  let query = new Parse.Query(parseClass)
  if (options.equalTo) {
    for (const x of options.equalTo) query = query.equalTo(x.key, x.value)
  }
  return query
}

const callApi = (parseClass, method, options = {}) => {
  const call = {
    FIND() {
      const query = buildQuery(parseClass, options)
      return query.find().then(normalizeData)
    },
    SAVE() {
      const entity = new parseClass()
      return entity.save(options)
    }
  }

  return call[method]()
}

// Create a class specific request
const formulaRequest = callApi.bind(null, FORMULA_CLASS)

// Create the API calls
const addFormula    = (formula) => formulaRequest('SAVE', formula)
const getFormula    = (query)   => formulaRequest('FIND', query)
const editFormula   = (formula) => formulaRequest('', )
const deleteFormula = (query)   => formulaRequest('', )

export default {
  addFormula,
  getFormula,
  editFormula,
  deleteFormula,
}
