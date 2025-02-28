import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Rượu sâm vĩnh hảo",
      description: "Rượu Sâm Vĩnh Hảo được chưng cất từ sâm tươi tự nhiên, kết hợp với phương pháp ngâm ủ truyền thống và công nghệ hiện đại, tạo nên hương vị đặc trưng và giữ trọn dưỡng chất từ thiên nhiên.",
      price: "2,500,000đ/ 1 cặp",
      image: "/product-1.jpg"
    },
    {
      id: 2,
      name: "Sâm tươi vĩnh hảo",
      description: "Sâm Vĩnh Hảo được trồng tại vùng đất Vĩnh Hảo, Bình Thuận với đặc tính sống hoang dã. Mỗi củ sâm đều được tuyển chọn kỹ lưỡng, đảm bảo chất lượng cao nhất.",
      price: "3,000,000đ/ 1kg",
      image: "/product-2.png"
    }
  ];

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>SẢN PHẨM</h1>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h2>{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <div className="product-price">
                <span>{product.price}</span>
                <button className="add-to-cart">
                  <img src="/shopping-bag.png" alt="Thêm vào giỏ hàng" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products; 