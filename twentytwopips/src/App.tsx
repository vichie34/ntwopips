// import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './components/Landingpage/landingpage';
import News from './components/News';
import Dashboard from './components/Dashboard/page';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} /> {/* Home page route */}
        <Route path="/news" element={<News />} /> {/* News page route */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;