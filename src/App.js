import './App.css'
import {Routes, Route } from "react-router-dom";
import AdminDashboard from './components/Dashboard/AdminDashboard'
import Customer from './components/Customer/Customer'
import Product from './components/Products/Products'
import Sidebar from './components/Sidebar'
function App() {
  return (
    <div className="App">
      <Routes>
            
            <Route index path="/" element={<AdminDashboard/>} />
            <Route index path="/customer" element={<Customer/>} />
            <Route index path="/products" element={<Product/>} />

      </Routes>
    </div>
  );
}

export default App;
