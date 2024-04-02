import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';

const Controls = ({
                    audioRef,
                    progressBarRef,
                    duration,
                    setTimeProgress,
                    tracks,
                    trackIndex,
                    setTrackIndex,
                    setCurrentTrack,
                    handleNext,
                  }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime;
      progressBarRef.current.style.setProperty(
          '--range-progress',
          `${(progressBarRef.current.value / duration) * 100}%`
      );
      playAnimationRef.current = requestAnimationFrame(repeat);
    }
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.play();
        playAnimationRef.current = requestAnimationFrame(repeat);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        cancelAnimationFrame(playAnimationRef.current);
      }
    }
  }, [isPlaying, audioRef, repeat]);

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 15;
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 15;
    }
  };

  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  };

  return (
      <span className="controls-wrapper">
      <div className="controls">
        <button onClick={handlePrevious}>
          <i><IoPlaySkipBackSharp /></i>
        </button>
        <button onClick={skipBackward}>
          <i><IoPlayBackSharp /></i>
        </button>
        <button onClick={togglePlayPause}>
          {isPlaying ? <i><IoPauseSharp /></i> : <i><IoPlaySharp /></i>}
        </button>
        <button onClick={skipForward}>
          <i><IoPlayForwardSharp /></i>
        </button>
        <button onClick={handleNext}>
          <i><IoPlaySkipForwardSharp /></i>
        </button>
      </div>
    </span>
  );
};

export default Controls;
