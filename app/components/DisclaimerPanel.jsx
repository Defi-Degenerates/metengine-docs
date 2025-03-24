// components/DisclaimerPanel.jsx
import React from 'react';

const DisclaimerPanel = ({ children }) => {
  return (
    <div 
      className="disclaimer-panel"
      style={{
        padding: '1rem',
        margin: '1.5rem 0',
        backgroundColor: '#f8f9fa',
        border: '1px solid #dee2e6',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        position: 'relative'
      }}
    >
      <div 
        className="disclaimer-title"
        style={{
          position: 'absolute',
          top: '-12px',
          left: '1rem',
          backgroundColor: '#dc3545',
          color: 'white',
          padding: '0.25rem 0.75rem',
          borderRadius: '4px',
          fontSize: '0.85rem',
          fontWeight: 'bold'
        }}
      >
        DISCLAIMER
      </div>
      <div style={{ marginTop: '0.5rem' }}>
        {children}
      </div>
    </div>
  );
};

export default DisclaimerPanel;