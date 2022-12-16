import React from "react";
import { Link, useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { LOCATION, TOPIC_ALL } from "../../common/constants";
import Button from "react-bootstrap/esm/Button";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Resume.scss";
import SelectTopic from "../../components/select-topic/SelectTopic";
import SettingFreelancer from "../../components/setting-freelancer/SettingFreelancer";
import Swal from "sweetalert2";

const Resume = () => {
  const params = useParams();
  const handleSubmit = () =>{
    Swal.fire({
      icon: "success",
      title: "Lưu thông tin hồ sơ thành công",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  return (
    <>
      <Header />
      <div className="resume">
        <div className="resume__wrapper">
          <div className="resume__menu">
            <SettingFreelancer id={params.id}/>
          </div>
          <div className="resume__main">
            <Form className="resume__form">
              <h1>1. Giới thiệu chung</h1>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2">
                  <div className="resume__form--label">
                    <p>Tôi là</p>
                  </div>
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    plaintext
                    readOnly
                    value="Freelancer"
                    className="resume__form--input"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  <div className="resume__form--label">
                    <p>Giới thiệu bản thân</p>
                    <p className="resume__form--required">*</p>
                  </div>
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Giới thiệu về bản thân"
                    as="textarea"
                    className="resume__form--about resume__form--input"
                  />
                  <p className="resume__form--des-input">1. Bạn là ai?</p>
                  <p className="resume__form--des-input">
                    2. Kinh nghiệm làm việc và chuyên môn của bạn như thế nào?
                  </p>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  <div className="resume__form--label">
                    <p>Website Linkedin</p>
                  </div>
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="Điền website ở đây nếu có"
                    className="resume__form--input"
                  />
                  <p className="resume__form--des-input">
                    Cung cấp website cá nhân để nhà tuyển dụng có thể theo dõi
                  </p>
                </Col>
              </Form.Group>
              <h1>2. Kinh nghiệm làm việc</h1>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  <div className="resume__form--label">
                    <p> Lĩnh vực chuyên môn</p>
                    <p className="resume__form--required">*</p>
                  </div>
                </Form.Label>
                <Col sm="10">
                  <div className="resume__form--input">
                    <SelectTopic />
                  </div>
                  <p className="resume__form--des-input">
                    Lĩnh vực chính mà bạn đang làm hoặc có kinh nghiệm nhiều
                    nhất
                  </p>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  <div className="resume__form--label">
                    <p> Trình độ</p>
                    <p className="resume__form--required">*</p>
                  </div>
                </Form.Label>
                <Col sm="10">
                  <Form.Select placeholder="Chọn mức kinh nghiệm phù hợp" className="resume__form--input">
                    <option hidden>Chọn mức kinh nghiệm phù hợp</option>
                    <option value="Mới đi làm">Mới đi làm</option>
                    <option value="Đã có kinh nghiệm">Đã có kinh nghiệm</option>
                    <option value="Chuyên gia">Chuyên gia</option>
                  </Form.Select>
                  <p className="resume__form--des-input">
                    - Mới đi làm: Dưới 2 năm kinh nghiệm
                  </p>
                  <p className="resume__form--des-input">
                    - Đã có kinh nghiệm: Có từ 2-5 năm kinh nghiệm
                  </p>
                  <p className="resume__form--des-input">
                    - Chuyên gia: Đã có trên 5 năm kinh nghiệm
                  </p>
                </Col>
              </Form.Group>

              <h1>3. Hồ sơ dịch vụ</h1>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                  <div className="resume__form--label">
                    <p> Tôi có thể làm</p>
                    <p className="resume__form--required">*</p>
                  </div>
                </Form.Label>
                <Col sm="10">
                  <Form.Select
                    className="resume__form--input"
                    placeholder="Chọn mức kinh nghiệm phù hợp"
                  >
                    <option>Bán thời gian</option>
                    <option>Toàn thời gian</option>
                  </Form.Select>
                  <p className="resume__form--des-input">
                    - Bán thời gian: Dưới 40h/tuần
                  </p>
                  <p className="resume__form--des-input">
                    - Toàn thời gian: Trên 40h/tuần
                  </p>
                </Col>
              </Form.Group>
              <Button onClick={handleSubmit}>Lưu thông tin thay đổi</Button>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resume;
