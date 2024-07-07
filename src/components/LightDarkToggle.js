import React from 'react';

const LightDarkToggle = ({ toggleTheme }) => {
  return (
    <div className="toggle-container">
      <button onClick={toggleTheme}>Toggle Light/Dark Mode</button>
    </div>
  );
};

export default LightDarkToggle;
