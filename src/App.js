import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  const [User, changeUser] = useState([
    { name: "Julia", age: 26 },
    { name: "Niko", age: 28 },
    { name: "Yoda", age: 6 }
  ]);

  const switchNameHandler = () => {
    const randomArrayNumber = Math.round(Math.random() * (User.length -1))
    const newName = User[randomArrayNumber].name;
    const newAge = User[randomArrayNumber].age;
    console.log(newName, newAge);

    const newUsers = [...User]
    newUsers[0].name = newName
    newUsers[0].age = newAge

    changeUser(newUsers)
  }

  return (
    <div className="App">
      <h1>Hi, I'm a ReactApp</h1>
      <button onClick={() => switchNameHandler()}>Switch Name</button>
      <Person name={User[0].name} age={User[0].age}>
        Hobbies: Gym
      </Person>
      <Person />
      <Person />
    </div>
  );
}

export default App;
