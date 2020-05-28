import React from "react";
import { getFigure } from "../figures";
import { getWorld } from "../worlds";
import { generateRandomGrid } from "../game";

const Presets = ({ setWorld }) => {
    const addGlider = () => {
        setWorld(getFigure("glider"));
    };

    const addPulsar = () => {
        setWorld(getFigure("pulsar"));
    };

    const addGun = () => {
        setWorld(getFigure("gliderGun"));
    };

    const home = () => {
        setWorld(getWorld("home"));
    };

    const random = () => {
        setWorld(generateRandomGrid());
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <button onClick={addPulsar}>Pulsar</button>
            <button onClick={addGlider}>Glider</button>
            <button onClick={addGun}>Glider Gun</button>
            <button onClick={home}>Home</button>
            <button onClick={random}>Random</button>
        </div>
    );
};

export default Presets;
