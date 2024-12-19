
const users =  [
  {
    gender: "female",
    name: { title: "Mrs", first: "Julia", last: "Tervo" },
    email: "julia.tervo@example.com",
    picture: { large: "https://randomuser.me/api/portraits/women/49.jpg" },
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Radoje", last: "Ristović" },
    email: "radoje.ristovic@example.com",
    picture: { large: "https://randomuser.me/api/portraits/men/24.jpg" },
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Carl-Heinz", last: "Hammerschmidt" },
    email: "carl-heinz.hammerschmidt@example.com",
    picture: { large: "https://randomuser.me/api/portraits/men/90.jpg" },
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Nihal", last: "Koyuncu" },
    email: "nihal.koyuncu@example.com",
    picture: { large: "https://randomuser.me/api/portraits/men/92.jpg" },
  },
  {
    gender: "female",
    name: { title: "Miss", first: "Fabiënne", last: "De Beus" },
    email: "fabienne.debeus@example.com",
    picture: { large: "https://randomuser.me/api/portraits/women/66.jpg" },
  },
  // Add more users as necessary...
];

function Card({ first, last, gender, email, name, picture }) {
  return (
    <div className="card">
      <img src={picture.large} alt={`${first} ${last}`} />
      <h1>{first} {last}</h1>
      <h2>{gender}</h2>
      <h2>{email}</h2>
      <h3>{name.title}</h3>
    </div>
  );
}

function App() {
  const [count, setCount] = React.useState(2);
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users.filter(user => 
    `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="container">
      <div id="gare" >
        <input
          type="text"
          id="searchInput"
          placeholder="Search for users..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ padding: '10px', fontSize: '18px' }}
        />
      </div>

      <div id="shida">
        <button onClick={() => setCount(count + 1)}>Show More</button>
      </div>
      <div id="shida">
        <button onClick={() => setCount(count - 1)}>Show less</button>
      </div>

      <div id="qveda">
        {filteredUsers.slice(0, count).map((user, index) => (
          <Card {...user} key={index} />
        ))}
      </div>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
