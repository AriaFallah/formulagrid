view HomeView {
  prop formulas = [];

  <SearchBar />
  <Content formulas={formulas} />

  $ = {
    width: '100%',
    height: '100%',
  }
}
