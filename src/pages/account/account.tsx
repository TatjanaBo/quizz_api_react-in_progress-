import React from 'react';
import './account.scss';
import { Link } from 'react-router-dom';
import { AiFillEdit } from 'react-icons/ai';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';

const Account = () => (
  <div className="page_wrapper">
    <div className="account_wrapper">
      <Header />
      <div>
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
        <div>Hello</div>
      </div>
    </div>
  </div>
);

export default Account;
