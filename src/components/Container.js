import React, { useRef, useState } from "react";
import { useAnimeFrame } from "../customHooks/useAnimeFrame";
import moment from "moment";

const Container = (props) => {
    const canvasRef = useRef(null);

    const [stopAnimation, setStopAnimation] = useState(false);

    const doAnimation = (elapsedTime) => {
        console.log(`elapsed time: ${elapsedTime}`);
        console.log(canvasRef.current);
    };

    const [cancelAnimationFrame] = useAnimeFrame(moment.now(), doAnimation);

    return <canvas ref={canvasRef} width={props.width} height={props.height} />;
};

export default Container;
