import React from 'react';
import { Link } from "react-router-dom";

import './JobListItem.scss'

function JobListItem(props) {
    return (
        <div className="job-list__item">
                    <div className="job-list__item--head">
                      <Link to="/" className="job-list__item--name">
                        {props.name}
                      </Link>
                      <p className="job-list__item--status">{props.status}</p>
                      <p className="job-list__item--standing">{props.standing}</p>
                    </div>
                    <div className="job-list__item--employer">
                      <div className="job-list__item--rating">* * * * *</div>
                      <p>{props.employer}</p>
                    </div>
                    <div className="job-list__item--info">
                      <span>
                        {props.range} | {props.topic} | {props.salary}
                      </span>
                      <p className="job-list__item--due">
                        Hạn nhận hồ sơ: {props.due}
                      </p>
                    </div>
                    <div className="job-list__item--des">
                      <p>{props.des}</p>
                    </div>
                    <div className="job-list__item--skill">
                      {props.skill.map((item) => {return <p>{item}</p>;
                      })}
                    </div>
                  </div>
    );
}

export default JobListItem;