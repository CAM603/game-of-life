import React, { useState, useRef, useCallback } from "react";
import { generateWorld, worldBuffer } from "../game";
import Grid from "./Grid";
import Controls from "./Controls";
import Presets from "./Presets";
import About from "./About";

const Game = () => {
    const [world, setWorld] = useState(() => {
        return generateWorld();
    });
    const [generation, setGeneration] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [speed, setSpeed] = useState(1000);

    const playingRef = useRef();
    const generationRef = useRef();
    const speedRef = useRef();

    playingRef.current = playing;
    generationRef.current = generation;
    speedRef.current = speed;

    const play = useCallback(() => {
        if (!playingRef.current) {
            return;
        }

        setWorld((curWorld) => {
            return worldBuffer(curWorld);
        });
        setGeneration(generationRef.current + 1);
        setTimeout(() => {
            play();
        }, speedRef.current);
    }, []);

    const togglePlay = () => {
        setPlaying(!playing);
        if (!playing) {
            playingRef.current = true;
            play();
        }
    };

    const clear = () => {
        setGeneration(0);
        setWorld(generateWorld());
    };

    const next = () => {
        setWorld((curWorld) => {
            return worldBuffer(curWorld);
        });
        setGeneration(generationRef.current + 1);
    };

    const changeSpeed = (speed) => {
        switch (speed) {
            case "faster": {
                if (speedRef.current > 100) {
                    return setSpeed(speedRef.current - 100);
                } else if (speedRef.current <= 100 && speedRef.current > 5) {
                    return setSpeed(speedRef.current - 5);
                } else {
                    return console.log("WARNING");
                }
            }
            case "slower": {
                if (speedRef.current < 3000) {
                    return setSpeed(speedRef.current + 100);
                } else {
                    return console.log("Too slow");
                }
            }
        }
    };

    return (
        <div className="screen">
            <h1>John Conway's Game of Life</h1>
            <div className="game-container">
                <div className="game">
                    <h4 className="generation">Generation: {generation}</h4>
                    <Grid world={world} setWorld={setWorld} playing={playing} />
                    <Controls
                        playing={playing}
                        togglePlay={togglePlay}
                        clear={clear}
                        next={next}
                        changeSpeed={changeSpeed}
                    />
                </div>
                <Presets setWorld={setWorld} />
            </div>
            <About />
        </div>
    );
};

export default Game;
