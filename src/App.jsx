import React, { useState } from 'react';

import SideBar from './components/SideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

import {DataProvider} from '../src/context/DataContext'
import BookList from './components/BookList';
import HomePage from './pages/HomePage';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <DataProvider>
      <main className={`main-content ${isOpen ? 'expanded' : ''}`}>
        <Router>
      <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/books" element={<BookList />} />
              {/* Add more routes here as needed */}
            </Routes>
            </Router>
      </main>
      </DataProvider>

    </div>
  );
}

export default App;
