// src/components/UI.jsx
export const Button = ({ children, onClick, className = '', disabled = false, variant = 'default' }) => {
  const base = 'button';
  const variantClass = variant === 'outline' ? 'button-outline' : 'button-default';
  return (
    <button className={`${base} ${variantClass} ${className}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export const Card = ({ children, className = '' }) => <div className={`card ${className}`}>{children}</div>;

export const Star = ({ className = '' }) => <span className={`icon ${className}`}>⭐</span>;
export const Play = ({ className = '' }) => <span className={`icon ${className}`}>▶️</span>;
export const ArrowLeft = ({ className = '' }) => <span className={`icon ${className}`}>←</span>;
export const CheckCircle = ({ className = '' }) => <span className={`icon ${className}`}>✅</span>;
export const X = ({ className = '' }) => <span className={`icon ${className}`}>❌</span>;
