import React, { useState } from 'react';
import './createQuiz.scss';
import axios from 'axios';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';

type Quiz = {
  title?: string,
  timeLimit?: 'PT5S',
  questions: [
    {content: string,
    imageURL: string,
    points?: 0,
    answers: [{
      content:string,
      correct:true
    }]}
  ]
};

axios.defaults.headers.common['X-CSRF-TOKEN'] = localStorage.getItem('csrf') || '';

const CreateQuiz = () => {
  const [question, setQuestion] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [answer, setAnswer] = useState('');

  // const csrfToken = '398794c5-95f2-4c12-8263-3d6ca1809447';

  const addQuiz = () => {
    axios.post('account-api/accounts/quizzes', {
      questions: [{
        content: question,
        imageURL: imgUrl,
        answers: [{
          content: answer,
          correct: true,
        }],
      }],
    })
      .then((response) => console.log(response.data));
  };

  // setQuestion('');
  // setImgUrl('');
  // setAnswer('');
  return (
    <div className="page_wrapper">
      <Header />
      <div className="main_content_wrapper">
        <Sidebar />
        <div className="quiz_wrapper">
          <div className="quiz_input_wrapper">
            <h6 className="quiz_heading">Question</h6>
            <input
              type="text"
              className="quizz_input"
              placeholder="Enter a question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />

            <h6 className="quiz_heading">Attach image to quiz</h6>
            <input
              type="text"
              className="quizz_input"
              placeholder="Insert image URL..."
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />

            <h6 className="quiz_heading">Answer</h6>
            <input
              type="text"
              className="quizz_input"
              placeholder="Enter an answer..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>

          <div>
            <button className="quiz_button" onClick={addQuiz}>Add quiz</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateQuiz;
