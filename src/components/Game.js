import React, { useState, useRef, useCallback } from "react";
import { generateWorld, worldBuffer } from "../game";
import { getWorld } from "../worlds";
import Grid from "./Grid";
import Controls from "./Controls";
import Presets from "./Presets";
import About from "./About";

const Game = () => {
    const [world, setWorld] = useState(() => {
        return getWorld("earth");
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

    // Main simulation function
    const play = useCallback(() => {
        // Breaks loop
        if (!playingRef.current) {
            return;
        }

        setWorld((curWorld) => {
            return worldBuffer(curWorld);
        });
        setGeneration(generationRef.current + 1);
        setTimeout(play, speedRef.current);
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
                if (speedRef.current > 200) {
                    return setSpeed(speedRef.current - 200);
                } else if (speedRef.current <= 100 && speedRef.current >= 50) {
                    return setSpeed(speedRef.current - 50);
                } else {
                    return setSpeed((speedRef.current = 10));
                }
            }
            case "slower": {
                if (speedRef.current < 3000) {
                    return setSpeed(speedRef.current + 100);
                } else {
                    return setSpeed((speedRef.current = 1100));
                }
            }
        }
    };

    return (
        <div className="screen">
            <div className="mobile-container">
                <h1>John Conway's Game of Life</h1>
                <div className="game-container">
                    <div className="game">
                        <h4 className="generation">Generation: {generation}</h4>
                        <Grid
                            world={world}
                            setWorld={setWorld}
                            playing={playing}
                        />
                        <Controls
                            playing={playing}
                            togglePlay={togglePlay}
                            clear={clear}
                            next={next}
                            changeSpeed={changeSpeed}
                        />
                    </div>
                    <Presets
                        setWorld={setWorld}
                        setGeneration={setGeneration}
                    />
                </div>
            </div>
            <About />
        </div>
    );
};

export default Game;
