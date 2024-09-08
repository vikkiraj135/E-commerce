import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from '../src/Pages/shop';        // Ensure these imports exist
import ShopCategory from '../src/Pages/ShopCategory';
import Product from '../src/Pages/Product';
import Cart from '../src/Pages/Cart';        // Ensure these imports exist
import LoginSignup from '../src/Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category="men" />} />
          <Route path='/womens' element={<ShopCategory category="women" />} />
          <Route path='/kids' element={<ShopCategory category="kid" />} />
          <Route path='/product/:ProductId' element={<Product />} />  {/* Dynamic route with prefix */}
          <Route path='/cart' element={<Cart />} />  {/* Lowercase 'cart' */}
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;