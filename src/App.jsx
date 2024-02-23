import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import { store } from './redux-tk/store'
import Details from './pages/Details'
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <Provider store={store}>
      <ShoppingCart />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </Provider>
  )
}

export default App
