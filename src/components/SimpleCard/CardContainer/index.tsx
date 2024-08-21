import React, { ReactNode } from 'react';

interface CardContainerProps {
  children: ReactNode;
}

const CardContainer: React.FC<CardContainerProps> = ({ children }) => (
  <div className="card-grid">
    {children}
  </div>
);

export default CardContainer;