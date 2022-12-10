import React from 'react';
import Button from "react-bootstrap/Button";

import './Banner.scss'

const Banner = () => {
    return (
        <div className="banner">
        <img
          src="https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          alt=""
        />
        <div className="banner__inner">
          <h1>Đảm bảo hoàn thành dự án với freelancer hàng đầu</h1>
          <Button className="banner__btn">ĐĂNG KÝ NGAY</Button>
        </div>
      </div>
    );
};

export default Banner;