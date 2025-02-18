import React from 'react';
import './Feature.css';

const Feature = () => {
  return (
    <section className="feature-section">
      <div className="feature-content">
        <h2>LƯU GIỮ KÝ ỨC XƯA</h2>
        <p>
          Bởi vì, cả trăm năm qua, áo dài đã từ đời sống đi vào nghệ thuật điện ảnh,
          âm nhạc, hội họa... thậm chí trở thành một biểu tượng, một phần tâm
          hồn người Việt trên chính quê hương và ở khắp thế giới. Tuy thời đại bạn
          có thể nhìn thấy vẻ đẹp...
        </p>
        <button className="read-more">XEM THÊM</button>
      </div>
      <div className="feature-image">
        {/* Hình ảnh áo dài */}
      </div>
    </section>
  );
};

export default Feature; 