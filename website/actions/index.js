// Action intentions
// These define how to transform the payload of an action
export const API = Symbol('API')
export const PROMISE = Symbol('Promise')

// Action types
// These define different things the application can do

// Formula CRUD
export const ADD_FORMULA    = 'ADD_FORMULA'
export const GET_FORMULA    = 'GET_FORMULA'
export const EDIT_FORMULA   = 'EDIT_FORMULA'
export const DELETE_FORMULA = 'DELETE_FORMULA'

// Action dispatchers
// These pass the actions along a pipeline that determines application state
export const addFormula = (formula) => ({
  [API]: true,
  type: ADD_FORMULA,
  payload: {
    method: 'addFormula',
    options: formula
  }
})

export const getFormula = (query) => ({
  [API]: true,
  type: GET_FORMULA,
  payload: {
    method: 'getFormula',
    options: query
  }
})

export const editFormula = (formula) => ({
  [API]: true,
  type: EDIT_FORMULA,
  payload: {
    method: 'editFormula',
    options: formula
  }
})

export const deleteFormula = (query) => ({
  [API]: true,
  type: DELETE_FORMULA,
  payload: {
    method: 'deleteFormula',
    options: query
  }
})
