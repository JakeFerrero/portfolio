import { useEffect, useState } from 'react';

// Words to cycle through
export const WORDS = ['Software Engineer', 'UI / UX Developer', 'Backend Developer', 'Japan Enthusiast'];
// The cover animation should play every 2.5 seconds
const COVER_ANIMATION_CYCLE = 2500;
/**
 * The cover animation is split into two parts:
 * 1. The cover animation fully covers the word (500ms / halfway point)
 * 2. The cover is removed to reveal the next word (1000ms / animation finishes)
 */
const COVER_ANIMATION_FULLY_COVERED = 500;
const COVER_ANIMATION_TOTAL_DURATION = 1000;

export const useWordSwitcher = () => {
  const [currentWord, setCurrentWord] = useState(WORDS[0]);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger cover animation by adding animation class
      setAnimate(true);

      // Switch word when it is fully covered
      setTimeout(() => {
        const nextIndex = (index + 1) % WORDS.length;
        setCurrentWord(WORDS[nextIndex]);
        setIndex(nextIndex);
      }, COVER_ANIMATION_FULLY_COVERED);

      // Remove animation class after animation is finished to reset the cover
      setTimeout(() => {
        setAnimate(false);
      }, COVER_ANIMATION_TOTAL_DURATION);
    }, COVER_ANIMATION_CYCLE);

    return () => clearInterval(interval);
  }, [index]);

  return { currentWord, animate };
};
