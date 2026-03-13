import React from 'react';
import Products from '../features/products';
import Cart from '../features/Cart';
function Herosection() {
    return <div className="herosection" >
     <div className='productsection'>
        <h2 style={{backgroundColor: 'rgb(53, 84, 112)', color: 'white', textAlign: 'center',margin:'0px'}}>Recipes</h2>
        <Products/></div>
        <div className='Cartsection'>
        <h2 style={{backgroundColor: 'rgb(53, 84, 112)', color: 'white', textAlign: 'center',margin:'0px'}}>Cart</h2>
        <Cart/>
        </div>
        
        
    </div>
}
export default Herosection;