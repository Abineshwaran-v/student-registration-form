import { useState } from "react";
import "./App.css";

function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dept, setDept] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Registration Successful!\n\n" +
      "Name: " + name +
      "\nAge: " + age +
      "\nDepartment: " + dept
    );
  };

  return (
    <div className="container">

      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Age:</label>
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <label>Department:</label>
        <select
          value={dept}
          onChange={(e) => setDept(e.target.value)}
          required
        >
          <option value="">Select Department</option>
          <option value="CSE">CSE</option>
          <option value="AIML">AIML</option>
          <option value="IT">IT</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
        </select>

        <button type="submit">Submit</button>

      </form>

    </div>
  );
}

export default App;