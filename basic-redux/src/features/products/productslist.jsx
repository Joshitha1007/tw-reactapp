import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from "./productslice"
import { v4 as uuidv4 } from 'uuid';
import { addToCart } from "./cart/cartSlice"


function ProductList(){

    const dispatch=useDispatch()
  ;
    const products=useSelector((state)=>
       state.products.products)
  
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(res=>res.json())
        .then(data=>{
           
            dispatch(setProducts(data.products))})
    },[])

return(
 <div className="products-container">
      <h2>Products</h2>
      <div style={{ display: 'grid',gridTemplateColumns: 'repeat(4, minmax(150px, 1fr))', gap: '20px' }}>
        {products.map(product => (
          <div key={product.title} style={{ border: '1px solid gray', padding: '10px' }}>
            <img src={product.thumbnail} alt={product.title} width={100} />
            <h3>{product.title}</h3>
            <p>₹{Math.round(product.price)}</p>
            <button onClick={() => dispatch(addToCart({"id":uuidv4(),...product,"quantity":1}))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
)
}
export default ProductList;