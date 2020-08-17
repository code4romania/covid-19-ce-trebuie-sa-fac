import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SingleChoice from "./singleChoice";
import MultipleChoice from "./multipleChoice";
import Results from "./results";
import "./Form.scss";
import { Button } from "@code4ro/taskforce-fe-components";

function Form({ data }) {
  // TODO: at some point, allow for answers to some questions to affect the visibility of other questions
  const [formState, setFormState] = useState({});
  const [currentNode, setCurrentNode] = useState(0);
  const init = () => {
    setCurrentNode(data.firstNodeId);
    setFormState({});
  };

  useEffect(() => {
    init();
  }, [data.form]); // eslint-disable-line

  const answerCurrentQuestion = (answer) => {
    setFormState({
      ...formState,
      [answer.questionId]: answer.value,
    });
  };

  const questionView = () => {
    const currentQuestion = data.form[currentNode];
    // TODO: add components for other question types
    switch (currentQuestion.type) {
      case "SINGLE_CHOICE": {
        return (
          <SingleChoice
            question={currentQuestion}
            currentResponse={formState[currentQuestion.questionId]}
            onAnswer={answerCurrentQuestion}
          />
        );
      }
      case "MULTIPLE_CHOICE": {
        return (
          <MultipleChoice
            question={currentQuestion}
            currentResponse={formState[currentQuestion.questionId]}
            onAnswer={answerCurrentQuestion}
          />
        );
      }
      case "FINAL": {
        return <Results question={currentQuestion} answers={formState} />;
      }
      default:
        return null;
    }
  };

  const goToNextQuestion = () => {
    // TODO use the disabled prop once the Button component implements it
    if (formState[data.form[currentNode].questionId] !== undefined) {
      setCurrentNode(currentNode + 1);
    }
  };
  const goToPreviousQuestion = () => {
    setCurrentNode(currentNode - 1);
  };

  return (
    <div>
      {questionView()}
      <div className="level action-buttons">
        <div className="level-left">
          {currentNode > 0 && (
            <div className="level-item">
              <Button inverted={true} onClick={goToPreviousQuestion}>
                Inapoi
              </Button>
            </div>
          )}
          {currentNode < data.form.length - 1 && (
            <div className="level-item">
              <Button onClick={goToNextQuestion}>Inainte</Button>
            </div>
          )}
        </div>
        <div className="level-right">
          {data.form && (
            <Button inverted={true} onClick={init}>
              Reîncepe testul
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

Form.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        page: PropTypes.string.isRequired,
      })
    ),
    firstNodeId: PropTypes.number.isRequired,
    form: PropTypes.arrayOf(
      PropTypes.shape({
        questionId: PropTypes.number.isRequired,
        questionText: PropTypes.string.isRequired,
        type: PropTypes.oneOf(["FINAL", "SINGLE_CHOICE", "MULTIPLE_CHOICE"]),
        options: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
          })
        ),
      })
    ),
  }),
};

export default Form;
