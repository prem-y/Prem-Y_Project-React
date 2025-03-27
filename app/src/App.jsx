import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Cart from './components/Cart'
import "./styles/App.css"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ResultPage from './components/ResultPage'
import ErrorPage from './components/ErrorPage'
import ProductDetail from './components/ProductDetail'
import CheckoutPage from './components/CheckoutPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/result' element={<ResultPage/>}/>
          <Route path='/details/:id' element={<ProductDetail/>}/>
          <Route path='/checkout' element={<CheckoutPage/>}/>
          <Route path='/*' element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      

    </>
  )
}

export default App
