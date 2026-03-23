import React from 'react';
import ProductList from './features/products/productslist';
import Cartitems from './features/products/cart/cartitems';


function App() {
  return (
    <div style={{ display: 'flex', gap: '50px', padding: '20px' }}>
      <ProductList />
      <Cartitems />
   
    </div>
  );
}

export default App;