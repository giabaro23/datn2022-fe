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
          title: "T???o d??? ??n th??nh c??ng",
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
            <h1>????ng d??? ??n</h1>
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
                  <h4>Vi???c c???n tuy???n</h4>
                  <Form.Group className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column className="add-job__form--label">
                      Ch???n l??nh v???c c???n tuy???n
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
                      ?????t t??n c??? th??? cho c??ng vi???c c???n tuy???n
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="VD: Thi???t k??? trang web th????ng m???i ??i???n t???"
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
                  <h4>Th??ng tin ?????y ????? v??? y??u c???u tuy???n d???ng</h4>
                  <Form.Group className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column className="add-job__form--label">
                      N???i dung chi ti???t, v?? c??c ?????u vi???c c???n ???ng vi??n th???c hi???n
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="VD: C??c giao di???n website c???n thi???t k??? nh?? trang ch???, xem gi??? h??ng, thanh to??n,..."
                      className="add-job__form--des"
                      name="description"
                      onChange={handleJobChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="add-job__form--label">
                      K??? n??ng y??u c???u ???ng vi??n ph???i c??
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="VD: Photoshop, Ti???ng anh,..."
                      className="add-job__form--skill"
                      name="skills"
                      onChange={handleJobChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 add-job__form--date">
                    <Form.Label className="add-job__form--label">
                      H???n cu???i nh???n h??? s??
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
                      Lo???i h??nh l??m vi???c
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
                  <h4>Y??u c???u kh??c v???i ???ng vi??n</h4>
                  <Form.Group className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column className="add-job__form--label">
                      C???n tuy???n ???ng vi??n l??m vi???c t???i
                    </Form.Label>
                    <Form.Select
                      className="add-job__form--location"
                      name="location"
                      onChange={handleJobChange}
                    >
                      <option hidden>Th??nh ph???</option>
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
                  <h4>Ng??n s??ch d??? ki???n chi cho c??ng vi???c n??y</h4>
                  <Form.Group className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column className="add-job__form--label">
                      H??nh th???c tr??? l????ng
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
                      S??? ti???n c?? th??? tr??? trong kho???ng
                    </Form.Label>
                    <Row>
                      <Col>
                        <Form.Control
                          onChange={handleJobChange}
                          name="salaryMin"
                          type="text"
                          className=" add-job__form--budget-from"
                          placeholder="T???"
                        />
                      </Col>
                      <Col>
                        <Form.Control
                          onChange={handleJobChange}
                          name="salaryMax"
                          type="text"
                          className=" add-job__form--budget-to"
                          placeholder="?????n"
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
                ????ng d??? ??n
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <>
        <Modal backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Th??ng b??o</Modal.Title>
          </Modal.Header>
          <Modal.Body>L??u th??ng tin th??nh c??ng</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">????ng</Button>
          </Modal.Footer>
        </Modal>
      </>
      <>
        <Modal backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Th??ng b??o</Modal.Title>
          </Modal.Header>
          <Modal.Body>L??u th??ng tin th???t b???i</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">????ng</Button>
          </Modal.Footer>
        </Modal>
      </>
      <Footer />
    </>
  );
};

export default AddJob;
