import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import ProductView from './pages/ProductView';

function App() {
  return (
    <Provider store={store}>
      <ProductView />
    </Provider>
  )
}

export default App
