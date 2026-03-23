import { useEffect,useState } from "react"
import { useSelector } from "react-redux"
import { removeFromCart, clearCart,additem,removeitem } from "./cartSlice"
import { useDispatch } from "react-redux"
import CheckoutModal from "./checkout"

function Cartitems(){
    const dispatch = useDispatch();
    var cartitems=useSelector(state=>state.cart.cartitems)
    var totalPrice=useSelector(state=>state.cart.totalprice)

  const [showCheckout, setShowCheckout] = useState(false);
    return (
         <div className="cart-container">
          <h1 className="title">Cart</h1>
                {cartitems.length === 0 ? (
        <p className="empty">Cart is empty</p>
      ) : (
        <>
          {cartitems.map(item => (
            <div className="cart-item" key={item.title}>
              <div style={{width:"70%"}}>
                <h4>{item.title}</h4>
                <p>₹{Math.round(item.price)}</p>
              </div>
              <button onClick={()=>{dispatch(additem(item))}}>+</button>
              <span>{item.quantity}</span>
              { item.quantity!=0?(
               <button  onClick={()=>{dispatch(removeitem(item))}}>-</button>)
               :(<button disabled  onClick={()=>{dispatch(removeitem(item))}}>-</button>)

                 } 
                             

              <button 
                className="remove-btn"
                onClick={() => dispatch(removeFromCart(item))}
              >
                ✕
              </button>
            </div>
          ))}
          <div className="cart-footer">
            <h3>Total: ₹{Math.round(totalPrice)}</h3>
            <button className="checkout-btn" onClick={() =>setShowCheckout(true)}
               >
              Checkout
            </button>
          </div>
        </>
      )}
       {showCheckout && (
        <CheckoutModal 
          cartitems={cartitems}
          totalPrice={totalPrice}
          onClose={() => setShowCheckout(false)}
          onConfirm={() => {
            dispatch(clearCart());
            setShowCheckout(false);
          }}
        />
      )}
    </div>
    )}


  
export default Cartitems;
    
   
