import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ReactComponent as Search } from './Vector (1).svg';
import { ReactComponent as Profile } from './Ellipse 6.svg';
import './header.scss';

axios.defaults.headers.common['X-CSRF-TOKEN'] = localStorage.getItem('csrf') || '';

const Header = () => {
  const startQuiz = () => {
    axios.get('account-api/quizzes').then((response) => console.log(response.data));
  };
  return (
    <div className="header_wrapper">
      <div className="left_side_wrapper">
        <div>
          <h5 className="header_heading">Quiz Time</h5>
        </div>
        <div className="header_input_wrapper">
          <Search className="search_pic" />
          <input className="header_input" type="text" placeholder="Search.." />
        </div>
      </div>

      <div className="left_side_wrapper">
        <div>
          {' '}
          <Link to="/play">
            <button className="header_button" onClick={startQuiz}>Start Quiz</button>
          </Link>
        </div>
        <div className="profile_wrapper">
          <Profile />
          <button className="profile_name">Name</button>
        </div>
      </div>

    </div>
  );
};
export default Header;
