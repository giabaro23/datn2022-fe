import React from 'react';
import {Link} from 'react-router-dom';

import './Logo.scss'

const Logo = (props) => {
    return (
        <>
        <Link className="logo" to={props.url} href="">
          <h3>FreeJob</h3>
        </Link>
      </>
    );
};

export default Logo;