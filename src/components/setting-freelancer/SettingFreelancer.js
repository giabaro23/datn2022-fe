import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SettingFreelancer.scss'

const SettingFreelancer = (props) => {
    const location = useLocation();
    
    return (
        <>
             <ul className="setting__freelancer--list">
              <li className="setting__freelancer--item">
                <Link to={'/profile/edit/' +props.id} className={`setting__freelancer--link ${location.pathname.includes('edit') ?  'active nav-link' : ''}`} >Tài khoản</Link>
              </li>
              <li className="setting__freelancer--item">
                <Link to={'/profile/resume/' + props.id} className={`setting__freelancer--link ${location.pathname.includes('resume') ?  'active nav-link' : ''}`}>Hồ sơ năng lực</Link>
              </li>
              <li className="setting__freelancer--item">
                <Link to={'/profile/password/' + props.id} className={`setting__freelancer--link ${location.pathname.includes('password') ?  'active nav-link' : ''}`}>Đổi mật khẩu</Link>
              </li>
            </ul>
        </>
    );
};

export default SettingFreelancer;