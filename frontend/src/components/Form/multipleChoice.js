import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Form.scss";
import { ListHeader, List, ListItem } from "@code4ro/taskforce-fe-components";

function MultipleChoice({ question, onAnswer, currentResponse = [] }) {
  const [answers, setAnswers] = useState([]);
  const isSelected = option => {
    return currentResponse.includes(option.value);
  };

  const handleClick = option => {
    let newAnswers;
    if (answers.includes(option.value)) {
      newAnswers = answers.filter(item => item !== option.value);
    } else {
      newAnswers = [...answers, option.value];
    }
    setAnswers(newAnswers);
    onAnswer({
      questionId: question.questionId,
      value: newAnswers
    });
  };

  return (
    <div>
      <ListHeader title={question.questionText} />
      <div>
        <List>
          {question.options.map(option => (
            <ListItem
              key={`answer_${question.questionId}_${option.value}`}
              title={option.label}
              active={isSelected(option)}
              onClick={() => handleClick(option)}
            />
          ))}
        </List>
      </div>
    </div>
  );
}

MultipleChoice.propTypes = {
  question: PropTypes.shape({
    questionId: PropTypes.number.isRequired,
    questionText: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["FINAL", "SINGLE_CHOICE", "MULTIPLE_CHOICE"]),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
      })
    )
  }),
  onAnswer: PropTypes.func,
  currentResponse: PropTypes.arrayOf(PropTypes.number)
};

export default MultipleChoice;
