import React,{useContext} from 'react';
import { usercontext } from './UserContext';
function Cart() {
    const ref=useContext(usercontext)
    return <div className="Cart" ref={ref}>
        
        </div>
}
export default Cart;