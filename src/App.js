import "./index.scss";
import Game from "./components/Game";
import Result from "./components/Result";
import { useState } from "react";

const questions = [
  {
    title: "What is React?",
    options: [
      "A JavaScript framework for building user interfaces.",
      "A programming language.",
      "A server-side platform.",
    ],
    correct: 0,
  },
  {
    title: "What is JSX?",
    options: [
      "A syntax extension for JavaScript.",
      "A package manager for React applications.",
      "A CSS-in-JS solution.",
    ],
    correct: 0,
  },
  {
    title: "What is the virtual DOM in React?",
    options: [
      "A lightweight version of the Document Object Model.",
      "A concept to describe the structure of a React component.",
      "A virtual representation of the actual HTML DOM.",
    ],
    correct: 2,
  },
  {
    title: "What is the purpose of the render() method in React?",
    options: [
      "To update the state of a component.",
      "To handle user input and trigger events.",
      "To return the JSX elements that should be rendered to the DOM.",
    ],
    correct: 2,
  },
  {
    title: "What is the significance of React's key prop?",
    options: [
      "It is used to uniquely identify elements in an array of siblings.",
      "It determines the color scheme of a React component.",
      "It controls the visibility of a React component.",
    ],
    correct: 0,
  },
  {
    title: "What is the purpose of React Router?",
    options: [
      "To manage the state of a React application.",
      "To handle HTTP requests in a React application.",
      "To enable client-side routing in a React application.",
    ],
    correct: 2,
  },
  {
    title: "What is JavaScript?",
    options: [
      "A scripting language for adding interactivity to web pages.",
      "A markup language for structuring content on the web.",
      "A programming language for defining the style of web pages.",
    ],
    correct: 0,
  },
  {
    title: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
    ],
    correct: 0,
  },
  {
    title: "What is CSS used for?",
    options: [
      "Styling the visual presentation of a web page.",
      "Defining the structure and content of a web page.",
      "Handling server-side functionality of a web page.",
    ],
    correct: 0,
  },
  {
    title: "What is the purpose of the 'script' tag in HTML?",
    options: [
      "To define the structure and layout of a web page.",
      "To include external JavaScript files.",
      "To specify the CSS styles for a web page.",
    ],
    correct: 1,
  },
  {
    title: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets",
    ],
    correct: 0,
  },
  {
    title: "What is the syntax for declaring a JavaScript variable?",
    options: ["var myVariable;", "let myVariable;", "const myVariable;"],
    correct: 2,
  },
  {
    title: "What is the purpose of the 'class' attribute in HTML?",
    options: [
      "To define a reusable template for creating multiple elements with the same styles.",
      "To specify the ID of an element.",
      "To include external CSS files.",
    ],
    correct: 0,
  },
  {
    title: "What is the CSS box model?",
    options: [
      "A model used to define the structure of an HTML document.",
      "A model used to calculate and render the size of HTML elements.",
      "A model used to handle events in JavaScript.",
    ],
    correct: 1,
  },
  {
    title: "What is the purpose of the 'querySelector' method in JavaScript?",
    options: [
      "To add event listeners to HTML elements.",
      "To select and manipulate HTML elements in the document.",
      "To create new HTML elements in the document.",
    ],
    correct: 1,
  },
];

function App() {
  const [correct, setCorrect] = useState(0);
  const [step, setStep] = useState(0);
  const question = questions[step];

  const onClickOption = (index) => {
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
    setStep(step + 1);
  };

  const restartGame = () => {
    setStep(0);
    setCorrect(0);
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          questions={questions}
          step={step}
          question={question}
          onClickOption={onClickOption}
        />
      ) : (
        <Result
          correct={correct}
          total={questions.length}
          restart={restartGame}
        />
      )}
    </div>
  );
}

export default App;
