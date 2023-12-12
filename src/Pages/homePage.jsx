import React from 'react';
import "../Style/homeStyle.css"
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  
const navigate = useNavigate();
    
    const logout = ()=>{
        localStorage.removeItem('email')
        navigate("/loginpages")
    }
  
    return (
        <div>
        <header>
          <h1> Home Page</h1>
        </header>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <button onClick={logout}>Logout</button>
          </ul>
        </nav>
        <main>
          <p>Welcome to our responsive home page. Feel free to explore the content!</p>
        </main>
        <footer>
          <p>&copy; 2023 Your Company</p>
        </footer>
      </div>
    );
  };
export default HomePage