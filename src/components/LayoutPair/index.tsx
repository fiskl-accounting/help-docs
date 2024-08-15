import React from 'react';
import './LayoutPair.css'; // Make sure you include this CSS file

function LayoutPair({ children, imageUrl }) {
  return (
    <div className="layout-pair-container">
      <div className="layout-pair-markdown">
        {children}
      </div>
      <div className="image">
        <details>
          <summary>View a guided walk through - 👀</summary>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
            <iframe
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
              src={imageUrl}
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowtransparency="true"
            ></iframe>
          </div>
        </details>


      </div>
    </div>
  );
}

export default LayoutPair;
