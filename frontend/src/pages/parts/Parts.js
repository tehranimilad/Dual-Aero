import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import './Parts.css';

function PartsComponent() {
  const [searchTerm, setSearchTerm] = useState('');

  const partsList = [
    { partNumber: "MS21069-3", partDescription: "Nut Plate" },
    { partNumber: "NAS333CPA4", partDescription: "Bolt" },
    // ... (add the rest of your parts data)
  ];

  const filteredParts = partsList.filter(part =>
    part.partNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    part.partDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <p className="slogan">Live Inventory of Parts</p>
      <div className="partsTable">
        <input
          type="text"
          placeholder="Search parts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Table striped bordered hover variant="blue">
          <thead>
            <tr className="tableHeader">
              <th>Part Number</th>
              <th>Part Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredParts.map((part, index) => (
              <tr key={index}>
                <td>{part.partNumber}</td>
                <td>{part.partDescription}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default PartsComponent;
