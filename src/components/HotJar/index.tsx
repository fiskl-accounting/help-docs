import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';

const HotJar: React.FC = () => {
  const isBrowser = useIsBrowser();

  React.useEffect(() => {
    if (isBrowser && process.env.NODE_ENV === 'production') {
      const script = document.createElement('script');
      script.innerHTML = `
          (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5094557,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `;
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isBrowser]);

  return null;
};