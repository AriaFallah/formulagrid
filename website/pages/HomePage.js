view HomePage {
  view.lock = new Auth0Lock('0cUJF1X5QmrXTsVKdL9CqorbW4SnjbZd', 'aria.auth0.com')

  <Hexagon>
    <heading>FormulaGrid</heading>
  </Hexagon>

  <input placeholder="Search" type="text" />

  <buttons>
    <button onClick={Motion.router.link('/explore')} class="ui button basic green">
      Explore
    </button>
    <button onClick={() => view.lock.show()} class="ui button basic blue">
      Login
    </button>
  </buttons>

  <credit>
    <h4>Authentication Powered By:</h4>
    <a href="https://auth0.com/" target="_blank" alt="Single Sign On & Token Based Authentication - Auth0">
      <img width="150" height="50" alt="JWT Auth for open source projects" src="//cdn.auth0.com/oss/badges/a0-badge-light.png"/>
    </a>
  </credit>

  $ = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }

  $Hexagon = {
    width: 200
  }

  $heading = {
    fontSize: 24,
    fontWeight: 300
  }

  $input = {
    width: '30%',
    marginTop: 100,
    textAlign: 'center'
  }

  $a = {
    width: 150,
    margin: 'auto'
  }

  $credit = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 100,
    justifyContent: 'center'
  }
}
