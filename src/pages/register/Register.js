import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import CheckButton from "react-validation/build/button";
import { LOCATION } from "../../common/constants";
import { register } from "../../actions/auth/auth";
import "./Register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [roleId, setRoleId] = useState("");
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const onChangeRoleId = (e) => {
    const roleId = e.target.value;
    setRoleId(roleId);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeLocation = (e) => {
    const location = e.target.value;
    setLocation(location);
  };

  const onChangeCity = (e) => {
    const city = e.target.value;
    setAddress(city);
  };
  const onChangePhoneNumber = (e) => {
    const phoneNumber = e.target.value;
    setPhoneNumber(phoneNumber);
  };

  const onChangeFirstName = (e) => {
    const firstName = e.target.value;
    setFirstName(firstName);
  };

  const onChangeLastName = (e) => {
    const lastName = e.target.value;
    setLastName(lastName);
  };

  const onChangeGender = (e) => {
    const gender = e.target.value;
    setGender(gender);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setSuccessful(false)
   
    dispatch(register(roleId,email, password,address, phoneNumber,firstName, lastName,gender))
    .then(()=>{
      setSuccessful(true);
      alert('dang ki thanh cong')
    }).catch(()=>{
      setSuccessful(false);
      alert('dang ki that bai')
    })
  };
  return (
    <div className="register">
      <Form className="register__form">
        <Form.Group className="register__title">
          <h3>????ng k?? t??i kho???n</h3>
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>H???:</Form.Label>
            <Form.Control
              onChange={onChangeFirstName}
              value={firstName}
              type="text"
              placeholder="Nguyen Van"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>T??n:</Form.Label>
            <Form.Control
              onChange={onChangeLastName}
              value={lastName}
              type="text"
              placeholder="A"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            onChange={onChangeEmail}
            value={email}
            placeholder="test@gmail.com"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>M???t kh???u:</Form.Label>
          <Form.Control
            onChange={onChangePassword}
            value={password}
            type="password"
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>S??? ??i???n tho???i:</Form.Label>
            <Form.Control onChange={onChangePhoneNumber} value={phoneNumber} />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>B???n l??:</Form.Label>
            <Form.Select onChange={onChangeRoleId}>
              <option hidden></option>
              <option value={"1"}>???ng vi??n</option>
              <option value={"2"}>Nh?? tuy???n d???ng</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={3}>
              Gi???i t??nh:
            </Form.Label>
            <Col>
              <Form.Check
                onChange={onChangeGender}
                type="radio"
                label="Nam"
                value="true"
                className="register__gender"
              />
            </Col>
            <Col>
              <Form.Check
                onChange={onChangeGender}
                type="radio"
                label="N???"
                value="false"
                className="register__gender"
              />
            </Col>
          </Form.Group>
        </Row>
        <Row className="mb-3">
       
          <Form.Group as={Col}>
            <Form.Label>Th??nh ph???:</Form.Label>
            <Form.Select onChange={onChangeCity}>
              <option hidden>Th??nh ph???</option>
              {LOCATION.map((city) => {
                return <option value={city}>{city}</option>;
              })}
            </Form.Select>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit" onClick={handleRegister}>
          ????ng k??
        </Button>
        <Form.Group className="mb-3 login__text">
          <Link to="/login" className="login__text--link">
            B???n ???? c?? t??i kho???n? ????ng nh???p <TrendingFlatIcon />
          </Link>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Register;
