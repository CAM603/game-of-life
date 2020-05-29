import { generateWorld } from "./game";
import { pulsar, glider, gliderLeft } from "./figures";

// Returns a preconfigured world
export const getWorld = (figure) => {
    let newWorld = generateWorld();
    switch (figure) {
        case "earth":
            return earth(newWorld);
    }
};

const earth = (world) => {
    pulsar(world);
    glider(world);
    gliderLeft(world);
    world[45].fill(1);

    return world;
};
