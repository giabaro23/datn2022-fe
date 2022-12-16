import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import userService from "../../services/auth/user.service";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import "./EditProfile.scss";
import { LOCATION } from "../../common/constants";
import Button from "react-bootstrap/esm/Button";
import SettingFreelancer from "../../components/setting-freelancer/SettingFreelancer";
import { editUser } from "../../actions/auth/user";
import Swal from "sweetalert2";

const EditProfile = () => {
  // popup
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);
  const [message, setMessage] = useState('');
  const handleCloseSuccess = () => setShowSuccess(false);
  const handleCloseFail = () => setShowFail(false);
  const handleShowSuccess = () => setShowSuccess(true);
  const handleShowFail = () => setShowFail(true);
  const params = useParams();
  const initialUser = {
    id: "",
    address: "",
    avatar: "",
    createDate: "",
    email: "",
    firstName: "",
    isActive: true,
    lastName: "",
    phoneNumber: "",
    roleId: "",
  };
  const [currentUser, setCurrentUser] = useState(initialUser);

  const dispatch = useDispatch();
  const getUser = (id) => {
    userService
      .getUserById(id)
      .then((res) => {
        setCurrentUser(res.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getUser(params.id);
  }, [params.id]);

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };
  const handleChangeAvatar = e =>{
    if(e.target.files.length>0){
      const file = URL.createObjectURL(e.target.files[0]);
      setCurrentUser({...currentUser,avatar:file})
    }
  }
  const updateUser = (e) => {
    e.preventDefault()
    const data = {
      address: currentUser.address,
      phoneNumber: currentUser.phoneNumber,
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      avatar: currentUser.avatar,
    };
    dispatch(editUser(params.id, data))
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Cập nhật thông tin thành công",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        handleShowFail()
        console.log(error);
      });
  };
 
  return (
    <>
      <Header />
      <div className="edit">
        <div className="edit__wrapper">
          <div className="edit__menu">
            <SettingFreelancer id={params.id}/>
          </div>
          <div className="edit__main">
            <h1>Thông tin cá nhân</h1>
            <Form className="edit__form">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2" className="edit__form--label">
                  Ảnh đại diện
                </Form.Label>
                <Col sm="10">
                  <img
                    src={
                      currentUser.avatar
                        ? currentUser.avatar
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD2CpBM8BKRXp_aHyLw2SeC8Z6ADbXKnf-1A&usqp=CAU"
                    }
                    alt=""
                    width={100}
                    height={100}
                  />
                  <input
                    type="file"
                    onChange={handleChangeAvatar}
                    name="avatar"
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="2" className="edit__form--label">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    plaintext
                    readOnly
                    value={currentUser.email}
                    onChange={handleUserChange}
                    name="email"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" className="edit__form--label">
                  Họ
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="text"
                    className="edit__form--input"
                    name="firstName"
                    value={currentUser.firstName}
                    onChange={handleUserChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" className="edit__form--label">
                  Tên
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="text"
                    className="edit__form--input"
                    name="lastName"
                    value={currentUser.lastName}
                    onChange={handleUserChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" className="edit__form--label">
                  Số điện thoại
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="text"
                    placeholder="text"
                    className="edit__form--input"
                    name="phoneNumber"
                    readOnly
                    plaintext
                    value={currentUser.phoneNumber}
                    onChange={handleUserChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" className="edit__form--label">
                  Thành phố
                </Form.Label>
                <Col sm="10">
                  <Form.Select
                    className="edit__form--input"
                    name="address"
                    onChange={handleUserChange}
                  >
                    <option hidden>Thành phố</option>
                    {LOCATION.map((city) => {
                      return (
                        <option
                          selected={
                            city === currentUser.address
                              ? currentUser.address
                              : false
                          }
                          value={city}
                        >
                          {city}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Col>
              </Form.Group>

              <Button variant="primary" type="submit" onClick={updateUser}>
                Lưu thông tin thay đổi
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <>
   
        <Modal
          show={showSuccess}
          onHide={handleCloseSuccess}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Thông báo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           Lưu thông tin thành công
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseSuccess}>
              Đóng
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <>
      
        <Modal
          show={showFail}
          onHide={handleCloseFail}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Thông báo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           Lưu thông tin thất bại
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseFail}>
              Đóng
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <Footer />
    </>
  );
};

export default EditProfile;
