import React from 'react';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import StarRateIcon from "@mui/icons-material/StarRate";



import './CandidateListItem.scss'

const CandidateListItem = (props) => {
    return (
        
        <div className="candidate-list__item">
        <div className="candidate-list__item--left">
          <div className="candidate-list__item--avatar">
            <img
              src={props.avatar}
              alt=""
              srcset=""
              width={130}
              height={130}
            />
          </div>
          <div className="candidate-list__item--content">
            <div className="candidate-list__item--header">
              <Link to='/' className="candidate-list__item--user">{props.user}</Link>
            </div>
            <p className="candidate-list__item--job">{props.job}</p>
            <div className="candidate-list__item--rate">
              <StarRateIcon></StarRateIcon>
              <StarRateIcon></StarRateIcon>
              <StarRateIcon></StarRateIcon>
              <StarRateIcon></StarRateIcon>
              <StarRateIcon></StarRateIcon>
            </div>
            <div className="candidate-list__item--des">
              <div className="candidate-list__item--location">
                <div className="candidate-list__item--icon">
                  <FmdGoodOutlinedIcon
                    className="candidate-list__item--icon"
                    sx={{ fontSize: "14px" }}
                  />
                </div>
                <p>{props.location}</p>
              </div>
              <div className="candidate-list__item--type">
                <div className="candidate-list__item--icon">
                  <WatchLaterOutlinedIcon
                    className="candidate-list__item--icon"
                    sx={{ fontSize: "14px" }}
                  />
                </div>
                <p>{props.workType}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="candidate-list__item--right">
            <div className="candidate-list__item--standard">
              <p className="candidate-list__item--standard1">Top Rated</p>
              <p className="candidate-list__item--standard2">Featured</p>
            </div>
            <div className="candidate-list__item--action">
              <Button className="candidate-list__item--btn">Thuê</Button>
            </div>
        </div>
      </div>
    );
};

export default CandidateListItem;