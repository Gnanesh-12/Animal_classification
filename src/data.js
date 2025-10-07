// src/data.js
export const importImage = (imageName) => {
  try {
    return new URL(`./assets/${imageName}`, import.meta.url).href;
  } catch (error) {
    console.warn(`Could not load image: ${imageName}`);
    return `https://via.placeholder.com/150/90EE90/000000?text=${imageName.split('-')[0]}`;
  }
};

export const animals = [
  { id: '1', name: 'Cow', category: 'land', image: importImage('cute-cow-cartoon.png') },
  { id: '2', name: 'Lion', category: 'land', image: importImage('friendly-lion-cartoon.png') },
  { id: '3', name: 'Dog', category: 'land', image: importImage('happy-cartoon-dog.png') },
  { id: '4', name: 'Pig', category: 'land', image: importImage('cute-pig-cartoon.png') },
  { id: '5', name: 'Elephant', category: 'land', image: importImage('friendly-elephant-cartoon.png') },
  { id: '6', name: 'Cat', category: 'land', image: importImage('cute-cat-cartoon.png') },
  { id: '7', name: 'Tiger', category: 'land', image: importImage('friendly-tiger-cartoon.png') },
  { id: '8', name: 'Horse', category: 'land', image: importImage('cute-horse-cartoon.png') },

  { id: '9', name: 'Fish', category: 'water', image: importImage('colorful-fish-cartoon.png') },
  { id: '10', name: 'Dolphin', category: 'water', image: importImage('friendly-dolphin-cartoon.png') },
  { id: '11', name: 'Whale', category: 'water', image: importImage('cute-whale-cartoon.png') },
  { id: '12', name: 'Shark', category: 'water', image: importImage('friendly-shark-cartoon.png') },
  { id: '13', name: 'Octopus', category: 'water', image: importImage('cute-octopus-cartoon.png') },

  { id: '14', name: 'Bird', category: 'air', image: importImage('colorful-bird-cartoon.png') },
  { id: '15', name: 'Eagle', category: 'air', image: importImage('majestic-eagle-cartoon.png') },
  { id: '16', name: 'Butterfly', category: 'air', image: importImage('beautiful-butterfly-cartoon.png') },
  { id: '17', name: 'Bee', category: 'air', image: importImage('cute-bee-cartoon.png') },
  { id: '18', name: 'Owl', category: 'air', image: importImage('wise-owl-cartoon.png') },
];

export const categories = [
  { id: 'land', name: 'Land Animals', color: 'land-text', bgColor: 'land-bg', icon: '🌍' },
  { id: 'water', name: 'Water Animals', color: 'water-text', bgColor: 'water-bg', icon: '🌊' },
  { id: 'air', name: 'Air Animals', color: 'air-text', bgColor: 'air-bg', icon: '☁️' },
];
