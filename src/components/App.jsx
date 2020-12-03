import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  const [contact1, setContact1] = useState("");
  function handleChange(event) {
    const { value, name } = event.target;
    setContact((preValue) => {
      if (name === "fName") {
        return { fName: value, lName: preValue.lName, email: preValue.email };
      } else if (name === "lName") {
        return { fName: preValue.fName, lName: value, email: preValue.email };
      } else if (name === "email") {
        return { fName: preValue.fName, lName: preValue.lName, email: value };
      }
    });
  }

  function showSubmit() {
    setContact1(contact);
  }

  return (
    <div className="container">
      <h1>
        Hello {contact1.fName} {contact1.lName}
      </h1>
      <p>{contact1.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button onClick={showSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
