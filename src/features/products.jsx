import React from 'react';
import Card from './card'
function Products() {
var [products,setProducts]=React.useState([]);
React.useEffect(()=>{
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => setProducts(data.products));
}, []);
return <div className="products">
    {products.map(product => <Card product={product}/>)}
    </div>
    }
export default Products;