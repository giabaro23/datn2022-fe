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
                Dashboard
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/dashboard" className="menu__item--link">
                <PersonOutlineOutlinedIcon className="menu__item--icon" />
                Company profile
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/dashboard" className="menu__item--link">
                <CottageOutlinedIcon className="menu__item--icon" />
                Post a New Job
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/dashboard" className="menu__item--link">
                <CottageOutlinedIcon className="menu__item--icon" />
                Manage Jobs
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/dashboard" className="menu__item--link">
                <CottageOutlinedIcon className="menu__item--icon" />
                All Applicants
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/dashboard" className="menu__item--link">
                <CottageOutlinedIcon className="menu__item--icon" />
                Submit Resumes
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/dashboard" className="menu__item--link">
                <CottageOutlinedIcon className="menu__item--icon" />
                Packages
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/dashboard" className="menu__item--link">
                <CottageOutlinedIcon className="menu__item--icon" />
                Messges
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/dashboard" className="menu__item--link">
                <CottageOutlinedIcon className="menu__item--icon" />
                Invoice
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/dashboard" className="menu__item--link">
                <CottageOutlinedIcon className="menu__item--icon" />
                Resume Alerts
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/dashboard" className="menu__item--link">
                <CottageOutlinedIcon className="menu__item--icon" />
                Change Password
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/dashboard" className="menu__item--link">
                <CottageOutlinedIcon className="menu__item--icon" />
                View Profile
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/dashboard" className="menu__item--link">
                <CottageOutlinedIcon className="menu__item--icon" />
                Logout
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/dashboard" className="menu__item--link">
                <CottageOutlinedIcon className="menu__item--icon" />
                Delete profile
              </Link>
            </li>
          </ul>
        </div>
    );
};

export default Menu;