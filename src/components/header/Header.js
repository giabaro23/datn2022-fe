import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NavDropdown from "react-bootstrap/NavDropdown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { logout } from "../../actions/auth";
import Logo from "../logo/Logo";
import "./Header.scss";

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isShowSetting, setIsShowSetting] = useState(false);
  const { user: currentUser } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch((state) => state);

  let location = useLocation();
  const logOut = useCallback(() => {
    dispatch(logout());
    window.location.reload();
  }, [dispatch]);

  const showSetting = () => {
    setIsShowSetting(!isShowSetting);
  };

  const handleLogin = () => {
    setIsLogin(true);
  };
  const handleLogout = () => {
    setIsLogin(false);
  };
  return (
    <div className="header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="a">
            <Logo color={"logo-black"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="header__menu">
                <p>Tìm ứng viên</p>
              </Nav.Link>
              <Nav.Link className="header__menu">
                <p>Tìm việc làm</p>
              </Nav.Link>

              <Nav.Link className="header__menu">
                <p>Về chúng tôi</p>
              </Nav.Link>
              <Nav.Link className="header__menu">
                <p>
                  Hỗ trợ <HelpOutlineIcon sx={{ fontSize: "18px" }} />
                </p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="me-auto">
            {!currentUser ? (
              <>
                <Nav.Link className="header__register-btn">
                  <Button>Đăng ký</Button>
                </Nav.Link>
                <Nav.Link className="header__login-btn">
                  <Link to="/login">
                    <Button onClick={handleLogin}>Đăng nhập</Button>
                  </Link>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link className="header__alert">
                  <NotificationsNoneIcon
                    sx={{
                      marginTop: "10px",
                      marginRight: "10px",
                      fontSize: "30px",
                    }}
                  />
                </Nav.Link>
                <Nav.Link className="header__user" onClick={showSetting}>
                  <div className="header__user-info">
                    <img
                      src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
                      alt=""
                      width={50}
                      height={50}
                    />
                    <div className="header__user-detail">
                      <Link className="header__user-name">Ngân Khùng</Link>
                      <p className="header__user-id">ID: 31052001</p>
                    </div>
                    <div className="header__user-icon">
                      <ArrowDropDownIcon
                        sx={{ marginTop: "10px", marginLeft: "5px" }}
                      />
                    </div>
                  </div>
                  {isShowSetting ? (
                    <div className="header__user-dropdown">
                      <ul>
                        <li className="user__option--item">Hồ sơ cá nhân</li>
                        <li className="user__option--item">Chỉnh sửa hồ sơ</li>
                        <NavDropdown.Divider />
                        <li className="user__option--item" onClick={logOut}>
                          Đăng xuất
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <></>
                  )}
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
