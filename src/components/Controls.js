import React from "react";
const Controls = ({ playing, togglePlay, clear, next, changeSpeed }) => {
    return (
        <div style={{ padding: "10px", backgroundColor: "black" }}>
            <button onClick={togglePlay}>{playing ? "Stop" : "Play"}</button>
            <button onClick={clear}>Clear</button>
            <button onClick={next}>Next</button>
            <button onClick={() => changeSpeed("faster")}>Speed it up</button>
            <button onClick={() => changeSpeed("slower")}>Slow it down</button>
        </div>
    );
};

export default Controls;
