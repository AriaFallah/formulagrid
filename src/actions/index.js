import Parse from 'parse'

// Flatten an action
const action = (type, payload = {}) => ({ type, ...payload })

// Create lifecycle of an action
const createActionLifecycle = (base) => ({
  REQUEST:  `${base}_REQUEST`,
  RESOLVED: `${base}_RESOLVED`,
  REJECTED: `${base}_REJECTED`
})

// Each action is a request that resolves or rejects
const createLifecycleHandler = (type) => ({
  request:  (options)  => action(`${type}_REQUEST`,  { options }),
  resolved: (response) => action(`${type}_RESOLVED`, { response }),
  rejected: (error)    => action(`${type}_REJECTED`, { error }),
})

// Actions
export const ADD_FORMULA    = createActionLifecycle('ADD_FORMULA')
export const GET_FORMULA    = createActionLifecycle('GET_FORMULA')
export const EDIT_FORMULA   = createActionLifecycle('EDIT_FORMULA')
export const DELETE_FORMULA = createActionLifecycle('DELETE_FORMULA')

// Action lifecycle handlers
export const addFormulaHandler    = createLifecycleHandler('ADD_FORMULA')
export const getFormulaHandler    = createLifecycleHandler('GET_FORMULA')
export const editFormulaHandler   = createLifecycleHandler('EDIT_FORMULA')
export const deleteFormulaHandler = createLifecycleHandler('DELETE_FORMULA')

// Action dispatchers
export const addFormula    = (formula) => ({ type: ADD_FORMULA,  formula })
export const getFormula    = (query)   => ({ type: GET_FORMULA,    query })
export const editFormula   = (formula) => ({ type: EDIT_FORMULA, formula })
export const deleteFormula = (query)   => ({ type: DELETE_FORMULA, query })
