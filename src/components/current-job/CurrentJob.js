import React from "react";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import './CurrentJob.scss'
const CurrentJob = (props) => {
  return (
    <div className="post__item">
      <div className="post__item--avatar">
        <img
          src={props.avatar}
          alt=""
          srcset=""
          width={100}
          height={100}
        />
      </div>
      <div className="post__item--content">
        <div className="post__item--header">
          <p className="post__item--user">{props.user}</p>
          <div className="post__item--action">
            <div className="post__item--action--icon">
              <RemoveRedEyeOutlinedIcon sx={{ fontSize: "20px" }} />
            </div>
            <div className="post__item--action--icon">
              <CheckOutlinedIcon sx={{ fontSize: "20px" }} />
            </div>
            <div className="post__item--action--icon">
              <CloseOutlinedIcon sx={{ fontSize: "20px" }} />
            </div>
            <div className="post__item--action--icon">
              <DeleteForeverOutlinedIcon sx={{ fontSize: "20px" }} />
            </div>
          </div>
        </div>
        <p className="post__item--job">{props.job}</p>
        <div className="post__item--des">
          <div className="post__item--location">
            <div className="post__item--icon">
              <FmdGoodOutlinedIcon
                className="post__item--icon"
                sx={{ fontSize: "14px" }}
              />
            </div>
            <p>{props.location}</p>
          </div>
          <div className="post__item--type">
            <div className="post__item--icon">
              <WatchLaterOutlinedIcon
                className="post__item--icon"
                sx={{ fontSize: "14px" }}
              />
            </div>
            <p>{props.type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentJob;
