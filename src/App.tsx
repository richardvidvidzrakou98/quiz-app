import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import HomePage from './pages/HomePage';
import QuestionsPage from './pages/QuestionsPage';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz/:subject" element={<QuestionsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
