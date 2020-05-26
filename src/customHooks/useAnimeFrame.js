import React, { useEffect, useState } from "react";

// Custom hook for using animation frame
export const useAnimeFrame = (timestamp, doAnimationCallback) => {
    // Set the prev time stamp
    const [prevTimeStamp, setTimeStamp] = useState(timestamp - 30);
    const [continueAnimation, setContinueAnimation] = useState(true);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        // only start animation frame if we haven't in the past
        if (!started) {
            setStarted(true);
            requestAnimationFrame(onFrame);
        }
    }, [started]);

    // Request the first animation frame to kick things off
    const onFrame = (timestamp) => {
        // if we want to do more, ask for the next frame
        if (continueAnimation) {
            requestAnimationFrame(onFrame);
        }
        const elapsed = prevTimeStamp - timestamp;
        setTimeStamp(timestamp);
        console.log(`Current time: ${timestamp} ms, frame time: ${elapsed} ms`);

        // call callback and pass it the elapsed time
        doAnimationCallback(elapsed);
    };

    // this will stop the hook from calling the next animation frame
    const cancelAnimation = () => {
        setContinueAnimation(false);
    };
    return [cancelAnimation];
};
