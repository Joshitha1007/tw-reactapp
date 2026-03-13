import React from "react";
function Card(props) {
 return <div className="productcard">
    <h2>{props.product.title}</h2>
    <img src={props.product.thumbnail} alt=""/>
    <button  onclick={()=>{}} style={{backgroundColor:'rgb(53, 84, 112)',color:'white',border:'none',padding:'10px',borderRadius:'5px'}}>Add to Cart</button>
 </div>
}
export default Card;