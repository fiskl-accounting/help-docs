import React from 'react';
import HotjarScript from '@site/src/components/HotjarScript';

interface RootProps {
  children: React.ReactNode;
}

const Root: React.FC<RootProps> = ({children}) => {
  return (
    <>
      {children}
      <HotjarScript />
    </>
  );
};

export default Root;