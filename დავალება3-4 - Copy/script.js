import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const users = [
  // ... the user data (same as in your example)
];

function Card({ first, last, gender, email, name }) {
  return (
    <div className="shopping-item">
      <h1>{first} {last}</h1>
      <h2 style={{ fontSize: '24px' }}>{gender}</h2>
      <h2 style={{ fontSize: '24px' }}>{email}</h2>
      <h2 style={{ fontSize: '24px' }}>{name.title}</h2>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search input changes
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter users based on the search query
  const filteredUsers = users.filter(user => 
    `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="container">
      {/* Search bar */}
      <div>
        <input
          type="text"
          id="myInput"
          placeholder="Search for users..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ padding: '10px', fontSize: '18px' }}
        />
      </div>

      {/* Show more button */}
      <div>
        <button onClick={() => setCount(count + 5)}>Show More</button>
      </div>

      {/* Display filtered users */}
      <div>
        {filteredUsers.slice(0, count).map((user, index) => (
          <Card {...user} key={index} />
        ))}
      </div>
    </main>
  );
}

// Use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);