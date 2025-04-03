// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const messages = [
    {
      message: "Learn React ⚛️",
      info: "Look at React's documentation!",
    },
    {
      message: "Apply for jobs 💼",
      info: "Use an online tool to search for tech job listings around you that require the use of React.",
    },
    {
      message: "Invest your new income 🤑",
      info: "Start a homelab to self-host anything & everything",
    },
  ];

  function handlePrevious() {
    if (step > 1) setStep((curStep) => curStep - 1);
  }

  function handleNext() {
    if (step < messages.length) setStep((curStep) => curStep + 1);
  }

  function handleClose() {
    setIsOpen((isOpen) => !isOpen);
    setStep((curStep) => (curStep !== 1 ? (curStep = 1) : (curStep = 1)));
    // if (step !== 1) setStep(1);
  }

  return (
    <div>
      <button className="close" onClick={handleClose}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1].message}</StepMessage>
          <div className="step-button">
            <Button
              onHandle={() => alert(messages[step - 1].info)}
              bgColor={"#7950f2"}
              color={"#fff"}
            >
              Learn How
            </Button>
          </div>

          <div className="buttons">
            <Button
              onHandle={handlePrevious}
              bgColor={"#7950f2"}
              color={"#fff"}
            >
              <span>&larr;</span> Previous
            </Button>
            <Button onHandle={handleNext} bgColor={"#7950f2"} color={"#fff"}>
              Next<span>&rarr;</span>
            </Button>
            {/* <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ onHandle, bgColor, color, children }) {
  return (
    <>
      <button
        style={{ backgroundColor: bgColor, color: color }}
        onClick={onHandle}
      >
        {children}
      </button>
    </>
  );
}

{
  /* <p className="message">
  Step {step}: {messages[step - 1]}
</p>; */
}

function StepMessage({ step, children }) {
  return (
    <>
      <p className="message">
        Step {step}: {children}
      </p>
    </>
  );
}
