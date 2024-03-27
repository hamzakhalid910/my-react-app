import React, { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounterHandler() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function Student(props) {
    return (
      <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes" : "No"}</p>
      </div>
    );
  }

  Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    student: PropTypes.bool,
  };

  Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
  };

  function Person() {
    const [name, setName] = useState("H");

    const updateName = () => {
      setName("Hamza R");
    };

    return (
      <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Update Name</button>
      </div>
    );
  }

  return (
    <main className="app">
      <p>{counter}</p>
      <button onClick={incrementCounterHandler}>Increment</button>
      <Student name="Hamza" age={30} isStudent={true} />
      <Student />
      <Person />
    </main>
  );
}

export default App;
