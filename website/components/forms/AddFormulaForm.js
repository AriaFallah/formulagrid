import { reduxForm } from 'redux-form'

const fields = ['name', 'formula']

Motion.decorateView('AddFormulaForm', (form) =>
  reduxForm({ form: 'AddFormula', fields })(form)
)

view AddFormulaForm {
  const { fields: { name, formula }, handleSubmit } = this.props
  <form>
    <div>
      <label>Name</label>
      <div>
        <input ref="name" type="text" placeholder="Name" {...name} />
      </div>
    </div>
    <div>
      <label>Formula</label>
      <div>
        <input type="text" placeholder="Formula" {...formula} />
      </div>
    </div>
    <button onClick={handleSubmit}>Submit</button>
  </form>
}
