import data from './data'
import normalize from './normalize'

const callApi = (method, options = {}) => {
  const call = {
    GET() {
      return normalize(data, 'formulas')
    },
    POST() {

    }
  }
  return call[method]()
}

// Formula CRUD
const addFormula    = (formula) => callApi('POST', formula)
const getFormula    = (query)   => callApi('GET',  query)
const editFormula   = (formula) => callApi('', )
const deleteFormula = (query)   => callApi('', )

export default {
  addFormula,
  getFormula,
  editFormula,
  deleteFormula,
}
