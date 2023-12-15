import React, { useState, useEffect } from 'react';

function PartsComponent() {
  const [parts, setParts] = useState([]);
  const [newPartName, setNewPartName] = useState('');

  useEffect(() => {
    // Fetch parts from the backend when the component mounts
    fetch('http://localhost:5000/api/parts')
      .then((response) => response.json())
      .then((data) => setParts(data))
      .catch((error) => console.error('Error fetching parts:', error));
  }, []);

  const handleAddPart = (e) => {
    e.preventDefault();

    if (newPartName.trim() === '') {
      return;
    }

    // Send a POST request to add a new part
    fetch('http://localhost:5000/api/parts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: newPartName }),
    })
      .then((response) => response.json())
      .then((data) => setParts([...parts, data]))
      .catch((error) => console.error('Error adding part:', error));

    setNewPartName('');
  };

  return (
    <div>
      {/* Display existing parts */}
      {parts.map((part) => (
        <div key={part._id}>{part.name}</div>
      ))}

      {/* Form to add new parts */}
      <form onSubmit={handleAddPart}>
        <input
          type="text"
          placeholder="Part Name"
          value={newPartName}
          onChange={(e) => setNewPartName(e.target.value)}
        />
        <button type="submit">Add Part</button>
      </form>
    </div>
  );
}

export default PartsComponent;