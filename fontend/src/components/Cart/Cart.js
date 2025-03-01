import React from 'react';
import './Cart.css';

const Cart = ({ onClose }) => {
  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Giỏ Hàng</h2>
        <button className="close-button" onClick={onClose}>&times;</button>
      </div>
      <div className="cart-items">
        {/* Có thể thêm danh sách sản phẩm sau */}
        <p className="empty-cart">Giỏ hàng trống</p>
      </div>
      <div className="cart-footer">
        <div className="cart-total">
          <span>Tổng cộng:</span>
          <span>0 ₫</span>
        </div>
        <button className="checkout-button">Thanh Toán</button>
      </div>
    </div>
  );
};

export default Cart; 