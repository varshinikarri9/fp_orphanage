import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Donate from './components/Donate';
import Login from './components/Login';


function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'donate':
        return <Donate />;
      
      case 'login':
        return <Login />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar changePage={setPage} />
      <div className="content">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
