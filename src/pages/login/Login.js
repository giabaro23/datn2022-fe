import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

import { login } from "../../actions/auth";

import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(login(email, password))
      .then(() => {
        navigate("/home");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };
  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="login">
      <Form className="login__form">
        <Form.Group className="login__title">
          <h3>Đăng nhập</h3>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tên đăng nhập</Form.Label>
          <Form.Control value={email} onChange={onChangeEmail} type="email" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            className="login__password"
            value={password}
            onChange={onChangePassword}
            type="password"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleLogin}>
          {loading && (
            <span className="spinner-border spinner-border-sm"></span>
          )}
          Đăng nhập
        </Button>
        <Form.Group className="mb-3">
          <Link className="login__forget">Quên mật khẩu?</Link>
        </Form.Group>
        <Form.Group className="mb-3 register__text">
          <Link className="register__text--link">
            Đăng ký tài khoản ngay <TrendingFlatIcon />
          </Link>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
