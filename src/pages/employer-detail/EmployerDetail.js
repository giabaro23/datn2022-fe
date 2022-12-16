import React, { useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import StarRateIcon from "@mui/icons-material/StarRate";

import "./EmployerDetail.scss";
import ReviewItem from "../../components/review-item/ReviewItem";
import JobService from "../../services/job/job.service";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import userService from "../../services/auth/user.service";
import { formatDate } from "../../common/constants";
import Swal from "sweetalert2";

const EmployerDetail = () => {
  const params = useParams();
  const [currentJob, setCurrentJob] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const dispatch = useDispatch();
  const getJobById = (id) => {
    JobService.get(id)
      .then((res) => {
        setCurrentJob(res.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getJobById(params.id);
  }, [params.id]);

  const getUser = (id) => {
    userService
      .getUserById(id)
      .then((res) => {
        setCurrentUser(res.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (currentJob && currentJob?.userId) {
      getUser(currentJob?.userId);
    }
  }, [currentJob?.userId]);

  const handleApply = () =>{
    Swal.fire('Một yêu cầu ứng tuyển vào dự án đã được gửi đến nhà tuyển dụng')
  }

  return (
    <>
      <Header />
      <div className="employer">
        <div className="employer__banner">
          <h1 className="employer__banner--title">Thông tin công việc</h1>
        </div>
        <div className="employer__main">
          <div className="employer__left">
            <div className="employer__title">
              <h3>Mô tả công việc</h3>
            </div>
            <div className="employer__des">
              <p>{currentJob?.name}</p>
            </div>
            <div className="employer__title">
              <h3>Yêu cầu</h3>
            </div>
            <div className="employer__responsibility">
              <ul>
                <li>{currentJob?.description}</li>
              </ul>
            </div>
            <div className="employer__title">
              <h3>Thu nhập từ công việc</h3>
            </div>
            <div className="employer__responsibility">
              <ul>
                <li>Từ {currentJob?.salaryMin}đ đến {currentJob?.salaryMax}đ</li>
              </ul>
            </div>
            {/* <div className="employer__photo">
              <img
                src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
                width={500}
              />
            </div>
            <div className="employer__title">
              <h3>Reviews</h3>
            </div>
            <div className="employer__review">
              <ReviewItem />
              <ReviewItem />
              <ReviewItem />
              <ReviewItem />
              <ReviewItem />
            </div>
            <div className="employer__title">
              <h3>Add review</h3>
            </div>
            <Form className="employer__comment">
              <Form.Control
                className="employer__comment--input"
                as="textarea"
                rows={3}
              ></Form.Control>
              <div className="employer__comment--rate"></div>
           
            </Form> */}
            <Button type="submit" className="employer__comment--btn">
              Báo cáo công việc này
            </Button>
          </div>
          <div className="employer__right">
            <div className="employer__info">
              <div className="employer__info--left">
                <img
                  src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  width={80}
                  height={80}
                />
              </div>
              <div className="employer__info--right">
                <h4 className="employer__info--name">{currentUser?.firstName + ' ' + currentUser?.lastName}</h4>
                <div className="employer__info--topic">
                  <p className="employer__topic--tag">IT software</p>
                  <p className="employer__topic--tag">Design photo</p>
                  <p className="employer__topic--tag">Marketing</p>
                </div>
              </div>
            </div>
            <ul className="employer__detail">
              <li className="employer__detail--item">
                <p className="employer__detail--label">Công nghệ chính:</p>
                <p className="employer__detail--content">Photoshop</p>
              </li>
              <li className="employer__detail--item">
                <p className="employer__detail--label">Thành lập:</p>
                <p className="employer__detail--content">{formatDate(currentUser?.createDate)}</p>
              </li>
              <li className="employer__detail--item">
                <p className="employer__detail--label">Số điện thoại:</p>
                <p className="employer__detail--content">{currentUser?.phoneNumber}</p>
              </li>
              <li className="employer__detail--item">
                <p className="employer__detail--label">Email:</p>
                <p className="employer__detail--content">{currentUser?.email}</p>
              </li>
              <li className="employer__detail--item">
                <p className="employer__detail--label">Nơi làm việc:</p>
                <p className="employer__detail--content">{currentUser?.address}</p>
              </li>
              <li className="employer__detail--item">
                <p className="employer__detail--label">Kinh nghiệm:</p>
                <p className="employer__detail--content">Hơn 2 năm</p>
              </li>
            </ul>
            <div className="employer__right--btn">
              <Button onClick={handleApply}>Ứng tuyển</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EmployerDetail;
