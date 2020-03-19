import React, { Component } from "react";
import PropTypes from "prop-types";
import "./DecisionTree.scss";
import {
  Button,
  ListHeader,
  List,
  ListItem,
  Hero
} from "@code4ro/taskforce-fe-components";

export default class DecisionTree extends Component {
  propTypes = {
    data: PropTypes.any
  };

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
    const { data } = this.props;
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
        this.isNextNode(node.options, currentAnswers)
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
    if (currentNode.type === "SINGLE_CHOICE") {
      res = [answer];
    } else if (currentNode.type === "MULTIPLE_CHOICE") {
      if (currentAnswers.includes(answer)) {
        // Remove item if it is already selected
        res = currentAnswers.filter(canswer => canswer !== answer);
      } else {
        res = [...currentAnswers, answer];
      }
    }

    this.setState({
      currentAnswers: res,
      forwardHistory: []
    });
  }

  init = () => {
    const { data } = this.props;
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
    const { data } = this.props;
    const { currentNode, backwardHistory } = this.state;

    const questionView = !currentNode ? null : (
      <div className="question-content">
        <ListHeader title={currentNode.title} />
        <div className="options">
          <List>
            {currentNode.type === "FINAL" ? (
              <ListItem title={currentNode.content} active={true}></ListItem>
            ) : (
              currentNode.options.map(answer => (
                <ListItem
                  key={`answer_${currentNode.node_id}_${answer.option}`}
                  title={answer.value}
                  active={this.isSelected(answer.option)}
                  onClick={this.selectAnswer.bind(this, answer.option)}
                ></ListItem>
              ))
            )}
          </List>
        </div>
      </div>
    );
    return (
      <div>
        <Hero
          title={data.title}
          subtitle={data.content}
          useFallbackIcon={true}
        />
        {questionView}
        <div className="action-buttons">
          <Button onClick={this.init}>Reîncepe testul</Button>
          {backwardHistory && backwardHistory.length !== 0 && (
            <Button onClick={this.setPreviousNode}>Inapoi</Button>
          )}
          {currentNode && currentNode.type !== "FINAL" && (
            <Button onClick={this.setNextNode}>Inainte</Button>
          )}
        </div>
      </div>
    );
  }
}
