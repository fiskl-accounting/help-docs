import React, { useEffect } from 'react';
import HotJar from '@site/src/components/HotJar';

interface RootProps {
  children: React.ReactNode;
}

const Root: React.FC<RootProps> = ({ children }) => {
  useEffect(() => {
    // Function to add noopener noreferrer to all target="_blank" links
    const addNoOpenerToBlankTargets = () => {
      document.querySelectorAll('a[target="_blank"]').forEach(link => {
        if (!link.getAttribute('rel') || !link.getAttribute('rel').includes('noopener')) {
          const existingRel = link.getAttribute('rel') || '';
          const newRel = existingRel ? 
            `${existingRel} noopener noreferrer` : 
            'noopener noreferrer';
          link.setAttribute('rel', newRel);
        }
      });
    };
    
    // Run once when component mounts
    addNoOpenerToBlankTargets();
    
    // Create observer to handle dynamically added links
    const observer = new MutationObserver(addNoOpenerToBlankTargets);
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, []);
  
  return (
    <>
      {children}
      <HotJar />
    </>
  );
};

export default Root;