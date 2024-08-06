import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="button px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-700">
      {children}
    </button>
  );
};

export default Button;