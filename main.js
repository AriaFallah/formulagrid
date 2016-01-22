import { store } from './store/store';
import { addFormula } from './actions/formula';
const { getState, subscribe, dispatch } = store;

view Main {
  let formulas = getState().formulas;
  subscribe(() => formulas = getState().formulas);
  <SideNav/>
  <main>
    <SearchBar/>
    <Content formulas={formulas} />
  </main>

  $ = {
    display: 'flex',
    height: '100%',
    width: '100%',
    position: 'fixed',
  }

  $main = {
    width: '100%',
    height: '100%',
  }

  $Content = {
    overflowY: 'scroll',
    height: '100%',
    paddingBottom: '75px',
  }

  $h1 = {
    color: 'cadetblue'
  }
}
