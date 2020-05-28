import { generateWorld } from "./game";
import { pulsar, glider, gliderLeft } from "./figures";

export const getWorld = (figure) => {
    let newWorld = generateWorld(figure);
    switch (figure) {
        case "home":
            return home(newWorld);
        case "gun":
            return gliderGun(newWorld);
    }
};

const home = (world) => {
    pulsar(world);
    glider(world);
    gliderLeft(world);
    return world;
};

const gliderGun = (world) => {
    world[15][5] = 1;
    world[15][6] = 1;
    world[16][5] = 1;
    world[16][6] = 1;

    world[15][14] = 1;
    world[15][15] = 1;
    world[16][15] = 1;
    world[16][13] = 1;
    world[17][13] = 1;
    world[17][14] = 1;

    world[17][21] = 1;
    world[17][22] = 1;
    world[18][21] = 1;
    world[18][23] = 1;
    world[19][21] = 1;

    world[13][28] = 1;
    world[13][29] = 1;
    world[14][29] = 1;
    world[14][27] = 1;
    world[15][27] = 1;
    world[15][28] = 1;

    world[13][39] = 1;
    world[13][40] = 1;
    world[14][39] = 1;
    world[14][40] = 1;

    world[20][40] = 1;
    world[20][41] = 1;
    world[21][40] = 1;
    world[21][42] = 1;
    world[22][40] = 1;

    world[25][29] = 1;
    world[25][30] = 1;
    world[25][31] = 1;
    world[26][29] = 1;
    world[27][30] = 1;
    // world[27][35] = 1;

    return world;
};
