import React, { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import backgroundpic from './Rectangle 29.jpg';
import google from './Google__G__Logo.svg.png';
import './home.scss';
import { ReactComponent as Arrow } from './arrow_back_ios_24px.svg';

type Form = {
  email:string,
  password:string,
}

const Home = () => {
  const [formValues, setFormValues] = useState<Form>({
    email: '',
    password: '',
  });

  useEffect(() => {
    axios.get('https://quiz-app-usnl.onrender.com/swagger-ui/account-api/quizzes')
      .then((response) => console.log(response.data));
  }, []);

  const user = {
    email: formValues.email,
    password: formValues.password,
  };
  // axios.post('https://quiz-app-usnl.onrender.com/swagger-ui/accounts/sign-up', user)
  //   .then((response) => setFormValues(response.data));

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues, [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="page_wrapper">
      <div className="home_wrapper">
        <div>
          <img src={backgroundpic} alt="Fona bilde" />
        </div>
        <div>
          <header className="header_main_wrapper">
            <Arrow />
            &nbsp;
            <a href="#a" className="header_back">Back</a>
          </header>
          <div>
            <div>
              <h3 className="heading_main">Login to your Account</h3>
              <h6 className="heading_secondary">with your registered Email Address</h6>
            </div>

            <div className="form_field_wrapper">
              <div>
                <p className="heading_input">Email address*</p>
                <input
                  className="input_field"
                  type="text"
                  placeholder="Enter email address"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>

              <div className="password_wrapper">
                <p className="heading_input">Enter password</p>
                <input
                  className="input_field"
                  type="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                />
                <span className="show_pasword_text">Show</span>
              </div>

              <div className="checkbox_wrapper">
                <input type="checkbox" className="checkbox_click" />
                <span className="checkbox_text">Remember my password</span>
              </div>
            </div>

            <div className="btn_wrapper">
              <button className="login_btn first_btn">Login</button>
              <div className="btn_divider">OR</div>
              <div className="google_btn_wrapper">
                <button className="login_btn second_btn">Login with Google</button>
                <img className="google_image" src={google} alt="google" width={5} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Home;
