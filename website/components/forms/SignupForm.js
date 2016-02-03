import { reduxForm } from 'redux-form'

const fields = ['username', 'password', 'email']

Flint.decorateView('SignupForm', (form) =>
  reduxForm({ form: 'Login', fields })(form)
)

view SignupForm {
  const { fields: { username, password, email }, handleSubmit } = this.props
  <form>
    <div>
      <label>Username</label>
      <div>
        <input ref="name" type="text" placeholder="John" {...username} />
      </div>
    </div>
    <div>
      <label>Password</label>
      <div>
        <input type="password" placeholder="Super Secret" {...password} />
      </div>
    </div>
    <div>
      <label>Email</label>
      <div>
        <input type="text" placeholder="google@gmail.com" {...email} />
      </div>
    </div>
    <button onClick={handleSubmit}>Submit</button>
  </form>
}
