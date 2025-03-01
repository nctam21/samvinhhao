import React from 'react';
import './Brand.css';

const Brand = () => {
  return (
    <section className="brand-section">
      <div className="brand-content">
        <h2>SẢN PHẨM</h2>
        <div className="product-list">
          <div className="product-item">
            <img src="/product-social.png" alt="Product 1" />
            <div className="product-item-content">
              <ul>
              <li>Rượu sâm Sâm Vĩnh Hảo.</li>
              <li>Được làm từ nhân sâm chất lượng cao, lên men tự nhiên, hương vị đậm đà, thơm ngon, bổ dưỡng.</li>
              <li>
              Giúp bồi bổ sức khỏe, tăng cường sinh lực, phù hợp làm quà biếu, sử dụng trong các dịp lễ Tết, gặp gỡ bạn bè.</li>
              <li>
              Sâm Vĩnh Hảo được trồng và chế biến theo tiêu chuẩn phát triển nông nghiệp bền vững, đồng thời kế thừa và phát triển các phương pháp chế biến cổ truyền.</li>
            </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Brand; 