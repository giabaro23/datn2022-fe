import React from "react";
import { Link } from "react-router-dom";

import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";

import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import NotiAdmin from "../../components/noti-admin/NotiAdmin";
import CurrentJob from "../../components/current-job/CurrentJob";
import "./Dashboard.scss";

const Dashboard = () => {
  const applyNoti = [
    {
      name: "Gia Bao",
      job: "Software Engineer",
    },
    {
      name: "Bin dep trai",
      job: "Network",
    },
    {
      name: "Hoang hau",
      job: "Technology",
    },
    {
      name: "Kun Kun",
      job: "Designer",
    },
    {
      name: "Gia Bao",
      job: "Software Engineer",
    },
  ];

  const currentJob=[
    {
      avatar: 'https://images.unsplash.com/photo-1668934807819-536c2ca08a7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      user:'Gia Bao',
      job: 'IT man',
      location: 'HUE',
      type: 'Part time'
    },
    {
      avatar: 'https://images.unsplash.com/photo-1582255334378-4e9bc9505664?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      user:'Boy Hàn Xẻng',
      job: 'Ca sĩ',
      location: 'korea',
      type: 'Full time'
    },
    {
      avatar: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/311738955_3413296018950972_8829576938429930393_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=WY5b2dzaqvAAX8ra8JE&_nc_ht=scontent.fdad1-3.fna&oh=00_AfAVzQdir1oQJiVFHebk3pYvvNMmh1Na_mqP4moIcnjbbg&oe=6380665B',
      user:'Ngân cute',
      job: 'Teacher',
      location: 'Daknong',
      type: 'Over time'
    },
    {
      avatar: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/311601159_3404917226455518_3612126575068178200_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=REUb9zsz_aEAX_VBPQE&_nc_ht=scontent.fdad1-3.fna&oh=00_AfCyFlnKbSZ1Bjj3R5thkp2_MQ5h6JG8az3k6s7_UHCoag&oe=6380B95D',
      user:'HN thần kinh ngôn ngữ',
      job: 'meme girl',
      location: 'Vietnam',
      type: 'Part time'
    },
    {
      avatar: 'https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/311699088_3414760495471191_496960525215955009_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=Z870mCBu8PQAX94fZdB&_nc_ht=scontent.fdad1-2.fna&oh=00_AfB59BnlbTrL4nGLLZuk4qHw0NLAt6_qmNVK_T5_ddXIHA&oe=6381162A',
      user:'Ngân bí ẩn',
      job: 'tiktoker',
      location: 'Lào',
      type: 'Part time'
    },
  ]

  const SomeComponent = TurnedInNotOutlinedIcon
  return (
    <>
      <Menu />
      <div className="dashboard">
        <div className="main">
          <div className="main__title">
            <h3>Hello, Admin</h3>
          </div>
          <div className="main__statistical">
            <div className="statistical">
              <div className="statistical__card statistical__card--blue">
                <div className="statistical__content">
                  <div className="statistical__icon">
                    <BusinessCenterOutlinedIcon
                      className="statistical__icon--blue "
                      sx={{ fontSize: "32px" }}
                    />
                  </div>
                  <div className="statistical__text">
                    <div className="statistical__title">Post Jobs</div>
                    <div className="statistical__number">100</div>
                  </div>
                </div>
              </div>
              <div className="statistical__card statistical__card--green">
                <div className="statistical__content">
                  <div className="statistical__icon">
                    <ListAltOutlinedIcon
                      className="statistical__icon--green "
                      sx={{ fontSize: "32px" }}
                    />
                  </div>
                  <div className="statistical__text">
                    <div className="statistical__title">Application</div>
                    <div className="statistical__number">6382</div>
                  </div>
                </div>
              </div>
              <div className="statistical__card statistical__card--yellow">
                <div className="statistical__content">
                  <div className="statistical__icon">
                    <ModeCommentOutlinedIcon
                      className="statistical__icon--yellow "
                      sx={{ fontSize: "32px" }}
                    />
                  </div>
                  <div className="statistical__text">
                    <div className="statistical__title">Messages</div>
                    <div className="statistical__number">85</div>
                  </div>
                </div>
              </div>
              <div className="statistical__card statistical__card--red">
                <div className="statistical__content">
                  <div className="statistical__icon">
                    <TurnedInNotOutlinedIcon
                      className="statistical__icon--red "
                      sx={{ fontSize: "32px" }}
                    />
                  </div>
                  <div className="statistical__text">
                    <div className="statistical__title">Shortlist</div>
                    <div className="statistical__number">57</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="notification">
            <div className="apply">
              <div className="apply__title">
                <h3>Job apply</h3>
              </div>
              {applyNoti.map((apply) => {
                return <NotiAdmin name={apply.name} job={apply.job} />;
              })}
            </div>
            <div className="apply">
              <div className="apply__title">
                <h3>Job apply</h3>
              </div>
              {applyNoti.map((apply) => {
                return <NotiAdmin name={apply.name} job={apply.job} />;
              })}
            </div>
          </div>

          <div className="post">
            <div className="post__title">
              <h3>Việc đăng tải gần đây</h3>
            </div>
            <div className="post__list">
              <div className="post__item">
                <div className="post__item--avatar">
                  <img
                    src="https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                    alt=""
                    srcset=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="post__item--content">
                  <div className="post__item--header">
                    <p className="post__item--user">Jonathon Ronan</p>
                    <div className="post__item--action">
                        <div className="post__item--action--icon">
                        <SomeComponent sx={{ fontSize: "20px"}} />
                        </div>
                        <div className="post__item--action--icon">
                        <TurnedInNotOutlinedIcon sx={{ fontSize: "20px"}} />
                        </div>
                        <div className="post__item--action--icon">
                        <TurnedInNotOutlinedIcon sx={{ fontSize: "20px"}} />
                        </div>
                        <div className="post__item--action--icon">
                        <TurnedInNotOutlinedIcon sx={{ fontSize: "20px"}} />
                        </div>
                    </div>
                  </div>
                  <p className="post__item--job">IT Specialist</p>
                  <div className="post__item--des">
                  <div className="post__item--location">
                      <div className="post__item--icon">
                        <FmdGoodOutlinedIcon className="post__item--icon" sx={{ fontSize: "14px" }}/>
                      </div>
                      <p>USA</p>
                    </div>
                    <div className="post__item--type">
                      <div className="post__item--icon">
                        <WatchLaterOutlinedIcon className="post__item--icon" sx={{ fontSize: "14px" }}/>
                      </div>
                      <p>Part time</p>
                    </div>
                  </div>
                </div>
              </div>
              {
                currentJob.map(job=>{
                 return <CurrentJob avatar={job.avatar} user={job.user} job={job.job} location={job.location} type={job.type}/>
                })
              }
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
