import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import Button from "react-bootstrap/esm/Button";
import SettingFreelancer from "../../components/setting-freelancer/SettingFreelancer";
import "./Password.scss";
import { changePassword } from "../../actions/auth/user";
import Swal from "sweetalert2";

const Password = () => {
  const params = useParams();
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordconfirm] = useState("");
  const { user: authUser } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const handleChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleChangeNewPassword = (e) => {
    const newPassword = e.target.value;
    setNewPassword(newPassword);
  };
  const handleChangeNewPasswordConfirm = (e) => {
    const newPasswordConfirm = e.target.value;
    setNewPasswordconfirm(newPasswordConfirm);
  };

  const onChangePassword = (e) => {
    console.log("e", e);
    e.preventDefault();
    const data = {
      email: authUser?.email,
      password: password,
      newPassword: newPassword,
    };
    console.log("!11");
    if (newPassword === newPasswordConfirm) {
      dispatch(changePassword(data))
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Đổi mật khẩu thành công",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("xac nhan mat khau khong dung");
    }
  };

  return (
    <>
      <Header />
      <div className="password">
        <div className="password__wrapper">
          <div className="password__menu">
            <SettingFreelancer id={params.id} />
          </div>
          <div className="password__main">
            <h1>Thay đổi mật khẩu</h1>
            <Form className="password__form">
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" className="password__form--label">
                  Mật khẩu hiện tại
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="password"
                    placeholder="******"
                    className="password__form--input"
                    value={password}
                    onChange={handleChangePassword}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" className="password__form--label">
                  Mật khẩu mới
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="password"
                    placeholder="******"
                    className="password__form--input"
                    value={newPassword}
                    onChange={handleChangeNewPassword}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2" className="password__form--label">
                  Xác nhận mật khẩu mới
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="password"
                    placeholder="******"
                    className="password__form--input"
                    value={newPasswordConfirm}
                    onChange={handleChangeNewPasswordConfirm}
                  />
                </Col>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={onChangePassword}
              >
                Đổi mật khẩu
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Password;
