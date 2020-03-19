import React, { useState } from "react";
import PropTypes from "prop-types";
import "./DecisionTree.scss";
import {
  Button,
  ListHeader,
  List,
  ListItem,
  Hero
} from "@code4ro/taskforce-fe-components";

function DecisionTree({ data }) {
  const [currentNode, setCurrentNode] = useState(
    data.nodes.find(node => node.node_id === 1)
  );
  const [backwardHistory, setBackwardHistory] = useState([]);
  const [forwardHistory, setForwardHistory] = useState([]);
  const [currentAnswers, setCurrentAnswers] = useState([]);

  const isNextNode = (a, b) => {
    let found = true;
    if (a.length !== b.length) return false;
    for (let i of a) {
      found = b.includes(i);
      if (!found) break;
    }
    return found;
  };

  const isSelected = answer => {
    return currentAnswers.includes(answer);
  };

  const setNextNode = () => {
    let nextState = null;
    if (forwardHistory.length > 0) {
      nextState = forwardHistory.shift();
    } else {
      const currentOption = currentNode.answers.find(node =>
        isNextNode(node.options, currentAnswers)
      );
      if (!currentOption) return;
      const nextNode = data.nodes.find(
        node => node.node_id === currentOption.result
      );
      if (!nextNode) return;
      nextState = {
        currentNode: nextNode,
        currentAnswers: [],
        forwardHistory: []
      };
    }

    setCurrentNode(nextState.currentNode);
    setCurrentAnswers(nextState.currentAnswers);
    setForwardHistory(nextState.forwardHistory);
    setBackwardHistory([
      ...backwardHistory,
      { currentNode, currentAnswers, forwardHistory, backwardHistory }
    ]);
  };

  const setPreviousNode = () => {
    const previousNode = backwardHistory.pop();

    setCurrentNode(previousNode.currentNode);
    setBackwardHistory(previousNode.backwardHistory);
    setCurrentAnswers(previousNode.currentAnswers);
    setForwardHistory([
      { currentNode, backwardHistory, currentAnswers, forwardHistory },
      ...forwardHistory
    ]);
  };

  const selectAnswer = answer => {
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

    setCurrentAnswers(res);
    setForwardHistory([]);
  };

  const init = () => {
    setCurrentNode(data.nodes.find(node => node.node_id === 1));
    setBackwardHistory([]);
    setCurrentAnswers([]);
    setForwardHistory();
  };

  const questionView = !currentNode ? null : (
    <div>
      <ListHeader title={currentNode.title} />
      <div>
        <List>
          {currentNode.type === "FINAL" ? (
            <ListItem title={currentNode.content} active={true}></ListItem>
          ) : (
            currentNode.options.map(answer => (
              <ListItem
                key={`answer_${currentNode.node_id}_${answer.option}`}
                title={answer.value}
                active={isSelected(answer.option)}
                onClick={() => selectAnswer(answer.option)}
              ></ListItem>
            ))
          )}
        </List>
      </div>
    </div>
  );
  return (
    <div>
      <Hero title={data.title} subtitle={data.content} useFallbackIcon={true} />
      {questionView}
      <div className="action-buttons">
        <Button onClick={init}>Reîncepe testul</Button>
        {backwardHistory && backwardHistory.length !== 0 && (
          <Button inverted={true} onClick={setPreviousNode}>
            Inapoi
          </Button>
        )}
        {currentNode && currentNode.type !== "FINAL" && (
          <Button inverted={true} onClick={setNextNode}>
            Inainte
          </Button>
        )}
      </div>
    </div>
  );
}

DecisionTree.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    nodes: PropTypes.arrayOf(
      PropTypes.shape({
        node_id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.oneOf(["FINAL", "SINGLE_CHOICE", "MULTIPLE_CHOICE"]),
        content: PropTypes.string,
        options: PropTypes.arrayOf(
          PropTypes.shape({
            option: PropTypes.number.isRequired,
            value: PropTypes.string.isRequired
          })
        ),
        answers: PropTypes.arrayOf(
          PropTypes.shape({
            options: PropTypes.arrayOf(PropTypes.number).isRequired,
            result: PropTypes.number.isRequired
          })
        )
      })
    )
  })
};

export default DecisionTree;
