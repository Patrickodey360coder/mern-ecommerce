import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory'
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Product from './Pages/Product';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Shop/> }/>
          <Route path='/men' element={ <ShopCategory category='men'/> }/>
          <Route path='/women' element={ <Shop category='women'/> }/>
          <Route path='/kids' element={ <Shop category='kids'/> }/>
          <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>} />
          </Route>
          <Route path='/cart' element={ <Cart/> }/>
          <Route path='/login' element={ <LoginSignUp/> }/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
