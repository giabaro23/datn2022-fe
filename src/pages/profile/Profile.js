import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CheckIcon from "@mui/icons-material/Check";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { compareAsc, format } from "date-fns";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import StarRateIcon from "@mui/icons-material/StarRate";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { formatDate } from "../../common/constants";
import "./Profile.scss";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.authReducer);

  return (
    <div>
      <>
        <Header />
        <div className="profile">
          <div className="profile__banner">
            <h1 className="profile__banner--title">Thông tin cá nhân</h1>
          </div>
          <div className="profile__main">
            <div className="profile__left">
              <div className="profile__left--header">
                <div className="profile__left--avatar">
                  <div className="profile__left--photo">
                    <img
                      src={
                        currentUser?.avatar
                          ? currentUser?.avatar
                          : "https://t3.ftcdn.net/jpg/03/39/45/96/360_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg"
                      }
                      alt=""
                      height={170}
                      width={170}
                    />
                  </div>
                  <div className="profile__left--id">
                    <p>id: {currentUser?.id}</p>
                  </div>
                </div>
                <div className="profile__left--info">
                  <p className="profile__left--name">
                    {currentUser?.firstName + " " + currentUser?.lastName}
                  </p>
                  <p className="profile__left--location">
                    <LocationOnOutlinedIcon />
                    {currentUser?.address}
                  </p>
                </div>
                <div className="profile__left--btn">
                  <Link to={`/profile/edit/${currentUser?.id}`}>
                    <Button>Cập nhật thông tin</Button>
                  </Link>
                </div>
              </div>
              <div className="profile__left--content">
                <div className="profile__left--about">
                  <h3 className="profile__left--title">Giới thiệu</h3>
                  <p>
                    {/* Gia Bảo đã tạo tài khoản từ ngày{" "}
                    {formatDate(currentUser?.createDate)} */}
                    Tôi là một lập trình viên website đã có kinh nghiệm trên 1 năm với ReactJS, HTML, CSS,...
                  </p>
                </div>
                <div className="profile__left--resume">
                  <h3 className="profile__left--title">Hồ sơ năng lực</h3>
                  <p>Hiện tại chưa có hồ sơ năng lực nào</p>
                </div>
                <div className="profile__left--resume">
                  <h3 className="profile__left--title">Kinh nghiệm</h3>
                  <p>Đã có kinh nghiệm làm việc từ 2-5 năm kinh nghiệm</p>
                </div>
                <div className="profile__left--resume">
                  <h3 className="profile__left--title">Dịch vụ</h3>
                  <p>Có thể làm việc trên 40h/tuần</p>
                </div>
              </div>
              <div className="profile__left--transfer">
                <Link to='/joblist' className="transfer__wrapper">
                  <SearchOutlinedIcon sx={{fontSize:"40px",color:"#2ac36f"}}/>
                  <p>Tìm kiếm việc làm ngay</p>
                  <ArrowForwardIosOutlinedIcon sx={{color:"#2ac36f"}}/>
                </Link>
              </div>
            </div>
            <div className="profile__right">
              <div className="profile__right--contact">
                <div className="profile__info">
                  <h4 className="profile__info--name">Thông tin liên lạc</h4>
                </div>
                <ul className="profile__detail">
                  <li className="profile__detail--item">
                    <p className="profile__detail--label">Số điện thoại:</p>
                    <p className="profile__detail--content">
                      {currentUser?.phoneNumber}
                    </p>
                  </li>
                  <li className="profile__detail--item">
                    <p className="profile__detail--label">Email:</p>
                    <p className="profile__detail--content">{currentUser?.email}</p>
                  </li>
                  <li className="profile__detail--item">
                    <p className="profile__detail--label">Chuyên môn:</p>
                    <p className="profile__detail--content">Ứng dụng di động</p>
                  </li>
                  <li className="profile__detail--item">
                    <p className="profile__detail--label">Website:</p>
                    <p className="profile__detail--content">Chưa cập nhật</p>
                  </li>
                </ul>
              </div>
              <div className="profile__right--history">
                <h3>Tóm lược</h3>
                <p>Chưa có đánh giá vì chưa trúng thầu dự án nào</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
};

export default Profile;
