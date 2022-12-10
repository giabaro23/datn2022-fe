import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/Banner";
import Topic from "../../components/topic/Topic";
import JobListItem from "../../components/joblist-item/JobListItem";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./JobList.scss";
import { TOPIC } from "../../common/constants";
const JobList = () => {
  const job = [
    {
      name: "Tạo website clone các tính năng của trang web khác",
      status: "Mới",
      standing: "Nổi bật",
      rating: "",
      employer: "Gia Bảo",
      range: "Toàn quốc",
      topic: "Việc lập trình khác",
      salary: "5.000.000 đ - 15.000.000 đ",
      due: "29 ngày 18 giờ",
      des: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quasi eos qui repellat culpa dicta voluptatibus, repudiandae
      totam soluta, omnis eum enim dolor deleniti, hic laboriosam
      maxime cum ut. Modi, est?`,
      skill: ["Xây dựng hệ thống Crawler dữ liệu", "javascript"],
    },
    {
      name: "Tạo website clone các tính năng của trang web khác",
      status: "Mới",
      standing: "Nổi bật",
      rating: "",
      employer: "Gia Bảo",
      range: "Toàn quốc",
      topic: "Việc lập trình khác",
      salary: "5.000.000 đ - 15.000.000 đ",
      due: "29 ngày 18 giờ",
      des: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quasi eos qui repellat culpa dicta voluptatibus, repudiandae
      totam soluta, omnis eum enim dolor deleniti, hic laboriosam
      maxime cum ut. Modi, est?`,
      skill: ["Xây dựng hệ thống Crawler dữ liệu", "javascript"],
    },
    {
      name: "Tạo website clone các tính năng của trang web khác",
      status: "Mới",
      standing: "Nổi bật",
      rating: "",
      employer: "Gia Bảo",
      range: "Toàn quốc",
      topic: "Việc lập trình khác",
      salary: "5.000.000 đ - 15.000.000 đ",
      due: "29 ngày 18 giờ",
      des: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quasi eos qui repellat culpa dicta voluptatibus, repudiandae
      totam soluta, omnis eum enim dolor deleniti, hic laboriosam
      maxime cum ut. Modi, est?`,
      skill: ["Xây dựng hệ thống Crawler dữ liệu", "javascript"],
    },
    {
      name: "Tạo website clone các tính năng của trang web khác",
      status: "Mới",
      standing: "Nổi bật",
      rating: "",
      employer: "Gia Bảo",
      range: "Toàn quốc",
      topic: "Việc lập trình khác",
      salary: "5.000.000 đ - 15.000.000 đ",
      due: "29 ngày 18 giờ",
      des: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quasi eos qui repellat culpa dicta voluptatibus, repudiandae
      totam soluta, omnis eum enim dolor deleniti, hic laboriosam
      maxime cum ut. Modi, est?`,
      skill: ["Xây dựng hệ thống Crawler dữ liệu", "javascript"],
    },
    {
      name: "Tạo website clone các tính năng của trang web khác",
      status: "Mới",
      standing: "Nổi bật",
      rating: "",
      employer: "Gia Bảo",
      range: "Toàn quốc",
      topic: "Việc lập trình khác",
      salary: "5.000.000 đ - 15.000.000 đ",
      due: "29 ngày 18 giờ",
      des: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quasi eos qui repellat culpa dicta voluptatibus, repudiandae
      totam soluta, omnis eum enim dolor deleniti, hic laboriosam
      maxime cum ut. Modi, est?`,
      skill: ["Xây dựng hệ thống Crawler dữ liệu", "javascript"],
    },
    {
      name: "Tạo website clone các tính năng của trang web khác",
      status: "Mới",
      standing: "Nổi bật",
      rating: "",
      employer: "Gia Bảo",
      range: "Toàn quốc",
      topic: "Việc lập trình khác",
      salary: "5.000.000 đ - 15.000.000 đ",
      due: "29 ngày 18 giờ",
      des: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quasi eos qui repellat culpa dicta voluptatibus, repudiandae
      totam soluta, omnis eum enim dolor deleniti, hic laboriosam
      maxime cum ut. Modi, est?`,
      skill: ["Xây dựng hệ thống Crawler dữ liệu", "javascript"],
    },
  ];
  return (
    <>
      <Header />
      <div className="joblist">
        <div className="joblist__banner">
          <h1 className="joblist__banner--title">
            Việc làm freelancer - Làm online, nhận tiền nhanh chóng
          </h1>
          <p className="joblist__banner--des">
            Hơn 52062 dự án đã đăng và thuê được freelancer thành công.
          </p>
          <div className="joblist__banner--btn">
            <Button>Muốn tìm việc</Button>
            <Button>Muốn tìm người</Button>
          </div>
        </div>
        <div className="joblist__main">
          <div className="joblist__topic">
            <Topic topic={TOPIC} />
          </div>
          <div className="joblist__wrapper">
            <div className="joblist__head">
              <div className="joblist__head--tab">
                <Link to="/joblist" className="joblist__head--link head__btn1">
                  Tất cả công việc
                </Link>
                <Link to="/joblist" className="joblist__head--link head__btn2">
                  Việc bán thời gian
                </Link>
                <Link to="/joblist" className="joblist__head--link head__btn3">
                  Việc toàn thời gian
                </Link>
              </div>
              <div className="joblist__head--search">
                <SearchOutlinedIcon className="joblist__head--icon"></SearchOutlinedIcon>
                <input
                  type="text"
                  placeholder="Tìm việc freelancer"
                  className="joblist__head--input pl-0"
                ></input>
                <button className="joblist__head--btn">Tìm kiếm</button>
              </div>
            </div>
            <div className="joblist__content">
              {job.map((job) => {
                return (
                  <JobListItem
                    status={job.status}
                    standing={job.standing}
                    employer={job.employer}
                    range={job.range}
                    topic={job.topic}
                    salary={job.salary}
                    due={job.due}
                    des={job.des}
                    skill={job.skill}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default JobList;
