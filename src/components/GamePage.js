import React, { useEffect, useState } from "react";
import { RandomBlink, blink } from "./utils";
import "./GamePage.css";
import Box from "./Box";
import { useStateValue } from "../utlils/StateProvider";
import { Link } from "react-router-dom";


var gameSelectedList = [];
var userSelectedList = [];

const GamePage = () => {
  const colors = ["green", "red", "yellow", "blue", "white", "orange"];
  const [level, setLevel] = useState(1);
  const [heading, setHeading] = useState("Press 'Enter' to Start");
  const [score, setScore] = useState(0);
  const [view, setViewScore] = useState();
  const [{ name, historyname }, dispatch] = useStateValue();


  // Sending the new score to the list
  const addScoreList = () => {
    dispatch({
      type: "SCORE_LIST",
      item: {
        name: name,
        currentScore: score,
      },
    });
  };


  useEffect(() => {
    document.addEventListener("keydown", restartGame);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("keydown", restartGame);
      document.removeEventListener("click", handleClick);
    };
  });

  const handleClick = (e) => {
    if (e.target.className.includes("btn")) {
      blink(e.target);
      userSelectedList.push(e.target.id);
      checkAnswer(userSelectedList, gameSelectedList, userSelectedList.length);
      if (userSelectedList.length === gameSelectedList.length) {
        checkAnswer(
          userSelectedList,
          gameSelectedList,
          userSelectedList.length
        );
      }
    }
  };
  const continueGame = () => {
    setLevel(level + 1);
    setScore(score + 10);
    setHeading("Level " + level);
    setViewScore("Score " + score);
    setTimeout(() => {
      var selectNumer = RandomBlink(colors);
      gameSelectedList.push(colors[selectNumer]);
    }, 1000);

    userSelectedList = [];
  };
  const restartGame = (e) => {
    if (e.keyCode === 13) {
      gameSelectedList = [];
      userSelectedList = [];
      var selectNumer = RandomBlink(colors);
      gameSelectedList.push(colors[selectNumer]);
      setLevel(1);
      setScore(10);
      setHeading("Level " + level);
      setViewScore("Score " + score);
      document.body.style.backgroundColor = "#dee7f0";
    }
  };
  const checkAnswer = (list_1, list_2, index) => {
    if (list_1[index - 1] === list_2[index - 1]) {
      if (list_1.length === list_2.length) {
        continueGame();
      }
      return true;
    } else {
      document.body.style.backgroundColor = "rgb(204, 152, 152)";
      setLevel(1);
      setScore(0);
      setHeading("Game Over Press 'Enter' to continue");
      addScoreList();


      return false;
    }
  };
  return (
    <div className="GamePage">
      <h1 id="title">{heading}</h1>
      <h2 id="title">{view}</h2>
      <h3 id="name">{name}</h3>
      <Link to="scorelist">
        <h4 id="listScore">Score List</h4>
      </Link>
      <div className="container">
        <div className="row">
          <Box id="green" className="btn green" />
          <Box id="red" className="btn red" />
          <Box id="white" className="btn white" />
        </div>
        <div className="row">
          <Box id="yellow" className="btn yellow" />
          <Box id="blue" className="btn blue" />
          <Box id="orange" className="btn orange" />
        </div>
      </div>
    </div>
  );
}


export default GamePage;

//   <h4 id="score">{historyScore[0]?.currentScore}</h4>