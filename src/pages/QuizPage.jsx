// src/pages/QuizPage.jsx
import { useState, useEffect } from 'react';
import { Card, Button, ArrowLeft, CheckCircle, X } from '../components/UI';
import { animals, categories } from '../data';
import { AnimalImage } from '../components/AnimalImage';

export const QuizPage = ({ goToPage }) => {
  const [quizAnimals, setQuizAnimals] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    const shuffled = [...animals].sort(() => Math.random() - 0.5);
    setQuizAnimals(shuffled.slice(0, 10));
  }, []);

  const handleAnswer = (selectedCategory) => {
    const currentAnimal = quizAnimals[currentIndex];
    const isCorrect = selectedCategory === currentAnimal.category;

    setShowFeedback(isCorrect ? 'correct' : 'incorrect');
    if (isCorrect) setScore(prev => prev + 1);

    setTimeout(() => {
      setShowFeedback(null);
      if (currentIndex + 1 >= quizAnimals.length) {
        setQuizCompleted(true);
      } else {
        setCurrentIndex(prev => prev + 1);
      }
    }, 1500);
  };

  if (quizAnimals.length === 0) {
    return (
      <div className="quiz-loading">
        <div className="loading-content">
          <div className="loading-icon">🎲</div>
          <p className="loading-text">Preparing your quiz...</p>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    const percentage = Math.round((score / quizAnimals.length) * 100);
    return (
      <div className="quiz-completed">
        <Card className="completion-card">
          <div className="completion-icon">
            {percentage >= 80 ? '🏆' : percentage >= 60 ? '🎉' : '👏'}
          </div>
          <h2 className="completion-title">
            {percentage >= 80 ? 'Excellent!' : percentage >= 60 ? 'Great Job!' : 'Good Try!'}
          </h2>
          <p className="completion-score">
            You got <span className="score-correct">{score}</span> out of <span className="score-total">{quizAnimals.length}</span> correct!
          </p>
          <p className="completion-percentage">
            That's <span className="percentage-value">{percentage}%</span> correct!
          </p>

          <div className="completion-actions">
            <Button onClick={() => window.location.reload()} className="play-again-btn">Play Again! 🔄</Button>
            <Button onClick={() => goToPage('overview')} variant="outline" className="back-to-animals-btn">
              Back to Animals
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  const currentAnimal = quizAnimals[currentIndex];
  const progress = ((currentIndex + 1) / quizAnimals.length) * 100;

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <div className="quiz-header">
          <Button onClick={() => goToPage('overview')} variant="outline" className="quiz-back-btn">
            <ArrowLeft className="back-icon" /> Back
          </Button>

          <div className="quiz-progress-text">
            Question {currentIndex + 1} of {quizAnimals.length}
          </div>

          <div className="quiz-score">Score: {score}</div>
        </div>

        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>

        <Card className="question-card">
          <h2 className="question-title">Where does this animal live?</h2>

          <div className="question-animal">
            <AnimalImage
              src={currentAnimal.image}
              alt={currentAnimal.name}
              className="question-animal-image"
              fallbackText={currentAnimal.name}
            />
            <h3 className="question-animal-name">{currentAnimal.name}</h3>
          </div>

          <div className="answer-options">
            {categories.map(cat => (
              <Button
                key={cat.id}
                onClick={() => handleAnswer(cat.id)}
                disabled={showFeedback !== null}
                className={`answer-option ${cat.bgColor} ${cat.color}`}
                variant="outline"
              >
                <span className="answer-icon">{cat.icon}</span>
                {cat.name}
              </Button>
            ))}
          </div>
        </Card>

        {showFeedback && (
          <div className="feedback-overlay">
            <Card className={`feedback-card ${showFeedback === 'correct' ? 'feedback-correct' : 'feedback-incorrect'}`}>
              <div className="feedback-icon">
                {showFeedback === 'correct' ? <CheckCircle /> : <X />}
              </div>
              <h3 className={`feedback-title ${showFeedback}-title`}>
                {showFeedback === 'correct' ? 'Correct! 🎉' : 'Try Again! 💪'}
              </h3>
              <p className="feedback-text">
                {showFeedback === 'correct'
                  ? `Yes! ${currentAnimal.name} lives ${currentAnimal.category === 'land' ? 'on land' : currentAnimal.category === 'water' ? 'in water' : 'in the air'}!`
                  : `${currentAnimal.name} actually lives ${currentAnimal.category === 'land' ? 'on land' : currentAnimal.category === 'water' ? 'in water' : 'in the air'}!`}
              </p>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};
