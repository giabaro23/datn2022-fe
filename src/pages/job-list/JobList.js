import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { formatDate, TOPIC } from "../../common/constants";
import { retrieveJobs } from "../../actions/job/job";
import ReactPaginate from "react-paginate";
const JobList = () => {
  
  const jobs = useSelector((state) => state.jobReducer);
  // console.log("jobList", jobList);
  // console.log("jobList", jobList);thừa khi dùng useState
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(retrieveJobs())
  },[dispatch]);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  const endOffset = itemOffset + itemsPerPage;

  // const currentItems = users.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(jobs?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % jobs?.length;
    setItemOffset(newOffset);
  };
console.log(jobs)

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
              {jobs?.length > 0 ? (
                jobs?.slice(itemOffset, endOffset).map((job) => {
                return (
                  <JobListItem
                  id={job.id}
                  userId={job.userId}
                  createDate={job.createDate}
                    name={job.name}
                    status={job.status}
                    standing={job.standing}
                    employer={job.employer}
                    location={job.location}
                    topic={job.topicName}
                    salaryMin={job.salaryMin}
                    salaryMax={job.salaryMax}
                    due={formatDate(job.dueDate)}
                    des={job.description}
                    skill={job.skills}
                    workType={job.workTypeName}
                  />
                );
              })): (
                <div className="no-data">
                  <img
                    src="https://financialadvisors.com/media/no-images/nodata-found.png"
                    alt=""
                  />
                </div>
              )}
               <div className="joblist--pagination">
                <p>
                  Hiển thị 5 trên {jobs?.length} dự án
                </p>
                <ReactPaginate
                  className="pagination"
                  breakLabel="..."
                  nextLabel=">"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel="<"
                  renderOnZeroPageCount={null}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobList;
