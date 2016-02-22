view HomePage {
  on.mount(() => {
    view.lock = new Auth0Lock('0cUJF1X5QmrXTsVKdL9CqorbW4SnjbZd', 'aria.auth0.com')
  })

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

  $ = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }

  $input = {
    width: '30%',
    marginTop: 100,
    textAlign: 'center'
  }

  $heading = {
    fontSize: 24,
    fontWeight: 300
  }

  $Hexagon = {
    width: 200
  }
}
