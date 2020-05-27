import React from "react";
const Controls = ({
    playing,
    togglePlay,
    clear,
    random,
    next,
    increaseSpeed,
    decreaseSpeed,
    addGlider,
}) => {
    return (
        <div>
            <button onClick={togglePlay}>{playing ? "Stop" : "Play"}</button>
            <button onClick={clear}>Clear</button>
            <button onClick={random}>Random</button>
            <button onClick={next}>Next</button>
            <button onClick={increaseSpeed}>Speed it up</button>
            <button onClick={decreaseSpeed}>Slow it down</button>
            <button onClick={addGlider}>Glider</button>
        </div>
    );
};

export default Controls;
