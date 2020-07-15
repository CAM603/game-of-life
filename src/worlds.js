import { generateWorld } from "./game";
import { pulsar, glider, gliderLeft, house } from "./figures";

// Returns a preconfigured world
export const getWorld = (figure) => {
    let newWorld = generateWorld();
    switch (figure) {
        case "earth":
            return earth(newWorld);
        default:
            break;
    }
};

const earth = (world) => {
    pulsar(world);
    glider(world);
    gliderLeft(world);
    house(world);
    world[45].fill(1);

    return world;
};
