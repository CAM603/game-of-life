import React from "react";
import { getFigure } from "../figures";
import { getWorld } from "../worlds";
import { generateRandomGrid } from "../game";
import Button from "./Button";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const Presets = ({ setWorld, setGeneration }) => {
    const addGlider = () => {
        setGeneration(0);
        setWorld(getFigure("glider"));
    };

    const addPulsar = () => {
        setGeneration(0);
        setWorld(getFigure("pulsar"));
    };

    const addGun = () => {
        setGeneration(0);
        setWorld(getFigure("gliderGun"));
    };

    const earth = () => {
        setGeneration(0);
        setWorld(getWorld("earth"));
    };

    const random = () => {
        setGeneration(0);
        setWorld(generateRandomGrid());
    };

    return (
        <div className="presets">
            <h3>Figures</h3>
            <Button className="preset" onClick={addPulsar}>
                Pulsar
            </Button>
            <Button className="preset" onClick={addGlider}>
                Glider
            </Button>
            <Button className="preset" onClick={addGun}>
                Glider Gun
            </Button>
            <Button className="preset" onClick={earth}>
                Earth
            </Button>
            <Button className="preset" onClick={random}>
                <BsFillQuestionCircleFill className="" />
            </Button>
        </div>
    );
};

export default Presets;
