import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import Button from "react-bootstrap/Button";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonIcon from "@mui/icons-material/Person";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CurrentJob from "../../components/current-job/CurrentJob";
import Menu from "../../components/menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { getListUser } from "../../actions/auth/user";
import { retrieveJobs } from "../../actions/job/job";
import { formatDate } from "../../common/constants";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import BlockIcon from "@mui/icons-material/Block";
import Modal from "react-bootstrap/Modal";
import userService from "../../services/auth/user.service";

import "./UserList.scss";
import Swal from "sweetalert2";

const UserList = () => {
  const [modalShow, setModalShow] = useState(false);
  const user = useSelector((state) => state.userReducer);
  const [userSelect, setUserSelect] = useState({});
  const [users, setUsers] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListUser());
  }, [dispatch]);
  useEffect(() => {
    if (user && user?.listUser.rs) {
      // ở đây có thể là unđ
      setUsers(user.listUser.rs);
    }
  }, [user]);
  const getUserById = (id) =>{
    userService.getUserById(id).then(res=>{
      setUserSelect(res.data[0])
      handleShowModal()
    }).catch(e=>{
      console.log(e);
    })
  }
  
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;

  // const currentItems = users.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(users?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users?.length;
    setItemOffset(newOffset);
  };

  const onChangeSearch = (e) => {
    setSearchKey(e.target.value);
  };
  const handleSearch = (e) => {
    if (searchKey.trim() !== "") {
      setUsers(
        user?.listUser.rs?.filter((item) => {
          let fullName = item.firstName + " " + item.lastName;
          return (
            fullName.toLowerCase().includes(searchKey) ||
            fullName.includes(searchKey)
          );
        })
      );
      setSearchKey("");
    } else {
      setUsers(user.listUser.rs);
    }
  };
  const handleShowModal = () => {
    setModalShow(true);
  };
  const handleCloseModal = () => {
    setModalShow(false);
  };
  const handleLock = () =>{
    Swal.fire({
      title: 'Bạn có muốn khóa người dùng bao2303@gmail.com?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } 
    })
  }

  return (
    <>
      <Menu />
      <div className="dashboard">
        <div className="main">
          <div className="main__title">
            <h3>Quản lý người dùng</h3>
          </div>
          <div className="list__user">
            <div className="list__user--table container">
              <div className="list__user--filter">
                <div className="joblist__head--search">
                  <SearchOutlinedIcon className="joblist__head--icon"></SearchOutlinedIcon>
                  <input
                    type="text"
                    placeholder="Tìm kiếm người dùng"
                    className="joblist__head--input pl-0"
                    onChange={onChangeSearch}
                    value={searchKey}
                  ></input>
                  <button className="joblist__head--btn" onClick={handleSearch}>
                    Tìm kiếm
                  </button>
                </div>
              </div>
              <div className="list__user--header">
                <p className="thead__user">Người dùng</p>
                <p className="thead__role">Vai trò</p>
                <p className="thead__date">Ngày tạo</p>
                <p className="thead__status">Trạng thái</p>
                <p className="thead__action"></p>
              </div>
              {users?.length > 0 ? (
                users?.slice(itemOffset, endOffset).map((item) => {
                  if (item.roleId !== 3) {
                    return (
                      <div className="list__user--item">
                        <div className="user-item__user">
                          <div className="user-item__avatar">
                            <img
                              src={
                                item.avatar
                                  ? item.avatar
                                  : "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-2/assets/avatar-2.11d6be6e.png"
                              }
                              alt=""
                              width={40}
                              height={40}
                            />
                          </div>
                          <div className="user-item__info">
                            <p className="user-item__name">
                              {item.firstName + " " + item.lastName}
                            </p>
                            <p className="user-item__email">{item.email}</p>
                          </div>
                        </div>
                        <div className="user-item__role">
                          {item.roleId == 2 ? (
                            <div className="user-item__employer">
                              <div className="user-item__employer--icon">
                                <WorkOutlineIcon />
                              </div>
                              <p>Nhà tuyển dụng</p>
                            </div>
                          ) : (
                            <div className="user-item__candidate">
                              <div className="user-item__candidate--icon">
                                <PersonIcon />
                              </div>
                              <p>Ứng viên</p>
                            </div>
                          )}
                        </div>
                        <div className="user-item__date">
                          {formatDate(item.createDate)}
                        </div>
                        <div
                          className={
                            "user-item__status" +
                            " " +
                            (item.isActive
                              ? "status-active"
                              : "status-inactive")
                          }
                        >
                          <p>{item.isActive ? "Active" : "Inactive"}</p>
                        </div>
                        <div className="user-item__action">
                          <button
                            className="user-item__view"
                            onClick={() => getUserById(item.id)}
                          >
                            Xem
                          </button>
                          {item.isActive ? (
                            <button className="user-item__block" onClick={handleLock}>Khóa</button>
                          ) : (
                            <button className="user-item__unblock">
                              Mở khóa
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  }
                })
              ) : (
                <div className="no-data">
                  <img
                    src="https://financialadvisors.com/media/no-images/nodata-found.png"
                    alt=""
                  />
                </div>
              )}
              <div className="list__user--pagination">
                <p>
                  Hiển thị 10 trên
                  {users?.filter((user) => user.roleId !== 3)?.length} người
                  dùng
                </p>
                <ReactPaginate
                  className="pagination"
                  breakLabel="..."
                  nextLabel=">"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel="<"
                  renderOnZeroPageCount={null}
                />
              </div>
              <Modal
                show={modalShow}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Thông tin người dùng
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="modal__user-info">
                    <div className="modal__user-info--left">
                      <div className="modal__user-info--avatar">
                        <img
                          src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-2/assets/avatar-2.11d6be6e.png"
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="modal__user-info--id">
                        <p>ID: {userSelect?.id}</p>
                      </div>
                    </div>
                    <div className="modal__user-info--right">
                      <Form className="modal__user-info--form">
                        <Form.Group
                          as={Row}
                          className="mb-3 modal__user-form-group"
                          controlId="formPlaintextEmail"
                          
                        >
                          <Form.Label
                            column
                            className="modal__user-info--label"
                          >
                            Họ và tên:
                          </Form.Label>
                          <Col >
                            <Form.Control
                              plaintext
                              readOnly
                              value={userSelect?.firstName + ' ' + userSelect?.lastName}
                              name="email"
                              className="modal__user-info--input"

                            />
                          </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                          <Form.Label
                            column
                            className="modal__user-info--label"
                          >
                            Email:
                          </Form.Label>
                          <Col >
                            <Form.Control
                              type="text"
                              plaintext
                              readOnly
                              className="modal__user-info--input"
                              name="firstName"
                              value={userSelect?.email}
                            />
                          </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                          <Form.Label
                            column
                            className="modal__user-info--label"
                          >
                            Số điện thoại:
                          </Form.Label>
                          <Col >
                            <Form.Control
                              type="text"
                              plaintext
                              readOnly
                              className="modal__user-info--input"
                              name="phoneNumber"
                              value={userSelect?.phoneNumber}
                            />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label
                            column
                            className="modal__user-info--label"
                          >
                            Thành phố:
                          </Form.Label>
                          <Col >
                            <Form.Control
                              type="text"
                              plaintext
                              readOnly
                              className="modal__user-info--input"
                              name="address"
                              value={userSelect?.address}
                            />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label
                            column
                            className="modal__user-info--label"
                          >
                            Ngày bắt đầu:
                          </Form.Label>
                          <Col >
                            <Form.Control
                              type="text"
                              plaintext
                              readOnly
                              className="modal__user-info--input"
                              name="date"
                              value={formatDate(userSelect?.createDate)}
                            />
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                          <Form.Label
                            column
                            className="modal__user-info--label"
                          >
                            Vai trò:
                          </Form.Label>
                          <Col >
                            <Form.Control
                              type="text"
                              plaintext
                              readOnly
                              className="modal__user-info--input"
                              name="date"
                              value={userSelect?.roleId == 1 ? "Ứng viên" : "Nhà tuyển dụng"}
                            />
                          </Col>
                        </Form.Group>
                      </Form>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer className="modal__uesr-info--footer">
                  <Button onClick={handleCloseModal}>Đóng</Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
