import {useEffect, useRef, useState} from 'react';
import { tracks } from '../data/tracks';

// import components
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import {IoMdVolumeHigh, IoMdVolumeLow, IoMdVolumeOff} from "react-icons/io";

// import TopBar from './TopBar';

const AudioPlayer = () => {
  // states
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(
    tracks[trackIndex]
  );
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);

  // reference
  const audioRef = useRef();
  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);
  const progressBarRef = useRef();

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  return (
    <>
      {/* <TopBar /> */}
      <div className="audio-player">
        <div className="inner">
          <DisplayTrack
            {...{
              currentTrack,
              audioRef,
              setDuration,
              progressBarRef,
              handleNext,
            }}
          />
          <Controls
            {...{
              audioRef,
              progressBarRef,
              duration,
              setTimeProgress,
              tracks,
              trackIndex,
              setTrackIndex,
              setCurrentTrack,
              handleNext,
              timeProgress,
            }}
          />
          <ProgressBar
              {...{ progressBarRef, audioRef, timeProgress, duration }}
          />
          <div className="volume">
            <button onClick={() => setMuteVolume((prev) => !prev)}>
              {muteVolume || volume < 5 ? (
                  <IoMdVolumeOff />
              ) : volume < 40 ? (
                  <IoMdVolumeLow />
              ) : (
                  <IoMdVolumeHigh />
              )}
            </button>
            <input
                type="range"
                min={0}
                max={100}
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                style={{
                  background: `linear-gradient(to right, rgb(38, 255, 0) ${volume}%, #ccc ${volume}%) `,
                }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AudioPlayer;
