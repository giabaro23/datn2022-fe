import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import StarRateIcon from "@mui/icons-material/StarRate";

import "./EmployerDetail.scss";
import ReviewItem from "../../components/review-item/ReviewItem";

const EmployerDetail = () => {
  return (
    <>
      <Header />
      <div className="employer">
        <div className="employer__banner">
          <h1 className="employer__banner--title">employer detail</h1>
        </div>
        <div className="employer__main">
          <div className="employer__left">
            <div className="employer__title">
              <h3>About Company</h3>
            </div>
            <div className="employer__des">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam libero dignissimos harum illo impedit assumenda, culpa
                fugiat eum quos voluptatibus! Ea eligendi maiores aliquid.
                Obcaecati ab quisquam ipsum, non veritatis consequuntur unde in
                doloribus, odio harum nam beatae eos magnam omnis sint adipisci
                nobis? Quas reiciendis provident error voluptatem aut!
              </p>
            </div>
            <div className="employer__title">
              <h3>Job Responsibilities</h3>
            </div>
            <div className="employer__responsibility">
              <ul>
                <li>
                  <CheckIcon sx={{ color: "#1657CB", fontSize: "20px" }} />{" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolores laboriosam possimus odio laborum tenetur accusantium
                  nulla doloribus reiciendis, ipsum eveniet.
                </li>
                <li>
                  <CheckIcon sx={{ color: "#1657CB", fontSize: "20px" }} />{" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  quisquam exercitationem maxime eius laborum aut.
                </li>
                <li>
                  <CheckIcon sx={{ color: "#1657CB", fontSize: "20px" }} />{" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum voluptatibus deserunt repudiandae, dicta mollitia
                  labore quis cupiditate nemo, alias tenetur nisi, nostrum
                  commodi! Neque modi quos in, nihil voluptate praesentium.
                </li>
                <li>
                  <CheckIcon sx={{ color: "#1657CB", fontSize: "20px" }} />{" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, minima necessitatibus!
                </li>
                <li>
                  <CheckIcon sx={{ color: "#1657CB", fontSize: "20px" }} />{" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veritatis, veniam?
                </li>
              </ul>
            </div>
            <div className="employer__photo">
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
              <Button type="submit" className="employer__comment--btn">
                Submit a review
              </Button>
            </Form>
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
                <h4 className="employer__info--name">Solic IT Solution</h4>
                <div className="employer__info--topic">
                  <p className="employer__topic--tag">IT software</p>
                  <p className="employer__topic--tag">Design photo</p>
                  <p className="employer__topic--tag">Marketing</p>
                </div>
              </div>
            </div>
            <ul className="employer__detail">
              <li className="employer__detail--item">
                <p className="employer__detail--label">
                  Primary Industry:
                </p>
                <p className="employer__detail--content">
                  Software
                </p>
              </li>
              <li className="employer__detail--item">
                <p className="employer__detail--label">
                  Found in:
                </p>
                <p className="employer__detail--content">
                  2015
                </p>
              </li>
              <li className="employer__detail--item">
                <p className="employer__detail--label">
                  Phone: 
                </p>
                <p className="employer__detail--content">
                +84 977 542 603
                </p>
              </li>
              <li className="employer__detail--item">
                <p className="employer__detail--label">
                  Email:
                </p>
                <p className="employer__detail--content">
                  giabao@gmail.com
                </p>
              </li>
              <li className="employer__detail--item">
                <p className="employer__detail--label">
                  Location: 
                </p>
                <p className="employer__detail--content">
                Ha Noi
                </p>
              </li>
              <li className="employer__detail--item">
                <p className="employer__detail--label">
                  Experience:
                </p>
                <p className="employer__detail--content">
                  5+ year
                </p>
              </li>
             
            </ul>
            <div className="employer__right--btn">
              <Button>Contact Me</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EmployerDetail;
