import React from 'react';
import { Link } from "react-router-dom";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import './Menu.scss'

const Menu = () => {
    return (
        <div className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <Link to="/dashboard" className="menu__item--link">
                <CottageOutlinedIcon className="menu__item--icon" />
                Trang chủ
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/admin/user-list" className="menu__item--link">
                <PersonOutlineOutlinedIcon className="menu__item--icon" />
                Quản lý người dùng
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/dashboard" className="menu__item--link">
                <CottageOutlinedIcon className="menu__item--icon" />
                Quản lý dự án
              </Link>
            </li>
            
          </ul>
        </div>
    );
};

export default Menu;