import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  const [User, setUser] = useState([
    { name: "Julia", age: 26 },
    { name: "Niko", age: 28 },
    { name: "Yoda", age: 6 },
    { name: "", age: 6 }
  ]);

  const [RandomAge, setRandomAge]  = useState ( Math.floor(Math.random() * 30) )

  const switchNameHandler = () => {
    const randomArrayNumber = Math.round(Math.random() * (User.length -1))
    const newName = User[randomArrayNumber].name;
    const newAge = User[randomArrayNumber].age;

    const newUsers = [...User]
    newUsers[0].name = newName
    newUsers[0].age = newAge

    setUser(newUsers)
    setRandomAge( Math.floor(Math.random() * 30) );
  }

  const nameChangeHandler = (event) => {
    const newUsers = [...User];
    newUsers[3].name = event.target.value;
    setUser(newUsers);
  }

  return (
    <div className="App">
      <h1>Hi, I'm a ReactApp</h1>
      <button onClick={() => switchNameHandler()}>Switch Name</button>
      <Person name={User[0].name} age={User[0].age} click={() => switchNameHandler()}>
        Hobbies: Gym
      </Person>
      <Person name={User[3].name} age={User[3].age} click={() => switchNameHandler()}>
      <input type="text"  onChange={(e) => nameChangeHandler(e)}></input>
      </Person>
      <Person name={"a Person"} age={RandomAge} />
    </div>
  );
}

export default App;
