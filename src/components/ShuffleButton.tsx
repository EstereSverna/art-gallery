import React from 'react';
import '../styles/ShuffleButton.css';

interface ShuffleButtonProps {
  onClick: () => void;
}

const ShuffleButton: React.FC<ShuffleButtonProps> = ({ onClick }) => {
  return (
    <button className="shuffle-button" onClick={onClick}>
      SHUFFLE ART
    </button>
  );
};

export default ShuffleButton;
