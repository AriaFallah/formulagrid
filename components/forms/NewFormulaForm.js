import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

const fields = ['name', 'formula'];

class NewFormulaForm extends Component {
  componentDidMount() {
    // Focus on the first input
    window.setTimeout(function() {
      this.refs.name.focus()
    }.bind(this), 0);
  }

  render() {
    const { fields: { name, formula }, submitting, handleSubmit } = this.props;
    return (
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
    )
  }
}

export default reduxForm({
  form: 'newFormula',
  fields
})(NewFormulaForm);
