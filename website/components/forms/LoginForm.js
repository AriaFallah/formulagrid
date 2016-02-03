import { reduxForm } from 'redux-form'

const fields = ['username', 'password']

Flint.decorateView('LoginForm', (form) =>
  reduxForm({ form: 'Login', fields })(form)
)

view LoginForm {
  const { fields: { username, password }, handleSubmit } = this.props
  <form>
    <div>
      <label>Username</label>
      <div>
        <input ref="name" type="text" placeholder="Name" {...username} />
      </div>
    </div>
    <div>
      <label>Password</label>
      <div>
        <input type="text" placeholder="Formula" {...password} />
      </div>
    </div>
    <button onClick={handleSubmit}>Submit</button>
  </form>
}
