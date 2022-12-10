import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import StarRateIcon from "@mui/icons-material/StarRate";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import "./CandidateDetail.scss";
import ReviewItem from "../../components/review-item/ReviewItem";

const CandidateDetail = () => {
  return (
    <>
      <Header />
      <div className="candidate">
        <div className="candidate__banner">
          <h1 className="candidate__banner--title">Candidate detail</h1>
        </div>
        <div className="candidate__main">
          <div className="candidate__right">
            <div className="candidate__info">
              <div className="candidate__info--left">
                <img
                  src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  width={80}
                  height={80}
                />
              </div>
              <div className="candidate__info--right">
                <h4 className="candidate__info--name">Solic IT Solution</h4>
                <div className="candidate__info--topic">
                  <p className="candidate__topic--tag">IT specialist</p>
                </div>
              </div>
            </div>
            <ul className="candidate__detail">
              <li className="candidate__detail--item">
                <p className="candidate__detail--label">Primary Industry:</p>
                <p className="candidate__detail--content">Software</p>
              </li>
              <li className="candidate__detail--item">
                <p className="candidate__detail--label">Found in:</p>
                <p className="candidate__detail--content">2015</p>
              </li>
              <li className="candidate__detail--item">
                <p className="candidate__detail--label">Phone:</p>
                <p className="candidate__detail--content">+84 977 542 603</p>
              </li>
              <li className="candidate__detail--item">
                <p className="candidate__detail--label">Email:</p>
                <p className="candidate__detail--content">giabao@gmail.com</p>
              </li>
              <li className="candidate__detail--item">
                <p className="candidate__detail--label">Location:</p>
                <p className="candidate__detail--content">Ha Noi</p>
              </li>
              <li className="candidate__detail--item">
                <p className="candidate__detail--label">Experience:</p>
                <p className="candidate__detail--content">5+ year</p>
              </li>
            </ul>
            <div className="candidate__right--btn">
              <Button>Contact Me</Button>
            </div>
          </div>
          <div className="candidate__left">
            <div className="candidate__title">
              <h3>About Me</h3>
            </div>
            <div className="candidate__des">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam libero dignissimos harum illo impedit assumenda, culpa
                fugiat eum quos voluptatibus! Ea eligendi maiores aliquid.
                Obcaecati ab quisquam ipsum, non veritatis consequuntur unde in
                doloribus, odio harum nam beatae eos magnam omnis sint adipisci
                nobis? Quas reiciendis provident error voluptatem aut!
              </p>
            </div>
            <div className="candidate__title">
              <h3>Education</h3>
            </div>
            <div className="candidate__responsibility">
              <ul>
                <li>
                  <ArrowRightIcon sx={{ color: "#1657CB", fontSize: "20px" }} />{" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolores laboriosam possimus odio laborum tenetur accusantium
                  nulla doloribus reiciendis, ipsum eveniet.
                </li>
                <li>
                  <ArrowRightIcon sx={{ color: "#1657CB", fontSize: "20px" }} />{" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  quisquam exercitationem maxime eius laborum aut.
                </li>
                <li>
                  <ArrowRightIcon sx={{ color: "#1657CB", fontSize: "20px" }} />{" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum voluptatibus deserunt repudiandae, dicta mollitia
                  labore quis cupiditate nemo, alias tenetur nisi, nostrum
                  commodi! Neque modi quos in, nihil voluptate praesentium.
                </li>
                <li>
                  <ArrowRightIcon sx={{ color: "#1657CB", fontSize: "20px" }} />{" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, minima necessitatibus!
                </li>
                <li>
                  <ArrowRightIcon sx={{ color: "#1657CB", fontSize: "20px" }} />{" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veritatis, veniam?
                </li>
              </ul>
            </div>
            <div className="candidate__title">
              <h3>Experience</h3>
            </div>
            <div className="candidate__responsibility">
              <ul>
                <li>
                  <ArrowRightIcon sx={{ color: "#1657CB", fontSize: "20px" }} />{" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolores laboriosam possimus odio laborum tenetur accusantium
                  nulla doloribus reiciendis, ipsum eveniet.
                </li>
                <li>
                  <ArrowRightIcon sx={{ color: "#1657CB", fontSize: "20px" }} />{" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  quisquam exercitationem maxime eius laborum aut.
                </li>
                <li>
                  <ArrowRightIcon sx={{ color: "#1657CB", fontSize: "20px" }} />{" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum voluptatibus deserunt repudiandae, dicta mollitia
                  labore quis cupiditate nemo, alias tenetur nisi, nostrum
                  commodi! Neque modi quos in, nihil voluptate praesentium.
                </li>
                <li>
                  <ArrowRightIcon sx={{ color: "#1657CB", fontSize: "20px" }} />{" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, minima necessitatibus!
                </li>
                <li>
                  <ArrowRightIcon sx={{ color: "#1657CB", fontSize: "20px" }} />{" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veritatis, veniam?
                </li>
              </ul>
            </div>
            
            <div className="candidate__title">
              <h3>Reviews</h3>
            </div>
            <div className="candidate__review">
              <ReviewItem />
              <ReviewItem />
              <ReviewItem />
              <ReviewItem />
              <ReviewItem />
            </div>
            <div className="candidate__title">
              <h3>Add review</h3>
            </div>
            <Form className="candidate__comment">
              <Form.Control
                className="candidate__comment--input"
                as="textarea"
                rows={3}
              ></Form.Control>
              <div className="candidate__comment--rate"></div>
              <Button type="submit" className="candidate__comment--btn">
                Submit a review
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CandidateDetail;
