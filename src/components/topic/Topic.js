import React from 'react';

import { Link } from "react-router-dom";
import './Topic.scss';

const Topic = ({topic}) => {
    return (
        <>
             <ul className="topic__list">
              <h4 className="topic__title">Lĩnh vực</h4>
              {topic.map((topic) => {
                return (
                  <li className="topic__item">
                    <Link to="/joblist" className="topic__item--link">
                      {topic}
                    </Link>
                  </li>
                );
              })}
            </ul>
        </>
    );
};

export default Topic;