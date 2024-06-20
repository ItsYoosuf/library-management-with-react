// Desc: Main App component
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar'
import AddBook from './Components/addBook';
import AddUser from './Components/addUser';
import DisplayUser from './Components/displayUser'
function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
      <Routes>
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/display-users" element={<DisplayUser />} />
        <Route path="/" element={<></>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
