import { useState } from 'react';

const useFlip = (initialState = true) => {
  const [isFlipped, setIsFlipped] = useState(initialState);

  const flipCard = () => {
    setIsFlipped(flipped => !flipped);
  };

  return [isFlipped, flipCard];
};

export default useFlip;