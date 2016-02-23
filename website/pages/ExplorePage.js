import classNames from 'classnames'

view ExplorePage {
  prop formulas : Object
  prop result : Array
  prop actions : Object

  let activeTab = 'Popular'
  const tabs = ['Popular', 'New', 'Featured']

  // Request the formulas from the server
  on.mount(actions.getFormula)

  // Initialize the Auth0 lock
  view.lock = new Auth0Lock('0cUJF1X5QmrXTsVKdL9CqorbW4SnjbZd', 'aria.auth0.com')

  <explorePanel class="ui container">
    <h1>Explore</h1>
    <tabLists>
      <exploration class="ui horizontal list">
        <tab
          repeat={tabs}
          onClick={() => activeTab = _}
          className={classNames('item', { activeTab: activeTab === _ })}
        >
          {_}
        </tab>
      </exploration>
      <userControls class="ui horizontal right floated list">
        <tab onClick={() => view.lock.show()} class="item">Login</tab>
      </userControls>
    </tabLists>
    <input type="text" placeholder="Search" />
  </explorePanel>

  <formulagrid class="ui container">
    <Hexagon
      class="responsive"
      repeat={result}
      onClick={Motion.router.link('/formulas/' + _)}
    >
      <span>{formulas[_].name}</span>
    </Hexagon>
    <filler repeat={7}></filler>
  </formulagrid>

  $ = {
    width: '100%',
    height: '100%',
    paddingBottom: '75px',
    overflowY: 'scroll',
  }

  $tab = {
    cursor: 'pointer'
  }

  $tabLists = {
    marginBottom: 20
  }

  $activeTab = {
    borderBottom: '1.5px solid rgb(78, 122, 221)'
  }

  $formulagrid = {
    display: 'flex',
    flexWrap: 'wrap'
  }

  $Hexagon = {
    cursor: 'pointer'
  }

  $filler = {
    display: 'none'
  }
}
