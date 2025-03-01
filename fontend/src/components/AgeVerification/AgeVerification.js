import React from 'react';
import './AgeVerification.css';

const AgeVerification = ({ onVerify }) => {
  const handleVerify = (isAdult) => {
    if (!isAdult) {
      alert('Bạn phải đủ 18 tuổi để truy cập trang web này!');
      return;
    }
    onVerify();
  };

  return (
    <div className="age-verification-overlay">
      <div className="age-verification-modal">
        <h2>Xác nhận độ tuổi</h2>
        <p>Bạn đã đủ 18 tuổi chưa?</p>
        <div className="age-verification-buttons">
          <button 
            className="btn-yes" 
            onClick={() => handleVerify(true)}
          >
            Đã đủ 18 tuổi
          </button>
          <button 
            className="btn-no" 
            onClick={() => handleVerify(false)}
          >
            Chưa đủ 18 tuổi
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification; 