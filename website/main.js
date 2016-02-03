import { Provider } from 'react-redux'
import { store } from './store'

view Main {
  <Provider store={store}>
    <App />
  </Provider>
}
