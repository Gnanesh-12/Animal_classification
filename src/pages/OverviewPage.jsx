// src/pages/OverviewPage.jsx
import { Card, Button, ArrowLeft, Play } from '../components/UI';
import { animals, categories } from '../data';
import { AnimalImage } from '../components/AnimalImage';

export const OverviewPage = ({ goToPage }) => (
  <div className="overview-page">
    <div className="overview-container">
      <div className="overview-header">
        <Button onClick={() => goToPage('home')} variant="outline" className="back-btn">
          <ArrowLeft className="back-icon" /> Back to Home
        </Button>

        <h1 className="overview-title">
          <span>🌍</span> Animal Habitats <span>🌊</span>
        </h1>

        <Button onClick={() => goToPage('quiz')} className="play-quiz-btn">
          <Play className="play-icon" /> Play Quiz!
        </Button>
      </div>

      <div className="categories-section">
        {categories.map(category => {
          const categoryAnimals = animals.filter(animal => animal.category === category.id);

          return (
            <Card key={category.id} className={`category-card ${category.bgColor}`}>
              <h2 className={`category-title ${category.color}`}>
                <span className="category-title-icon">{category.icon}</span>
                {category.name}
                <span className="category-title-icon">{category.icon}</span>
              </h2>

              <p className="category-info">
                {category.id === 'land' ? 'These animals live and move on the ground 🦶'
                : category.id === 'water' ? 'These animals live and swim in water 🏊‍♂️'
                : 'These animals can fly through the sky ✈️'}
              </p>

              <div className="animals-grid">
                {categoryAnimals.map(animal => (
                  <Card key={animal.id} className="animal-card">
                    <div className="animal-content">
                      <AnimalImage
                        src={animal.image}
                        alt={animal.name}
                        className="animal-image"
                        fallbackText={animal.name}
                      />
                      <h3 className="animal-name">{animal.name}</h3>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  </div>
);
