import React from 'react';

const CheckoutModal = ({ cartitems, totalPrice, onClose, onConfirm }) => {
  return (
    <div className="overlay">
      <div className="modal">

        <h2>Checkout</h2>

        <div className="modal-items">
          {cartitems.map(item => (
            <div key={item.id} className="modal-item">
              <div style={{width:"50%"}}><span>{item.title}</span></div>
              <div style={{width:"50%"}}>
              <span>₹{Math.round(item.price)}</span>*<span>{item.quantity}</span></div>
            </div>
          ))}
        </div>

        <h3>Total: ₹{Math.round(totalPrice)}</h3>

        <div className="modal-buttons">
          <button className="confirm-btn" onClick={onConfirm}>
            Confirm Order
          </button>

          <button className="close-btn" onClick={onClose}>
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
};

export default CheckoutModal;