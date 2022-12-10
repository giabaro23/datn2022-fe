import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/Banner";
import Topic from "../../components/topic/Topic";
import { LOCATION, TOPIC } from "../../common/constants";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import StarRateIcon from "@mui/icons-material/StarRate";

import "./CandidateList.scss";
import CandidateListItem from "../../components/candidatelist-item/CandidateListItem";
const CandidateList = () => {
  const candidates = [
    {
      avatar:'https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      user:'Gia Bao',
      job: 'Web Developer',
      location:'hue',
      workType: 'full-time'
    },
    {
      avatar:'https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      user:'Bin',
      job: 'Tester',
      location:'Da Nang',
      workType: 'part-time'
    },
    {
      avatar:'https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      user:'Bao Bao',
      job: 'Photographer',
      location:'Ha Noi',
      workType: 'full-time'
    },
    {
      avatar:'https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      user:'King of War',
      job: 'Designer',
      location:'TP HCM',
      workType: 'part-time'
    },
    {
      avatar:'https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      user:'Hihi',
      job: 'Chef',
      location:'DakNong',
      workType: 'full-time'
    },

  ];
  const workType = ["Bán thời gian", "Toàn thời gian"];
  return (
    <>
      <Header />
      <div className="candidatelist">
        <div className="candidatelist__banner">
          <h1 className="candidatelist__banner--title">
            Việc làm freelancer - Làm online, nhận tiền nhanh chóng
          </h1>
          <p className="candidatelist__banner--des">
            Hơn 52062 dự án đã đăng và thuê được freelancer thành công.
          </p>
          <div className="candidatelist__banner--btn">
            <Button>Muốn tìm việc</Button>
            <Button>Muốn tìm người</Button>
          </div>
        </div>
        <div className="candidatelist__main">
          <div className="candidatelist__topic">
            <Topic topic={TOPIC} />
          </div>
          <div className="candidatelist__wrapper">
            <div className="candidatelist__head">
              <h2>Tìm Kiếm ứng viên ngay</h2>
              <Form className="candidatelist__form search__form">
                <Form.Control
                  placeholder="Tìm kiếm ứng viên"
                  className="search__input candidate__input"
                />
                <Form.Select className="search__select select__location">
                  \<option hidden>Thành phố</option>
                  {LOCATION.map((location) => {
                    return <option value={location}>{location}</option>;
                  })}
                </Form.Select>
                <Form.Select className="search__select select__worktype">
                  <option hidden>Toàn thời gian</option>
                  {workType.map((item) => {
                    return <option value={item}>{item}</option>;
                  })}
                </Form.Select>

                <Button
                  type="submit"
                  className="search__button candidate__button"
                >
                  Tìm kiếm
                </Button>
              </Form>
            </div>
              <div className="candidateList__content">
                {candidates.map(item=>{
                  return <CandidateListItem avatar={item.avatar} user={item.user} job={item.job} location={item.location} workType={item.workType}/>
                })}
              </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default CandidateList;
