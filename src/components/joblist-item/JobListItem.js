import React,{useState} from "react";
import { Link } from "react-router-dom";

import "./JobListItem.scss";

function JobListItem(props) {
  return (
    <div className={`job-list__item ${props.workType == 'Toàn thời gian' ? 'job-list__item-fulltimebg' : 'job-list__item-parttimebg'}`}>
      <div className="job-list__item--head">
        <Link to={`/employer/${props.id}`} className="job-list__item--name">
          {props.name}
        </Link>
        {
          props.workType == 'Toàn thời gian' ? <p className="job-list__item--fulltime">{props.workType}</p> :<p className="job-list__item--parttime">{props.workType}</p>
        }
        
      </div>
      <div className="job-list__item--employer">
        
      </div>
      <div className={`job-list__item--info ${props.workType == 'Toàn thời gian' ? 'job-list__info-fulltime' : 'job-list__info-parttime'}`}>
        <span>
          {props.location} | {props.topic} | {props.salaryMin} đ - {props.salaryMax} đ
        </span>
        <p className="job-list__item--due">Hạn nhận hồ sơ: {props.due}</p>
      </div>
      <div className="job-list__item--des">
        <p>{props.des}</p>
      </div>
      <div className="job-list__item--skill">
        <p>{props.skill}</p>
      </div>
    </div>
  );
}

export default JobListItem;
