import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import Button from "react-bootstrap/Button";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonIcon from "@mui/icons-material/Person";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CurrentJob from "../../components/current-job/CurrentJob";
import Menu from "../../components/menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { getListUser } from "../../actions/auth/user";
import { getListJobByUserId, retrieveJobs } from "../../actions/job/job";
import { formatDate } from "../../common/constants";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import BlockIcon from "@mui/icons-material/Block";
import Modal from "react-bootstrap/Modal";
import userService from "../../services/auth/user.service";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import "./CompanyJob.scss";
import Swal from "sweetalert2";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
const CompanyJob = () => {
    const jobs = useSelector(state=>state.jobReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getListJobByUserId(46))
    },[dispatch])
    console.log(jobs)
  return (
    <>
      <Header />
      <div className="your-job">
        <div className="your-job__wrapper">
          <div className="your-job__title">
            <h1>Dự án của tôi</h1>
          </div>
          <div className="your-job__list">
            <div className="your-job__list--table">
              <div className="your-job__list--header">
                <p className="thead__job-id">Id</p>
                <p className="thead__job-name">Tên dự án</p>
                <p className="thead__job-status">Trạng thái</p>
                <p className="thead__job-action"></p>
              </div>
              <div className="your-job__list--item">
                <p className="your-job__list-id">1</p>
                <p className="your-job__list-name">Xây dựng hệ thống website</p>
                <p className="your-job__list-status">Đang chờ</p>
                <div className="your-job__list-action">
                  <button className="your-job__list-icon">
                    <RemoveRedEyeOutlinedIcon sx={{ fontSize: "20px" }} />
                  </button>
                  <button className="your-job__list-icon">
                    <DriveFileRenameOutlineOutlinedIcon sx={{ fontSize: "20px" }} />
                  </button>
                </div>
              </div>
              <div className="your-job__list--item">
                <p className="your-job__list-id">2</p>
                <p className="your-job__list-name">Thiết kế hệ thống mạng gia đình</p>
                <p className="your-job__list-status">Đang chờ</p>
                <div className="your-job__list-action">
                  <button className="your-job__list-icon">
                    <RemoveRedEyeOutlinedIcon sx={{ fontSize: "20px" }} />
                  </button>
                  <button className="your-job__list-icon">
                    <DriveFileRenameOutlineOutlinedIcon sx={{ fontSize: "20px" }} />
                  </button>
                </div>
              </div>
              <div className="your-job__list--item">
                <p className="your-job__list-id">3</p>
                <p className="your-job__list-name">Chỉnh sửa video review phim</p>
                <p className="your-job__list-status">Đang chờ</p>
                <div className="your-job__list-action">
                  <button className="your-job__list-icon">
                    <RemoveRedEyeOutlinedIcon sx={{ fontSize: "20px" }} />
                  </button>
                  <button className="your-job__list-icon">
                    <DriveFileRenameOutlineOutlinedIcon sx={{ fontSize: "20px" }} />
                  </button>
                </div>
              </div>
              <div className="your-job__list--item">
                <p className="your-job__list-id">4</p>
                <p className="your-job__list-name">Viết bài quảng cáo cho fanpage</p>
                <p className="your-job__list-status">Đang chờ</p>
                <div className="your-job__list-action">
                  <button className="your-job__list-icon">
                    <RemoveRedEyeOutlinedIcon sx={{ fontSize: "20px" }} />
                  </button>
                  <button className="your-job__list-icon">
                    <DriveFileRenameOutlineOutlinedIcon sx={{ fontSize: "20px" }} />
                  </button>
                </div>
              </div>
              <div className="your-job__list--item">
                <p className="your-job__list-id">5</p>
                <p className="your-job__list-name">Chỉnh sửa ảnh</p>
                <p className="your-job__list-status">Đang chờ</p>
                <div className="your-job__list-action">
                  <button className="your-job__list-icon">
                    <RemoveRedEyeOutlinedIcon sx={{ fontSize: "20px" }} />
                  </button>
                  <button className="your-job__list-icon">
                    <DriveFileRenameOutlineOutlinedIcon sx={{ fontSize: "20px" }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CompanyJob;
