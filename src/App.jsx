import { useState } from 'react';
import './App.css';
import { HomePage } from './pages/HomePage';
import { OverviewPage } from './pages/OverviewPage';
import { QuizPage } from './pages/QuizPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const goToPage = (page) => setCurrentPage(page);

  switch (currentPage) {
    case 'home': return <HomePage goToPage={goToPage} />;
    case 'overview': return <OverviewPage goToPage={goToPage} />;
    case 'quiz': return <QuizPage goToPage={goToPage} />;
    default: return <HomePage goToPage={goToPage} />;
  }
}

export default App;
