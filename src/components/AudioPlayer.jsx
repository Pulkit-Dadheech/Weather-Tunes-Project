import React, {useEffect, useRef, useState} from 'react';
import {useAudioTracks, useFetchTracks} from './fetchTracks';
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import {IoMdVolumeHigh, IoMdVolumeLow, IoMdVolumeOff} from 'react-icons/io';

const AudioPlayer = () => {
    const {tracks,fetchTracks} = useFetchTracks();
    console.log(tracks);
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(60);
    const [muteVolume, setMuteVolume] = useState(false);

    console.log(currentTrack);

    const audioRef = useRef();
    const progressBarRef = useRef();

    const handleNext = () => {
        if (trackIndex >= tracks.length - 1) {
            setTrackIndex(0);
        } else {
            setTrackIndex((prev) => prev + 1);
        }
    };

    useEffect(() => {
        fetchTracks();
    }, []);

    useEffect(() => {
        if (tracks.length > 0 && trackIndex < tracks.length) {
            setCurrentTrack(tracks[trackIndex]);
        }
    }, [tracks, trackIndex]);


    return (
        <>
            <div className="audio-player">
                <div className="inner">

                    <DisplayTrack
                        currentTrack={currentTrack}
                        audioRef={audioRef}
                        setDuration={setDuration}
                        progressBarRef={progressBarRef}
                        handleNext={handleNext}
                    />
                    <Controls
                        audioRef={audioRef}
                        progressBarRef={progressBarRef}
                        duration={duration}
                        setTimeProgress={setTimeProgress}
                        tracks={tracks}
                        trackIndex={trackIndex}
                        setTrackIndex={setTrackIndex}
                        setCurrentTrack={setCurrentTrack}
                        handleNext={handleNext}
                        timeProgress={timeProgress}
                    />
                    <ProgressBar
                        progressBarRef={progressBarRef}
                        audioRef={audioRef}
                        timeProgress={timeProgress}
                        duration={duration}
                    />
                    <div className="volume">
                        <button onClick={() => setMuteVolume((prev) => !prev)}>
                            {muteVolume || volume < 5 ? (
                                <IoMdVolumeOff/>
                            ) : volume < 40 ? (
                                <IoMdVolumeLow/>
                            ) : (
                                <IoMdVolumeHigh/>
                            )}
                        </button>
                        <input
                            type="range"
                            min={0}
                            max={100}
                            value={volume}
                            onChange={(e) => setVolume(parseInt(e.target.value))}
                            style={{
                                background: `linear-gradient(to right, rgb(38, 255, 0) ${volume}%, #ccc ${volume}%)`,
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AudioPlayer;
