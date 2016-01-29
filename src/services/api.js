import Parse from 'parse'
import normalize from '../services/normalize'

// Bootstrap parse
Parse.initialize("i0aPvQRmU9Cs94NMOkudjDIX67Y1X2dN4Aft502Q", "xtHn84kNOyGR3xvarcSvaTNoJWwK3NgBdumspbKW")

// Parse classes
const USER = Parse.User
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
    SEARCH() {

    },
    SAVE() {
      const entity = new parseClass()
      return entity.save(options)
    },
    LOGIN() {
      return parseClass.logIn(options)
    },
    SIGNUP() {
      const newUser = new parseClass()
      newUser.signUp(options)
    },
    LOGOUT() {
      return parseClass.logOut()
    }
  }
  return call[method]()
}

// Class specific request
const userRequest = callApi.bind(null, USER)
const formulaRequest = callApi.bind(null, FORMULA_CLASS)

// Create the API calls

// User calls
const login  = (info) => userRequest('LOGIN', info)
const signUp = (info) => userRequest('SIGNUP', info)
const logout = ()     => userRequest('LOGOUT')

// Formula CRUD
const addFormula    = (formula) => formulaRequest('SAVE', formula)
const getFormula    = (query)   => formulaRequest('FIND', query)
const editFormula   = (formula) => formulaRequest('', )
const deleteFormula = (query)   => formulaRequest('', )

export default {
  login,
  signUp,
  logout,
  addFormula,
  getFormula,
  editFormula,
  deleteFormula,
}
