import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ onCartClick }) => {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="contact-info">
          <span>Hotline: 0908 68 68 68</span>
          <span>Email: abc@gmail.com</span>
        </div>
      </div>
      <div className="main-header">
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="logo-img" />
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li><Link to="/">TRANG CHỦ</Link></li>
            <li><Link to="/san-pham">SẢN PHẨM</Link></li>
            <li><Link to="/gioi-thieu">GIỚI THIỆU</Link></li>
            <li><Link to="/lien-he">LIÊN HỆ</Link></li>
          </ul>
        </nav>
        <div className="cart-icon" onClick={onCartClick}>
          <img src="/shopping-bag.png" alt="Giỏ hàng" />
        </div>
      </div>
    </header>
  );
};

export default Header; 