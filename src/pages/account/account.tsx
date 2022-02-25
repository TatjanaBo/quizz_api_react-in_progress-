import React from 'react';
import './account.scss';
import { Link } from 'react-router-dom';
import { AiFillEdit } from 'react-icons/ai';
import { ReactComponent as ProfilePic } from './Rectangle 278.svg';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';

const Account = () => (
  <div className="page_wrapper">
    <div className="account_wrapper">
      <Header />
      <div className="app_wrapper">
        <div>
          <Sidebar />
          <Link to="/createquiz" className="createquiz_link">
            <button className="sidebar_button buttonmargin">
              <AiFillEdit />
              &nbsp;
              Create a quizz
            </button>
          </Link>
        </div>
        <div className="profile_wrapper">
          <ProfilePic />
          Name
        </div>
      </div>
    </div>
  </div>
);

export default Account;
