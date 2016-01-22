import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

const fields = ['name', 'formula'];

class NewFormulaForm extends Component {
  render() {
    const { fields: { name, formula }, submitting, handleSubmit } = this.props;
    return (
      <form>
        <div>
          <label>Name</label>
          <div>
            <input type="text" placeholder="Name" {...name}/>
          </div>
        </div>
        <div>
          <label>Formula</label>
          <div>
            <input type="text" placeholder="Formula" {...formula}/>
          </div>
        </div>
        <button disabled={submitting} onClick={handleSubmit}>
          Submit
        </button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'newFormula',
  fields
})(NewFormulaForm);
