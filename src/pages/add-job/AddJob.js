import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import DatePicker from "react-datepicker";
import { Link, useNavigate, Navigate } from "react-router-dom";

import DateTimePicker from "react-datetime-picker";
import Button from "react-bootstrap/esm/Button";
import {
  LOCATION,
  TOPIC_ALL,
  WORK_TYPE,
  PAY_TYPE,
  formatDate,
} from "../../common/constants";
import DateFnsUtils from "@date-io/date-fns";
import { createJob } from "../../actions/job/job";
import Swal from "sweetalert2";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "./AddJob.scss";
import { useDispatch, useSelector } from "react-redux";

const AddJob = () => {
  const navigate = useNavigate();
  const initialState = {
    topicName: "",
    workTypeName: "",
    payTypeName: "",
    name: "",
    description: "",
    salaryMin: "",
    salaryMax: "",
    dueDate: "",
    status: "",
    location: "",
    skills: "",
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [jobInfo, setJobInfo] = useState(initialState);
  const { user: currentUser } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const handleDateChange = (date) => {
    setJobInfo({ ...jobInfo, dueDate: formatDate(date) });
  };
  const navigateHome = () => {
    navigate("/");
  };

  const handleJobChange = (e) => {
    const { name, value } = e.target;
    setJobInfo({ ...jobInfo, [name]: value });
  };
  const handleAddJob = (e) => {
    e.preventDefault();
    const userId = currentUser?.id;
    const data = {
      userId: userId,
      topicName: jobInfo.topicName,
      workTypeName: jobInfo.workTypeName,
      payTypeName: jobInfo.payTypeName,
      name: jobInfo.name,
      description: jobInfo.description,
      salaryMin: jobInfo.salaryMin,
      salaryMax: jobInfo.salaryMax,
      dueDate: jobInfo.dueDate,
      status: jobInfo.status,
      location: jobInfo.location,
      skills: jobInfo.skills,
    };
    dispatch(createJob(data))
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "Tạo dự án thành công",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigateHome();
          window.location.reload();
        }, 2500);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Header />

      <div className="add-job">
        <div className="add-job__wrapper">
          <div className="add-job__main">
            <h1>Đăng dự án</h1>
            <Form className="add-job__form">
              <div className="add-job__form--item">
                <div className="add-job__form--left">
                  <img
                    src="https://img.icons8.com/external-itim2101-blue-itim2101/64/null/external-job-human-resource-itim2101-blue-itim2101.png"
                    alt=""
                    width={70}
                    height={70}
                  />
                </div>
                <div className="add-job__form--right">
                  <h4>Việc cần tuyển</h4>
                  <Form.Group className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column className="add-job__form--label">
                      Chọn lĩnh vực cần tuyển
                    </Form.Label>
                    <Form.Select
                      className="add-job__form--topic"
                      name="topicName"
                      onChange={handleJobChange}
                    >
                      {TOPIC_ALL.map((topic) => {
                        return (
                          <optgroup label={topic.topicName}>
                            {topic.subTopic.map((item) => {
                              return <option value={item}>{item}</option>;
                            })}
                          </optgroup>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="add-job__form--label">
                      Đặt tên cụ thể cho công việc cần tuyển
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="VD: Thiết kế trang web thương mại điện tử"
                      className="add-job__form--name"
                      name="name"
                      onChange={handleJobChange}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="add-job__form--item">
                <div className="add-job__form--left">
                  <img
                    src="https://img.icons8.com/external-others-phat-plus/64/null/external-information-cloud-system-blue-others-phat-plus-8.png"
                    alt=""
                    width={70}
                    height={70}
                  />
                </div>
                <div className="add-job__form--right">
                  <h4>Thông tin đầy đủ về yêu cầu tuyển dụng</h4>
                  <Form.Group className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column className="add-job__form--label">
                      Nội dung chi tiết, và các đầu việc cần ứng viên thực hiện
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="VD: Các giao diện website cần thiết kế như trang chủ, xem giỏ hàng, thanh toán,..."
                      className="add-job__form--des"
                      name="description"
                      onChange={handleJobChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="add-job__form--label">
                      Kỹ năng yêu cầu ứng viên phải có
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="VD: Photoshop, Tiếng anh,..."
                      className="add-job__form--skill"
                      name="skills"
                      onChange={handleJobChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 add-job__form--date">
                    <Form.Label className="add-job__form--label">
                      Hạn cuối nhận hồ sơ
                    </Form.Label>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                        className="date__select"
                      />
                    </MuiPickersUtilsProvider>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="add-job__form--label">
                      Loại hình làm việc
                    </Form.Label>
                    <Form.Select
                      onChange={handleJobChange}
                      className="add-job__form--work-Type"
                      name="workTypeName"
                    >
                      {WORK_TYPE.map((item) => {
                        return <option value={item}>{item}</option>;
                      })}
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
              <div className="add-job__form--item">
                <div className="add-job__form--left">
                  <img
                    src="https://img.icons8.com/ultraviolet/80/null/visit.png"
                    alt=""
                    width={70}
                    height={70}
                  />
                </div>
                <div className="add-job__form--right">
                  <h4>Yêu cầu khác với ứng viên</h4>
                  <Form.Group className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column className="add-job__form--label">
                      Cần tuyển ứng viên làm việc tại
                    </Form.Label>
                    <Form.Select
                      className="add-job__form--location"
                      name="location"
                      onChange={handleJobChange}
                    >
                      <option hidden>Thành phố</option>
                      {LOCATION.map((city) => {
                        return <option>{city}</option>;
                      })}
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
              <div className="add-job__form--item">
                <div className="add-job__form--left">
                  <img
                    src="https://img.icons8.com/external-dualtone-zulfa-mahendra/96/null/external-budget-business-management-dualtone-zulfa-mahendra.png"
                    alt=""
                    width={70}
                    height={70}
                  />
                </div>
                <div className="add-job__form--right">
                  <h4>Ngân sách dự kiến chi cho công việc này</h4>
                  <Form.Group className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column className="add-job__form--label">
                      Hình thức trả lương
                    </Form.Label>
                    <Form.Select
                      className=" add-job__form--pay"
                      name="payTypeName"
                      onChange={handleJobChange}
                    >
                      {" "}
                      {PAY_TYPE.map((item) => {
                        return <option value={item}>{item}</option>;
                      })}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Form.Label className="add-job__form--label">
                      Số tiền có thể trả trong khoảng
                    </Form.Label>
                    <Row>
                      <Col>
                        <Form.Control
                          onChange={handleJobChange}
                          name="salaryMin"
                          type="text"
                          className=" add-job__form--budget-from"
                          placeholder="Từ"
                        />
                      </Col>
                      <Col>
                        <Form.Control
                          onChange={handleJobChange}
                          name="salaryMax"
                          type="text"
                          className=" add-job__form--budget-to"
                          placeholder="Đến"
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                </div>
              </div>

              <Button
                variant="primary"
                type="submit"
                className="add-job__form--btn"
                onClick={handleAddJob}
              >
                Đăng dự án
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <>
        <Modal backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Thông báo</Modal.Title>
          </Modal.Header>
          <Modal.Body>Lưu thông tin thành công</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Đóng</Button>
          </Modal.Footer>
        </Modal>
      </>
      <>
        <Modal backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Thông báo</Modal.Title>
          </Modal.Header>
          <Modal.Body>Lưu thông tin thất bại</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Đóng</Button>
          </Modal.Footer>
        </Modal>
      </>
      <Footer />
    </>
  );
};

export default AddJob;
