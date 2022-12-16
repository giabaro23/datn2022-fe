import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container container">
        <div className="footer__content">
          <div className="footer__left">
            <h3 className="footer__left--logo">Free Job</h3>
            <p className="footer__left--des">
              
            </p>
            <p className="footer__left--contact">gmail: freejob@gmail.com</p>
          </div>
          <div className="footer__main">
            <div className="footer__company">
              <h5>Website</h5>
              <p>Về chúng tôi</p>
              <p>Hỗ trợ</p>
              
            </div>
            <div className="footer__resource">
              <h5>Tài nguyên</h5>
              <p>Bài viết</p>
              <p>Thành tựu</p>
           
            </div>
          </div>
          <div className="footer__right">
            <h5>Liên hệ</h5>
            <p>114 Cồn Dầu 19, Cẩm Lệ, Đà Nẵng</p>
            <p>0977542603</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
