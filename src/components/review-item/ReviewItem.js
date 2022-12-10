import React from "react";

import './ReviewItem.scss'

const ReviewItem = () => {
  return (
    <div className="review--item">
      <div className="review--avatar">
        <img
          src="https://images.unsplash.com/photo-1624775054619-bf29a387fecc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div className="review--main">
        <div className="review--header">
          <div className="review--info">
            <div className="review--user">
              <h4>Gia Bao</h4>
            </div>
            <div className="review--date">
              <p>23th February, 2021, 08:12</p>
            </div>
          </div>
          <div className="review--rate"></div>
        </div>
        <div className="review--inner">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem in
            saepe, omnis adipisci accusamus voluptates similique obcaecati
            expedita esse repellat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
