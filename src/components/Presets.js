import React from "react";
import { getFigure } from "../figures";
import { getWorld } from "../worlds";
import { generateRandomGrid } from "../game";
import Button from "./Button";
import { BsFillQuestionCircleFill } from "react-icons/bs";

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

    const earth = () => {
        setWorld(getWorld("earth"));
    };

    const random = () => {
        setWorld(generateRandomGrid());
    };

    return (
        <div className="presets">
            <h3>Presets</h3>
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
