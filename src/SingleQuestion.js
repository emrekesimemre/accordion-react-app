import React from 'react';
import { useState } from 'react';
import { BiArrowToBottom, BiArrowToTop } from 'react-icons/bi';

const SingleQuestion = ({ question }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  const { title, info } = question;
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={handleClick} className="btn">
          {showInfo ? <BiArrowToTop /> : <BiArrowToBottom />}
        </button>
      </header>
      {showInfo ? <p>{info}</p> : ''}
    </article>
  );
};

export default SingleQuestion;
