import { reduxForm } from 'redux-form'

const fields = ['name', 'formula']

Flint._decorateView('NewFormulaForm', (form) =>
  reduxForm({ form: 'newFormula', fields })(form)
)

view NewFormulaForm {
  const { fields: { name, formula }, submitting, handleSubmit } = this.props
  <form>
    <div>
      <label>Name</label>
      <div>
        <input ref="name" type="text" placeholder="Name" {...name}/>
      </div>
    </div>
    <div>
      <label>Formula</label>
      <div>
        <input type="text" placeholder="Formula" {...formula}/>
      </div>
    </div>
    <button onClick={handleSubmit}>
    Submit
    </button>
  </form>
}