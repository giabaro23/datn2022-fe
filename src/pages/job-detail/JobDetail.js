import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import StarRateIcon from "@mui/icons-material/StarRate";
import RemoveIcon from "@mui/icons-material/Remove";

import "./JobDetail.scss";
import ReviewItem from "../../components/review-item/ReviewItem";

const JobDetail = () => {
  return (
    <>
      <Header />
      <div className="job-detail">
        <div className="job-detail__banner">
          <h1 className="job-detail__banner--title">Job detail</h1>
        </div>
        <div className="job-detail__main">
          <div className="job-detail__left">
            <div className="job-detail__name">
              <h3>Graduate Programme – IT Software Test Analyst Engineer</h3>
            </div>
            <div className="job-detail__des">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam libero dignissimos harum illo impedit assumenda, culpa
                fugiat eum quos voluptatibus! Ea eligendi maiores aliquid.
                Obcaecati ab quisquam ipsum, non veritatis consequuntur unde in
                doloribus, odio harum nam beatae eos magnam omnis sint adipisci
                nobis? Quas reiciendis provident error voluptatem aut!
              </p>
            </div>
            <div className="job-detail__title">
              <h3>Job Responsibilities</h3>
            </div>
            <div className="job-detail__responsibility">
              <ul>
                <li>
                  <RemoveIcon sx={{ color: "#1657CB", fontSize: "20px" }} />{" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolores laboriosam possimus odio laborum tenetur accusantium
                  nulla doloribus reiciendis, ipsum eveniet.
                </li>
                <li>
                  <RemoveIcon sx={{ color: "#1657CB", fontSize: "20px" }} />{" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  quisquam exercitationem maxime eius laborum aut.
                </li>
                <li>
                  <RemoveIcon sx={{ color: "#1657CB", fontSize: "20px" }} />{" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum voluptatibus deserunt repudiandae, dicta mollitia
                  labore quis cupiditate nemo, alias tenetur nisi, nostrum
                  commodi! Neque modi quos in, nihil voluptate praesentium.
                </li>
                <li>
                  <RemoveIcon sx={{ color: "#1657CB", fontSize: "20px" }} />{" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, minima necessitatibus!
                </li>
                <li>
                  <RemoveIcon sx={{ color: "#1657CB", fontSize: "20px" }} />{" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veritatis, veniam?
                </li>
              </ul>
            </div>

            <div className="job-detail__title">
              <h3>About company</h3>
            </div>
            <div className="job-detail__des">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam libero dignissimos harum illo impedit assumenda, culpa
                fugiat eum quos voluptatibus! Ea eligendi maiores aliquid.
                Obcaecati ab quisquam ipsum, non veritatis consequuntur unde in
                doloribus, odio harum nam beatae eos magnam omnis sint adipisci
                nobis? Quas reiciendis provident error voluptatem aut!
              </p>
            </div>
            <div className="job-detail__require">
                <p className="job-detail__require--label">
                    Required skills:
                </p>
                <div className="job-detail__require--tag">IT</div>
                <div className="job-detail__require--tag">Engineer</div>
                <div className="job-detail__require--tag">Software</div>
            </div>


          </div>
          <div className="job-detail__right">
            <div className="job-detail__info">
              <div className="job-detail__info--left">
                <img
                  src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  width={80}
                  height={80}
                />
              </div>
              <div className="job-detail__info--right">
                <h4 className="job-detail__info--name">Solic IT Solution</h4>
                <div className="job-detail__info--topic">
                  <p className="job-detail__topic--tag">IT software</p>
                  <p className="job-detail__topic--tag">Design photo</p>
                  <p className="job-detail__topic--tag">Marketing</p>
                </div>
              </div>
            </div>
            <ul className="job-detail__detail">
              <li className="job-detail__detail--item">
                <p className="job-detail__detail--label">Primary Industry:</p>
                <p className="job-detail__detail--content">Software</p>
              </li>
              <li className="job-detail__detail--item">
                <p className="job-detail__detail--label">Found in:</p>
                <p className="job-detail__detail--content">2015</p>
              </li>
              <li className="job-detail__detail--item">
                <p className="job-detail__detail--label">Phone:</p>
                <p className="job-detail__detail--content">+84 977 542 603</p>
              </li>
              <li className="job-detail__detail--item">
                <p className="job-detail__detail--label">Email:</p>
                <p className="job-detail__detail--content">giabao@gmail.com</p>
              </li>
              <li className="job-detail__detail--item">
                <p className="job-detail__detail--label">Location:</p>
                <p className="job-detail__detail--content">Ha Noi</p>
              </li>
              <li className="job-detail__detail--item">
                <p className="job-detail__detail--label">Experience:</p>
                <p className="job-detail__detail--content">5+ year</p>
              </li>
            </ul>
            <div className="job-detail__right--btn">
              <Button>Contact Me</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobDetail;
