import React from 'react';
import './Header.css';

const Header = ({ onCartClick }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" className="logo-img" />
      </div>
      <nav className="main-nav">
        <ul>
          <li><a href="#trang-chu">TRANG CHỦ</a></li>
          <li><a href="#san-pham">SẢN PHẨM</a></li>
          <li><a href="#gioi-thieu">GIỚI THIỆU</a></li>
          <li><a href="#lien-he">LIÊN HỆ</a></li>
        </ul>
      </nav>
      <div className="cart-icon" onClick={onCartClick}>
        <img src="/shopping-bag.png" alt="Giỏ hàng" />
      </div>
    </header>
  );
};

export default Header; 