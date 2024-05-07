
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Admin from './pages/Admin';
import NoPages from './pages/NoPages';
import AddProducts from './pages/AddProducts';
import DeleteProducts from './pages/DeleteProducts';
import UptadeProduct from './pages/UptadeProduct';
import { HelmetProvider } from 'react-helmet-async';
import MainProvider from './context/MainProvider';

function App() {


  return (
    <>  <MainProvider>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/AddProduct" element={<AddProducts />} />
            <Route path="/DeleteProduct" element={<DeleteProducts />} />
            <Route path="/UptadeProduct/:id" element={<UptadeProduct />} />
            <Route path="*" element={<NoPages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider></MainProvider>
    </>
  )
}

export default App
