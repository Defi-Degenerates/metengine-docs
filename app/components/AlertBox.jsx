// components/AlertBox.jsx
import React from 'react';

const AlertBox = ({ children, type = 'info' }) => {
  // Define styles based on alert type
  const styles = {
    info: {
      backgroundColor: '#e3f2fd',
      borderColor: '#2196f3',
      color: '#0d47a1'
    },
    warning: {
      backgroundColor: '#fff8e1',
      borderColor: '#ffc107',
      color: '#ff6f00'
    },
    danger: {
      backgroundColor: '#ffebee',
      borderColor: '#f44336',
      color: '#b71c1c'
    },
    success: {
      backgroundColor: '#e8f5e9',
      borderColor: '#4caf50',
      color: '#1b5e20'
    }
  };

  const typeStyle = styles[type] || styles.info;

  return (
    <div 
      className="alert-box"
      style={{
        padding: '0.5rem',
        margin: '0.5rem 0',
        borderLeft: `4px solid ${typeStyle.borderColor}`,
        backgroundColor: typeStyle.backgroundColor,
        color: typeStyle.color,
        borderRadius: '4px',
        fontWeight: type === 'danger' || type === 'warning' ? 'bold' : 'normal'
      }}
    >
      {children}
    </div>
  );
};

export default AlertBox;