import { generateWorld } from "./game";
import { pulsar, glider, gliderLeft } from "./figures";

export const getWorld = (figure) => {
    let newWorld = generateWorld(figure);
    switch (figure) {
        case "home":
            return home(newWorld);
    }
};

const home = (world) => {
    pulsar(world);
    glider(world);
    gliderLeft(world);
    world[45].fill(1);

    return world;
};
