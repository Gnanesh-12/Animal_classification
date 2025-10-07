// src/components/AnimalImage.jsx
import { useState } from 'react';

export const AnimalImage = ({ src, alt, className, fallbackText }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error) {
    const emojiMap = {
      Cow: '🐄', Lion: '🦁', Dog: '🐕', Pig: '🐷', Elephant: '🐘',
      Cat: '🐱', Tiger: '🐅', Horse: '🐴', Fish: '🐟', Dolphin: '🐬',
      Whale: '🐋', Shark: '🦈', Octopus: '🐙', Bird: '🐦', Eagle: '🦅',
      Butterfly: '🦋', Bee: '🐝', Owl: '🦉'
    };
    return <div className={`${className} image-fallback`}><span>{emojiMap[fallbackText]}</span></div>;
  }

  return (
    <img
      src={src || '/placeholder.svg'}
      alt={alt}
      className={`${className} ${loaded ? 'loaded' : 'loading'}`}
      onError={() => setError(true)}
      onLoad={() => setLoaded(true)}
    />
  );
};
