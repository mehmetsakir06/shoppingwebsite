import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import SearchProduct from './Components/SearchProduct';
import Category from './Components/Category';
import ProductDetail from './Components/ProductDetail';
import Cart from './Components/Cart';



function App() {

  return (

    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<SearchProduct />} />
        <Route path="category" element={<Category />} />
        <Route path="/details/:productId" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>


    </Router>
  )
}

export default App;
