import React, { ChangeEvent, useState } from 'react';
import './createQuiz.scss';
import axios from 'axios';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';

type Quiz = {
  title: string,
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
  const [quiztitle, setQuizTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [imgURL, setImgURL] = useState('');
  const [answer, setAnswer] = useState('');

  const addQuiz = () => {
    axios.put('account-api/quizzes', {
      title: quiztitle,
      timeLimit: 'PT5S',
      questions: [{
        content: question,
        imageURL: imgURL,
        points: 1,
        answers: [{
          content: answer,
          correct: true,
        }],
      }],
    })
      .then((response) => {
        setQuizTitle(quiztitle);
        setQuestion(question);
        setImgURL(imgURL);
        setAnswer(answer);
      });
  };

  return (
    <div className="page_wrapper">
      <Header />
      <div className="main_content_wrapper">
        <Sidebar />
        <div className="quiz_wrapper">
          <div className="quiz_input_wrapper">
            <h6 className="quiz_heading">Quiz title</h6>
            <input
              type="text"
              className="quizz_input"
              placeholder="Title"
              value={quiztitle}
              onChange={(e) => setQuizTitle(e.target.value)}
            />

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
              value={imgURL}
              onChange={(e) => setImgURL(e.target.value)}
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
