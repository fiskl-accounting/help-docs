import React, { CSSProperties, ReactNode } from 'react'; // Import types for props
import clsx from 'clsx'; // clsx helps manage conditional className names in a clean and concise manner.

// Define an interface for the component props
interface CardProps {
  className?: string; // Optional className names for the container card
  style?: CSSProperties; // Optional custom styles for the container card
  children: ReactNode; // Content to be included within the card
  shadow?: 'lw' | 'md' | 'tl'; // Optional shadow levels: low (lw), medium (md), top-level (tl)
}

// Build the card component with the specified props
const Card: React.FC<CardProps> = ({
  className, // classNamees for the container card
  style, // Custom styles for the container card
  children, // Content to be included within the card
  shadow, // for add shadow under your card Shadow levels: low (lw), medium (md), top-level (tl)
}) => {
  const cardShadow = shadow ? `item shadow--${shadow}` : '';
  return (
    <div className="card-demo">
      <div className={clsx("card", className, cardShadow)} style={style}>
        {children}
      </div>
    </div>
  );
};

export default Card;