import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>SÂM VĨNH HẢO</h3>
          <p>
            Sâm Vĩnh Hảo được trồng và chế biến theo tiêu chuẩn phát triển nông nghiệp bền vững, đồng thời kế thừa và phát triển các phương pháp chế biến cổ truyền.
          </p>
          <p>
            Địa chỉ: Xóm 2, Xã Vĩnh Hảo, Huyện Tuy Phong, Tỉnh Bình Thuận, Việt Nam
          </p>
        </div>

        <div className="footer-section">
          <h3>Chính sách</h3>
          <ul>
            <li><a href="#">Chính sách bảo mật</a></li>
            <li><a href="#">Chính sách đổi trả</a></li>
            <li><a href="#">Chính sách vận chuyển</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Liên hệ</h3>
          <ul>
            <li>CÔNG TY TNHH NÔNG NGHIỆP CÔNG NGHỆ
            CAO NAM MIỀN TRUNG</li>
            <li>Hotline: 0908686868</li>
            <li>Zalo: 0908686868</li>
            <li>Email: abc@gmail.com</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>ĐĂNG KÝ NHẬN THÔNG TIN</h3>
          <div className="newsletter">
            <input type="email" placeholder="Nhập email của bạn..." />
            <button>Đăng ký</button>
          </div>
        </div>
      </div>
      <a href="https://www.facebook.com/nctam.21" target="_blank" rel="noopener noreferrer">
      Product made by nctam
      </a>
    </footer>
  );
};

export default Footer; 