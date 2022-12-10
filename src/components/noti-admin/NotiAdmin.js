import React from "react";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import "./NotiAdmin.scss";

const NotiAdmin = (props) => {
  return (
    <div className="item">
      <p className="item--icon">
        <TurnedInNotOutlinedIcon sx={{ fontSize: "20px" }} />
      </p>
      <p className="item--name">{props.name}</p>
      <p className="item--text">vừa đăng ký công việc</p>
      <p className="item--job">{props.job}</p>
    </div>
  );
};

export default NotiAdmin;
