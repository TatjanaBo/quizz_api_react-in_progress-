import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ReactComponent as Dashboardicon } from './dashboardIcon.svg';
import { ReactComponent as SupportIcon } from './supportIcon.svg';
import { ReactComponent as NotificationIcon } from './notificationIcon.svg';
import './sidebar.scss';

const Sidebar = () => (
  <div className="sidebar_wrapper">
    <button className="sidebar_button">
      <Dashboardicon className="dashboardicon" />
      &nbsp;
      Dashboard
    </button>
    <button className="sidebar_button">
      <SupportIcon />
      &nbsp;
      Support
    </button>
    <button className="sidebar_button">
      <NotificationIcon />
      &nbsp;
      Notification
    </button>
  </div>
);

export default Sidebar;
