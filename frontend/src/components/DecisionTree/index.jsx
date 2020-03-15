import React, { Component } from "react";
import Data from "./mock_data.json";
import Check from "../../images/check.svg";
import "./DecisionTree.scss";

export default class DecisionTree extends Component {
  state = {
    currentNode: null,
    backwardHistory: [],
    forwardHistory: [],
    currentAnswers: []
  };

  isNextNode(a, b) {
    let found = true;
    if (a.length !== b.length) return false;
    for (let i of a) {
      found = b.includes(i);
      if (!found) break;
    }
    return found;
  }

  isSelected = answer => {
    const { currentAnswers } = this.state;
    return currentAnswers.includes(answer);
  };

  setNextNode = () => {
    const data = Data;
    const {
      currentNode,
      currentAnswers,
      backwardHistory,
      forwardHistory
    } = this.state;
    let nextState = null;
    if (forwardHistory.length > 0) {
      nextState = forwardHistory.shift();
    } else {
      const currentOption = currentNode.answers.find(node =>
        this.isNextNode(node.option, currentAnswers)
      );
      if (!currentOption) return;
      const nextNode = data.nodes.find(
        node => node.node_id === currentOption.result
      );
      if (!nextNode) return;
      nextState = {
        currentNode: nextNode,
        currentAnswers: []
      };
    }

    this.setState({
      ...nextState,
      backwardHistory: [...backwardHistory, { ...this.state }]
    });
  };

  setPreviousNode = () => {
    const { backwardHistory, forwardHistory } = this.state;
    const previousNode = backwardHistory.pop();
    this.setState({
      ...previousNode,
      forwardHistory: [{ ...this.state }, ...forwardHistory]
    });
  };

  selectAnswer(answer) {
    const { currentNode, currentAnswers } = this.state;
    let res = [];
    if (currentNode.type === "single_choice") {
      res = [answer];
    } else if (currentNode.type === "multiple_choice") {
      if (currentAnswers.includes(answer)) {
        // Remove item if it is already selected
        res = currentAnswers.filter(canswer => canswer !== answer);
      } else {
        res = [...currentAnswers, answer];
      }
    }

    this.setState({
      currentAnswers: res
    });
  }

  init = () => {
    const data = Data;
    this.setState({
      currentNode: data.nodes.filter(node => node.node_id === 1)[0],
      backwardHistory: [],
      forwardHistory: [],
      currentAnswers: []
    });
  };

  componentDidMount() {
    this.init();
  }

  render() {
    const data = Data;
    const { currentNode, backwardHistory } = this.state;
    const questionView = !currentNode ? null : (
      <div className="question-content">
        <div className="question">{currentNode.title}</div>
        <div className="options">
          {currentNode.options.map(answer => (
            <div
              className={`option ${
                this.isSelected(answer.option) ? "selected" : ""
              }`}
              key={`answer_${answer.option}`}
              onClick={this.selectAnswer.bind(this, answer.option)}
            >
              <div className="answer-check">
                <img src={Check} alt="check"></img>
              </div>
              <div className="answer-text">{answer.value}</div>
            </div>
          ))}
        </div>
      </div>
    );
    return (
      <div>
        <h2>{data.title}</h2>
        <p>{data.content}</p>
        {questionView}
        <div className="action-buttons">
          <button onClick={this.init}>Reîncepe testul</button>
          {!backwardHistory || !backwardHistory.length ? null : (
            <button onClick={this.setPreviousNode}>Inapoi</button>
          )}
          <button onClick={this.setNextNode}>Inainte</button>
        </div>
      </div>
    );
  }
}
