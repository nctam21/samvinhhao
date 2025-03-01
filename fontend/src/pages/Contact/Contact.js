import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>LIÊN HỆ</h1>
      </div>

      <div className="contact-content">
        <div className="contact-form">
          <h2>XIN MỜI ĐỂ LẠI THÔNG TIN, CHÚNG TÔI SẴN SÀNG PHỤC VỤ BẠN.</h2>
          <form>
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="Họ và tên" />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Số điện thoại" />
              </div>
            </div>
            <div className="form-group">
              <textarea placeholder="Nội dung" rows="6"></textarea>
            </div>
            <button type="submit" className="submit-btn">GỬI</button>
          </form>
        </div>

        <div className="contact-info">
          <div className="info-section">
            <h3>CÔNG TY CỔ PHẦN NAM MIỀN TRUNG</h3>
            <ul>
              <li>
                <i className="icon-location"></i>
                Vĩnh Hảo Farm, giáp xã Bình Thạnh TP Hồ Chí Minh
              </li>
              <li>
                <i className="icon-phone"></i>
                Hotline: 0908 68 68 68
              </li>
              <li>
                <i className="icon-zalo"></i>
                Zalo: 0908 68 68 68
              </li>
              <li>
                <i className="icon-email"></i>
                Email: abc@gmail.com
              </li>
            </ul>
          </div>

          <div className="map-section">
            <iframe 
              src="https://www.google.com/maps?q=10.767328911707946,106.69508651994317&output=embed"
              width="100%" 
              height="300" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 