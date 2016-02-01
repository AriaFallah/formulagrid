import Modal from 'react-modal'

view SideNav {
  prop actions : Object

  let showSignUp = false
  let showAddFormula = false

  on.mount(() => {
    view.lock = new Auth0Lock('0cUJF1X5QmrXTsVKdL9CqorbW4SnjbZd', 'aria.auth0.com')
  })

  function closeAndSubmit(fn, variable, data) {
    actions[fn](data)
    variable = false
  }

  const handleAddFormula = closeAndSubmit.bind(null, 'addFormula', showAddFormula)

  <header onClick={Flint.router.link('/')}>
    <img class="overlayLogo" src="http://i.imgur.com/CNO4xjs.png"/>
    <img class="backgroundLogo" src="http://i.imgur.com/uAndrvf.png"/>
  </header>

  <nav>
    <div onClick={() => showAddFormula = true}>
      <i class="fa fa-plus"></i>
      <span>new</span>
    </div>
    <div onClick={() => view.lock.show()} class="login">
      <i class="fa fa-sign-in"></i>
      <span>login</span>
    </div>
  </nav>

  <Modal
    isOpen={showAddFormula}
    onRequestClose={() => showAddFormula = false}
    closeTimeoutMS={200}
    style={modalStyle}
  >
    <AddFormulaForm onSubmit={handleAddFormula} />
  </Modal>

  const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }

  $ = {
    backgroundColor: window.color.sidenav,
    height: '100%',
    left: 0,
    maxWidth: 150,
    minWidth: 150,
    top: 0,
  }

  $div = {
    cursor: 'pointer',
    marginTop: 25
  }

  $header = {
    height: 128,
    position: 'relative',
    cursor: 'pointer',
  }

  $img = {
    bottom: 0,
    left: 0,
    margin: 'auto',
    position: 'absolute',
    right: 0,
    top: 0,
  }

  $overlayLogo = {
    width: 100,
    zIndex: 1,
  }

  $nav = {
    marginTop: 20,
    textAlign: 'center',
  }

  $fa = {
    color: 'rgb(255, 255, 255)',
    display: 'block',
    fontSize: '2em',
  }

  $span = {
    color: 'rgb(255, 255, 255)',
    display: 'block',
    textTransform: 'uppercase',
  }
}
