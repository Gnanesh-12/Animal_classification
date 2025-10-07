'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Star, Play, ArrowLeft, CheckCircle, X } from 'lucide-react'
import '../styles/main.css'
import '../styles/animations.css'

const animals = [
  // Land Animals
  { id: '1', name: 'Cow', category: 'land', image: '/cute-cow-cartoon.png' },
  { id: '2', name: 'Lion', category: 'land', image: '/friendly-lion-cartoon.png' },
  { id: '3', name: 'Dog', category: 'land', image: '/happy-cartoon-dog.png' },
  { id: '4', name: 'Pig', category: 'land', image: '/cute-pig-cartoon.png' },
  { id: '5', name: 'Elephant', category: 'land', image: '/friendly-elephant-cartoon.png' },
  { id: '6', name: 'Cat', category: 'land', image: '/cute-cat-cartoon.png' },
  { id: '7', name: 'Tiger', category: 'land', image: '/friendly-tiger-cartoon.png' },
  { id: '8', name: 'Horse', category: 'land', image: '/cute-horse-cartoon.png' },
  
  // Water Animals
  { id: '9', name: 'Fish', category: 'water', image: '/colorful-fish-cartoon.png' },
  { id: '10', name: 'Dolphin', category: 'water', image: '/friendly-dolphin-cartoon.png' },
  { id: '11', name: 'Whale', category: 'water', image: '/cute-whale-cartoon.png' },
  { id: '12', name: 'Shark', category: 'water', image: '/friendly-shark-cartoon.png' },
  { id: '13', name: 'Octopus', category: 'water', image: '/cute-octopus-cartoon.png' },
  
  // Air Animals
  { id: '14', name: 'Bird', category: 'air', image: '/colorful-bird-cartoon.png' },
  { id: '15', name: 'Eagle', category: 'air', image: '/majestic-eagle-cartoon.png' },
  { id: '16', name: 'Butterfly', category: 'air', image: '/beautiful-butterfly-cartoon.png' },
  { id: '17', name: 'Bee', category: 'air', image: '/cute-bee-cartoon.png' },
  { id: '18', name: 'Owl', category: 'air', image: '/wise-owl-cartoon.png' },
]

const categories = [
  { 
    id: 'land', 
    name: 'Land Animals', 
    color: 'land-text', 
    bgColor: 'land-bg',
    icon: '🌍'
  },
  { 
    id: 'water', 
    name: 'Water Animals', 
    color: 'water-text', 
    bgColor: 'water-bg',
    icon: '🌊'
  },
  { 
    id: 'air', 
    name: 'Air Animals', 
    color: 'air-text', 
    bgColor: 'air-bg',
    icon: '☁️'
  },
]

export default function AnimalHabitatApp() {
  const [currentPage, setCurrentPage] = useState('home')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showFeedback, setShowFeedback] = useState(null)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [quizAnimals, setQuizAnimals] = useState([])

  const handleAnswer = (selectedCategory) => {
    const currentAnimal = quizAnimals[currentQuestionIndex]
    const isCorrect = selectedCategory === currentAnimal.category

    setShowFeedback(isCorrect ? 'correct' : 'incorrect')
    
    if (isCorrect) {
      setScore(prev => prev + 1)
    }

    setTimeout(() => {
      setShowFeedback(null)
      
      if (currentQuestionIndex + 1 >= quizAnimals.length) {
        setQuizCompleted(true)
      } else {
        setCurrentQuestionIndex(prev => prev + 1)
      }
    }, 1500)
  }

  const resetQuiz = () => {
    const shuffled = [...animals].sort(() => Math.random() - 0.5)
    const selected = shuffled.slice(0, 10)
    setQuizAnimals(selected)
    setCurrentQuestionIndex(0)
    setScore(0)
    setShowFeedback(null)
    setQuizCompleted(false)
  }

  const goToPage = (page) => {
    setCurrentPage(page)
    if (page === 'quiz') {
      resetQuiz()
    }
  }

  // Homepage Component
  const HomePage = () => (
    <div className="homepage">
      <div className="homepage-container">
        <div className="homepage-header">
          <div className="homepage-icon">🌍</div>
          <h1 className="homepage-title">
            <Star className="title-star" />
            Animal Habitats
            <Star className="title-star" />
          </h1>
          <p className="homepage-subtitle">
            Discover where animals live - on land, in water, or in the air!
          </p>
        </div>
        
        <Card className="homepage-card">
          <div className="homepage-content">
            <h2 className="homepage-section-title">Learn About Animal Homes</h2>
            
            <div className="categories-grid">
              {categories.map((category) => (
                <div key={category.id} className={`category-preview ${category.bgColor}`}>
                  <div className="category-icon">{category.icon}</div>
                  <p className={`category-name ${category.color}`}>{category.name}</p>
                  <p className="category-description">
                    {category.id === 'land' && 'Animals that walk and run'}
                    {category.id === 'water' && 'Animals that swim'}
                    {category.id === 'air' && 'Animals that fly'}
                  </p>
                </div>
              ))}
            </div>
            
            <Button 
              onClick={() => goToPage('overview')}
              size="lg"
              className="get-started-btn"
            >
              Get Started! 🚀
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )

  // Animals Overview Component
  const OverviewPage = () => (
    <div className="overview-page">
      <div className="overview-container">
        <div className="overview-header">
          <Button 
            onClick={() => goToPage('home')}
            variant="outline"
            className="back-btn"
          >
            <ArrowLeft className="back-icon" />
            Back to Home
          </Button>
          
          <h1 className="overview-title">
            <span>🌍</span>
            Animal Habitats
            <span>🌊</span>
          </h1>
          
          <Button 
            onClick={() => goToPage('quiz')}
            className="play-quiz-btn"
          >
            <Play className="play-icon" />
            Play Quiz!
          </Button>
        </div>

        <div className="categories-section">
          {categories.map((category) => {
            const categoryAnimals = animals.filter(animal => animal.category === category.id)
            
            return (
              <Card key={category.id} className={`category-card ${category.bgColor}`}>
                <h2 className={`category-title ${category.color}`}>
                  <span className="category-title-icon">{category.icon}</span>
                  {category.name}
                  <span className="category-title-icon">{category.icon}</span>
                </h2>
                
                <p className="category-info">
                  {category.id === 'land' && 'These animals live and move on the ground 🦶'}
                  {category.id === 'water' && 'These animals live and swim in water 🏊‍♂️'}
                  {category.id === 'air' && 'These animals can fly through the sky ✈️'}
                </p>
                
                <div className="animals-grid">
                  {categoryAnimals.map((animal) => (
                    <Card key={animal.id} className="animal-card">
                      <div className="animal-content">
                        <img
                          src={animal.image || "/placeholder.svg"}
                          alt={animal.name}
                          className="animal-image"
                        />
                        <h3 className="animal-name">{animal.name}</h3>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )

  // Quiz Component
  const QuizPage = () => {
    if (quizAnimals.length === 0) {
      return (
        <div className="quiz-loading">
          <div className="loading-content">
            <div className="loading-icon">🎲</div>
            <p className="loading-text">Preparing your quiz...</p>
          </div>
        </div>
      )
    }

    if (quizCompleted) {
      const percentage = Math.round((score / quizAnimals.length) * 100)
      
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
              {'That\'s'} <span className="percentage-value">{percentage}%</span> correct!
            </p>
            
            <div className="completion-actions">
              <Button 
                onClick={() => goToPage('quiz')}
                className="play-again-btn"
              >
                Play Again! 🔄
              </Button>
              <Button 
                onClick={() => goToPage('overview')}
                variant="outline"
                className="back-to-animals-btn"
              >
                Back to Animals
              </Button>
            </div>
          </Card>
        </div>
      )
    }

    const currentAnimal = quizAnimals[currentQuestionIndex]
    const progress = ((currentQuestionIndex + 1) / quizAnimals.length) * 100

    return (
      <div className="quiz-page">
        <div className="quiz-container">
          {/* Header */}
          <div className="quiz-header">
            <Button 
              onClick={() => goToPage('overview')}
              variant="outline"
              className="quiz-back-btn"
            >
              <ArrowLeft className="back-icon" />
              Back
            </Button>
            
            <div className="quiz-progress-text">
              Question {currentQuestionIndex + 1} of {quizAnimals.length}
            </div>
            
            <div className="quiz-score">
              Score: {score}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="progress-bar-container">
            <div 
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Question Card */}
          <Card className="question-card">
            <h2 className="question-title">
              Where does this animal live?
            </h2>
            
            <div className="question-animal">
              <img
                src={currentAnimal.image || "/placeholder.svg"}
                alt={currentAnimal.name}
                className="question-animal-image"
              />
              <h3 className="question-animal-name">{currentAnimal.name}</h3>
            </div>

            {/* Answer Options */}
            <div className="answer-options">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => handleAnswer(category.id)}
                  disabled={showFeedback !== null}
                  className={`answer-option ${category.bgColor} ${category.color}`}
                  variant="outline"
                >
                  <span className="answer-icon">{category.icon}</span>
                  {category.name}
                </Button>
              ))}
            </div>
          </Card>

          {/* Feedback */}
          {showFeedback && (
            <div className="feedback-overlay">
              <Card className={`feedback-card ${showFeedback === 'correct' ? 'feedback-correct' : 'feedback-incorrect'}`}>
                <div className="feedback-icon">
                  {showFeedback === 'correct' ? (
                    <CheckCircle className="feedback-check" />
                  ) : (
                    <X className="feedback-x" />
                  )}
                </div>
                <h3 className={`feedback-title ${showFeedback === 'correct' ? 'feedback-title-correct' : 'feedback-title-incorrect'}`}>
                  {showFeedback === 'correct' ? 'Correct! 🎉' : 'Try Again! 💪'}
                </h3>
                <p className="feedback-text">
                  {showFeedback === 'correct' 
                    ? `Yes! ${currentAnimal.name} lives ${currentAnimal.category === 'land' ? 'on land' : currentAnimal.category === 'water' ? 'in water' : 'in the air'}!`
                    : `${currentAnimal.name} actually lives ${currentAnimal.category === 'land' ? 'on land' : currentAnimal.category === 'water' ? 'in water' : 'in the air'}!`
                  }
                </p>
              </Card>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Render current page
  switch (currentPage) {
    case 'home':
      return <HomePage />
    case 'overview':
      return <OverviewPage />
    case 'quiz':
      return <QuizPage />
    default:
      return <HomePage />
  }
}
