import React from 'react';

import {
  BrowserRouter as Router
} from 'react-router-dom'

// Compoment
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

import './index.css';

const App = () => (
  <Router>
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  </Router>
)

export default App
