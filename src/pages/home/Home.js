import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/Banner";
import "./Home.scss";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
     <Banner/>

        <div className="filter">
          <InputGroup className="mb-3 filter__form container">
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              className="filter__keyword"
            />
            <Form.Select className="filter__location">
              <option disabled>Thành phố</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Select className="filter__category">
              <option disabled>Chuyên ngành</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>

            <Button variant="outline-secondary" id="button-addon2">
              Button
            </Button>
          </InputGroup>
        </div>

        <div className="process">
          <div className="process__title">
            <h1>Tìm kiếm công việc dễ dàng</h1>
          </div>
          <div className="process__list">
            <div className="process__item">
              <div className="process__item--icon">
                <img src="https://img.icons8.com/external-bearicons-gradient-bearicons/64/null/external-sign-up-call-to-action-bearicons-gradient-bearicons-1.png" />
              </div>
              <div className="process__item--name">
                <p>Đăng ký tài khoản</p>
                <span>
                  Hãy đăng ký tài khoản cá nhân để có cho mình hồ sơ nổi bật.
                </span>
              </div>
            </div>
            <div className="process__item">
              <div className="process__item--icon">
                <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/null/external-search-delivery-kiranshastry-gradient-kiranshastry.png" />
              </div>
              <div className="process__item--name">
                <p>Tìm kiếm công việc</p>
                <span>Cùng tìm kiếm một công việc phù hợp với bản thân.</span>
              </div>
            </div>
            <div className="process__item">
              <div className="process__item--icon">
                <img src="https://img.icons8.com/ultraviolet/80/null/set-as-resume.png" />
              </div>
              <div className="process__item--name">
                <p>Lưu & Ứng tuyển</p>
                <span>
                  Lưu lại công việc và hãy ứng tuyển khi bạn sẵn sàng.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="skip">
          <div className="skip__img">
            <img src="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" />
          </div>
          <div className="skip__inner">
            <h1>Bạn chưa có tài khoản?</h1>
            <Button className="skip__inner--btn">ĐĂNG KÝ NGAY</Button>
          </div>
        </div>
        <div className="field">
          <div className="field__title">
            <h1>Lĩnh vực thịnh hành</h1>
          </div>
          <div className="field__list container">
            
            <div className="field__item">
              <div className="field__item--icon">
                <img src="https://img.icons8.com/nolan/96/data-configuration.png" />
              </div>
              <div className="field__item--name">
                <p>Cơ sở dữ liệu</p>
                <span>120 jobs</span>
              </div>
            </div>
            <div className="field__item">
              <div className="field__item--icon">
                <img src="https://img.icons8.com/clouds/100/null/technology.png" />
              </div>
              <div className="field__item--name">
                <p>Công nghệ</p>
                <span>120 jobs</span>
              </div>
            </div>
            <div className="field__item">
              <div className="field__item--icon">
                <img src="https://img.icons8.com/external-filled-color-icons-papa-vector/78/null/external-Web-Developer-coding-filled-color-icons-papa-vector.png" />
              </div>
              <div className="field__item--name">
                <p>Lập trình web</p>
                <span>120 jobs</span>
              </div>
            </div>
            <div className="field__item">
              <div className="field__item--icon">
                <img src="https://img.icons8.com/nolan/96/movavi.png" />
              </div>
              <div className="field__item--name">
                <p>Chỉnh sửa video</p>
                <span>120 jobs</span>
              </div>
            </div>
            <div className="field__item">
              <div className="field__item--icon">
                <img src="https://img.icons8.com/clouds/100/null/hand-with-pen.png" />
              </div>
              <div className="field__item--name">
                <p>Viết lách và dịch thuật</p>
                <span>120 jobs</span>
              </div>
            </div>
            <div className="field__item">
              <div className="field__item--icon">
                <img src="https://img.icons8.com/clouds/100/null/promotion-window.png" />
              </div>
              <div className="field__item--name">
                <p>Marketing</p>
                <span>120 jobs</span>
              </div>
            </div>
            <div className="field__item">
              <div className="field__item--icon">
                <img src="https://img.icons8.com/external-parzival-1997-flat-parzival-1997/64/null/external-brain-achievement-planning-parzival-1997-flat-parzival-1997.png" />
              </div>
              <div className="field__item--name">
                <p>Trí tuệ nhân tạo</p>
                <span>120 jobs</span>
              </div>
            </div>
            <div className="field__item">
              <div className="field__item--icon">
                <img src="https://img.icons8.com/external-flat-circular-vectorslab/68/null/external-Network-Setting-business-and-management-flat-circular-vectorslab.png" />
              </div>
              <div className="field__item--name">
                <p>Lập trình mạng</p>
                <span>120 jobs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
