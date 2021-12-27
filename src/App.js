import { useState } from 'react';
import './App.css';
import data from './data';
import SingleQuestion from './SingleQuestion';

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>questions adn answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} question={question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
