view SideNav {
  <header>
    <img class="overlayLogo" src="http://i.imgur.com/CNO4xjs.png"/>
    <img class="backgroundLogo" src="http://i.imgur.com/uAndrvf.png"/>
  </header>
  <nav>
    <a>
      <div class="fa fa-plus"></div>
      <span>new</span>
    </a>
    <a href="http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference" target="_blank">
      <div class="fa fa-info"></div>
      <span>help</span>
    </a>
  </nav>

  $ = {
    backgroundColor: window.color.sidenav,
    height: '100%',
    left: 0,
    maxWidth: '150px',
    minWidth: '150px',
    top: 0,
  }

  $header = {
    height: '128px',
    position: 'relative',
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
    width: '100px',
    zIndex: 1,
  }

  $nav = {
    marginTop: '20px',
    textAlign: 'center',
  }

  $fa = {
    color: 'rgb(255, 255, 255)',
    display: 'block',
    fontSize: '2em',
  }

  $a = {
    display: 'block',
    marginTop: '20px',
  }

  $span = {
    color: 'rgb(255, 255, 255)',
    display: 'block',
    textTransform: 'uppercase',
  }
}
