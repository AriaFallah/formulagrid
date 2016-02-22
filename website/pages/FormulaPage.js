view FormulaPage {
  prop formulas : Object
  prop actions : Object

  const { id } = Motion.router.params
  if (!formulas[id]) actions.getFormula({ equalTo: [{ key: 'objectId', value: id }] })

  <formula if={formulas[id]}>
    <h1>{formulas[id].get('name')}</h1>
    <h1>{formulas[id].get('formula')}</h1>
  </formula>

  <h1 if={formulas[id] === null}>Not Found!</h1>

  $ = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  $formula = {
    textAlign: 'center',
    display: 'inline-block'
  }
}
