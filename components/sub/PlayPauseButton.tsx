import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const PlayPauseButton = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element and start playing only once
    audioRef.current = new Audio('/music/cell.mp3');
    if (audioRef.current) {
      audioRef.current.play();
    }
    return () => {
      // Cleanup audio element on unmount
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handleToggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      onClick={handleToggle}
      className="fixed-button"
    >
      {isPlaying ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="w-16 h-16"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="w-8 h-8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v18l15-9L5 3z" />
        </svg>
      )}
    </motion.div>
  );
};

export default PlayPauseButton;
