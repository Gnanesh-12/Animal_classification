// src/pages/HomePage.jsx
import { Card, Button, Star } from '../components/UI';
import { categories } from '../data';

export const HomePage = ({ goToPage }) => (
  <div className="homepage">
    <div className="homepage-container">
      <div className="homepage-header">
        <div className="homepage-icon">🌍</div>
        <h1 className="homepage-title">
          <Star className="title-star" /> Animal Habitats <Star className="title-star" />
        </h1>
        <p className="homepage-subtitle">
          Discover where animals live - on land, in water, or in the air!
        </p>
      </div>

      <Card className="homepage-card">
        <div className="homepage-content">
          <h2 className="homepage-section-title">Learn About Animal Homes</h2>

          <div className="categories-grid">
            {categories.map(cat => (
              <div key={cat.id} className={`category-preview ${cat.bgColor}`}>
                <div className="category-icon">{cat.icon}</div>
                <p className={`category-name ${cat.color}`}>{cat.name}</p>
                <p className="category-description">
                  {cat.id === 'land' ? 'Animals that walk and run' : cat.id === 'water' ? 'Animals that swim' : 'Animals that fly'}
                </p>
              </div>
            ))}
          </div>

          <Button onClick={() => goToPage('overview')} className="get-started-btn">
            Get Started! 🚀
          </Button>
        </div>
      </Card>
    </div>
  </div>
);
