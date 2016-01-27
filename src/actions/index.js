import Parse from 'parse'

// Flatten an action
const action = (type, payload = {}) => ({ type, ...payload })

const createActionTypes = (base) => ({
  REQUEST:  `${base}_REQUEST`,
  RESOLVED: `${base}_RESOLVED`,
  REJECTED: `${base}_REJECTED`
})

// Action handler that generates API requests
const createActionHandler = (type) => ({
  request:  (options)  => action(`${type}_REQUEST`,  { options }),
  resolved: (response) => action(`${type}_RESOLVED`, { ...response }),
  rejected: (error)    => action(`${type}_REJECTED`, { error }),
})

// General actions
export const FORMULA = createActionTypes('FORMULA')

// General action handlers
export const formulaHandler = createActionHandler('FORMULA')

// Entity actions
export const ADD_FORMULA    = 'ADD_FORMULA'
export const GET_FORMULA    = 'GET_FORMULA'
export const EDIT_FORMULA   = 'EDIT_FORMULA'
export const DELETE_FORMULA = 'DELETE_FORMULA'

// Action dispatchers
export const addFormula    = (formula) => ({ type: ADD_FORMULA,  formula })
export const getFormula    = (query)   => ({ type: GET_FORMULA,    query })
export const editFormula   = (formula) => ({ type: EDIT_FORMULA, formula })
export const deleteFormula = (query)   => ({ type: DELETE_FORMULA, query })
