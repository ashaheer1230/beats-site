import React, { useState, useEffect, useRef } from 'react';
import { BsSkipStartFill, BsSkipEndFill } from "react-icons/bs";
import { FaPlay, FaPause } from "react-icons/fa";
import "./AudioPlayer.css";

function AudioPlayer(props) {
    const TOTAL_BEATS = props.TOTAL_BEATS;
    let selectedBeat = props.selectedBeat;
    let isPlaying = props.isPlaying;
    let soundRef = props.soundRef;
    const [timeStamp, setTimeStamp] = useState('');
    const seekSliderRef = useRef();

    useEffect(() => {
        // interval that is executed every second to update
        // the time stamp on the audio player
        const intervalId = setInterval(() => {
            setTimeStamp(soundRef.current.seek());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    //Function that converts/returns seconds in 0:00 format
    const formatSeconds = (seconds) => {
        return new Date(seconds * 1000).toISOString().substring(14, 19);
    }

    return (
        <div id="audio-player">
            <div className="slider-div">
                <input ref={seekSliderRef} type="range" value={timeStamp} readOnly={false} max={soundRef.current.duration()} id="seek-slider" onClick={(e) => {
                    console.log(seekSliderRef.current);
                    soundRef.current.seek(seekSliderRef.current.value);
                }} onChange={(e) => {
                    setTimeStamp(e.target.value);
                }} />
            </div>

            <div id="time-stamp-div">
                <p id="time-stamp">{`${formatSeconds(timeStamp)} / ${formatSeconds(soundRef.current.duration())}`}</p>
            </div>
            <div id="controls">

                <BsSkipStartFill className="icon" id="prev" onClick={() => {
                    // plays previous song until we hit the first song in the array
                    if (selectedBeat - 1 >= 1) { props.loadSong(selectedBeat - 1); }
                    // once we hit the first song in the array, go back to the last song in the array
                    else { props.loadSong(TOTAL_BEATS); }
                }} />

                {isPlaying ? <FaPause className="icon" id="play-pause" onClick={() => { soundRef.current.pause() }} />
                    : <FaPlay className="icon" id="play-pause" onClick={() => { soundRef.current.play() }} />}

                <BsSkipEndFill className="icon" id="fwd" onClick={() => {
                    // plays next song until we hit the last song in the array
                    if (selectedBeat + 1 <= TOTAL_BEATS) { props.loadSong(selectedBeat + 1); }
                    // once we hit the last song in the array, go back to the first song in the array
                    else { props.loadSong(1); }
                }} />

            </div>
        </div>
    );
}

export default AudioPlayer;