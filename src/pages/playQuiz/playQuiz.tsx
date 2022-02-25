import React, { useEffect, useState } from 'react';
import './playQuiz.scss';
import axios, { AxiosResponse } from 'axios';

type Quiz = {
  title: string,
  timeLimit?: 'PT5S',
  questions: [
    {content: string,
      imageURL: string,
      points: 0,
      answers: [{
        content:string,
        correct:true
      }]}
  ]
};

const PlayQuiz = () => {
  const [quiz, setQuiz] = useState<Quiz[]>([]);
  useEffect(() => {
    axios.get('/account-api/quizzes').then((response) => setQuiz(response.data.items));
  }, []);

  return (
    <div>
      <div>There will be a quizz</div>
      {
        quiz.map((item) => (
          <div key={item.questions[0].content}>
            <h1>{item.title}</h1>
            <p>{item.questions[0].content}</p>
            <h6>{item.questions[0].answers[0].content}</h6>
          </div>
        ))
       }
    </div>
  );
};
export default PlayQuiz;
