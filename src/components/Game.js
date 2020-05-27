import React, { useState, useRef, useCallback } from "react";
import {
    generateWorld,
    worldBuffer,
    generateRandomGrid,
    generatePulsar,
    generateGlider,
} from "../game";
import Grid from "./Grid";
import Controls from "./Controls";

const Game = () => {
    const [world, setWorld] = useState(() => {
        return generatePulsar();
    });
    const [generation, setGeneration] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [speed, setSpeed] = useState(1000);
    console.log(speed);

    const playingRef = useRef();
    playingRef.current = playing;
    const generationRef = useRef();
    generationRef.current = generation;
    const speedRef = useRef();
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

    const random = () => {
        setWorld(generateRandomGrid());
    };

    const next = () => {
        setWorld((curWorld) => {
            return worldBuffer(curWorld);
        });
        setGeneration(generationRef.current + 1);
    };

    const increaseSpeed = () => {
        if (speedRef.current > 100) {
            setSpeed(speedRef.current - 100);
        } else if (speedRef.current <= 100 && speedRef.current > 5) {
            setSpeed(speedRef.current - 5);
        } else {
            console.log("WARNING");
        }
    };

    const decreaseSpeed = () => {
        if (speedRef.current < 3000) {
            setSpeed(speedRef.current + 100);
        } else {
            console.log("Too slow");
        }
    };

    const addGlider = () => {
        setWorld(generateGlider());
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Controls
                playing={playing}
                togglePlay={togglePlay}
                clear={clear}
                random={random}
                next={next}
                increaseSpeed={increaseSpeed}
                decreaseSpeed={decreaseSpeed}
                addGlider={addGlider}
            />
            <h1>Generation {generation}</h1>
            <Grid world={world} setWorld={setWorld} playing={playing} />
        </div>
    );
};

export default Game;
