import React from 'react';
// import HotJar from '@site/src/components/HotJar';

interface RootProps {
  children: React.ReactNode;
}

const Root: React.FC<RootProps> = ({children}) => {
  return (
    <>
      {children}
      {/* <HotJar /> */}
    </>
  );
};

export default Root;