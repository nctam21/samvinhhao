import React from 'react';
import { Link } from 'react-router-dom';
import './Feature.css';

const Feature = () => {
  return (
    <section className="feature-section">
      <div className="feature-content">
        <h2>SẢN PHẨM - SÂM VĨNH HẢO</h2>
        <p>
          Sâm Vĩnh Hảo có nguồn gốc từ Côn Đảo với đặc tính sống hoang dã, 
          thường mọc trên cao được ông Nguyễn Hoàng Anh mang về đất liền vùng 
          Vĩnh Hảo, Bình Thuận vào năm 2020.
        </p><Link className="read-more" to="/gioi-thieu">XEM THÊM</Link>
      </div>
      <div className="feature-image">
        <img src="/item-1.png" alt="Sâm Vĩnh Hảo" />
      </div>
    </section>
  );
};

export default Feature; 