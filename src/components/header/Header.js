import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import React, { useCallback, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../../actions/auth/auth";
import { getUserById } from "../../actions/auth/user";
import Logo from "../logo/Logo";
import "./Header.scss";

const Header = () => {
  const [isShowSetting, setIsShowSetting] = useState(false);
  const { user: authUser } = useSelector((state) => state.authReducer);

  const dispatch = useDispatch((state) => state);

  //update data auth 
  useEffect(()=>{
    (async ()=> {
      const idAuth = authUser?.id;
      if(idAuth) {
        dispatch(getUserById(idAuth));
      }
    })();
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
    window.location.reload();
  }, [dispatch]);

  const showSetting = () => {
    setIsShowSetting(!isShowSetting);
  };

  return (
    <div className="header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="a">
            <Logo url="/home" color={"logo-black"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="header__menu">
                <Link className="header__menu--link" to="/candidatelist">
                  <p>Tìm ứng viên</p>
                </Link>
              </Nav.Link>
              <Nav.Link exact to="/joblist" className="header__menu">
                <Link className="header__menu--link" to="/joblist">
                  <p>Tìm việc làm</p>
                </Link>
              </Nav.Link>

              <Nav.Link className="header__menu">
                <Link className="header__menu--link" to="/">
                  <p>Về chúng tôi</p>
                </Link>
              </Nav.Link>
              <Nav.Link className="header__menu">
                <Link className="header__menu--link" to="/">
                  <p>
                    Hỗ trợ <HelpOutlineIcon sx={{ fontSize: "18px" }} />
                  </p>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="me-auto">
            {authUser ? (
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
                      src={
                        authUser?.avatar
                          ? authUser?.avatar
                          : "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
                      }
                      alt=""
                      width={50}
                      height={50}
                    />
                    <div className="header__user-detail">
                      <Link className="header__user-name">
                        {authUser?.firstName + " " + authUser?.lastName}
                      </Link>
                      <p className="header__user-id">
                        ID: {authUser?.id}
                      </p>
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
                        <li className="user__option--item">
                          <Link to="/profile">Hồ sơ cá nhân</Link>
                        </li>
                        <li className="user__option--item">
                          <Link
                            to={"/profile/edit/" + authUser?.id}
                          >
                            Chỉnh sửa hồ sơ
                          </Link>
                        </li>
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
            ) : (
              <>
                <Nav.Link className="header__register-btn">
                  <Link to="/register">
                    <Button>Đăng ký</Button>
                  </Link>
                </Nav.Link>
                <Nav.Link className="header__login-btn">
                  <Link to="/login">
                    <Button>Đăng nhập</Button>
                  </Link>
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
