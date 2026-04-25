
import './App.css'
import { useState } from "react";

function App() {
  const [name, setName] = useState({
    first: "",
    last: "",
  });

  const [submittedName, setSubmittedName] = useState(null);

  const handleChange = (e) => {
    const { name: fieldName, value } = e.target;

    setName((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save submitted values separately
    setSubmittedName(name);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Full Name Display</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            name="first"
            value={name.first}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Last Name: </label>
          <input
            type="text"
            name="last"
            value={name.last}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Show only after submit */}
      {submittedName && (
        <p>
          Full Name: {submittedName.first} {submittedName.last}
        </p>
      )}
    </div>
  );
}

export default App;
