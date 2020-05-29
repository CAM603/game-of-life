import React from "react";
import Button from "./Button";
import { FaRegPlayCircle, FaRegStopCircle, FaEraser } from "react-icons/fa";
import { BsSkipForward, BsPlusCircle } from "react-icons/bs";
import { FiMinusCircle } from "react-icons/fi";
const Controls = ({
    playing,
    togglePlay,
    clear,
    next,
    changeSpeed,
    speedRef,
}) => {
    return (
        <div className="controls">
            <div className="main">
                <Button className="control" onClick={togglePlay}>
                    {playing ? <FaRegStopCircle /> : <FaRegPlayCircle />}
                </Button>
                <Button className="control" onClick={clear}>
                    <FaEraser />
                </Button>
                <Button className="control" onClick={next}>
                    <BsSkipForward />
                </Button>
            </div>
            <div className="speed">
                <Button
                    className="control"
                    onClick={() => changeSpeed("slower")}
                >
                    {speedRef.current === 1100 ? (
                        <FiMinusCircle style={{ color: "black" }} />
                    ) : (
                        <FiMinusCircle />
                    )}
                </Button>
                <p>Speed</p>
                <Button
                    className="control"
                    onClick={() => changeSpeed("faster")}
                >
                    {speedRef.current === 10 ? (
                        <BsPlusCircle style={{ color: "black" }} />
                    ) : (
                        <BsPlusCircle />
                    )}
                </Button>
            </div>
        </div>
    );
};

export default Controls;
