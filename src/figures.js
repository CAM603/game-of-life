import { generateWorld } from "./game";

export const getFigure = (figure) => {
    let newWorld = generateWorld(figure);
    switch (figure) {
        case "pulsar":
            return pulsar(newWorld);
        case "glider":
            return glider(newWorld);
        case "gliderLeft":
            return gliderLeft(newWorld);
        case "home":
            let world = pulsar(newWorld);
            glider(world);
            gliderLeft(world);
            return world;
    }
};

export const glider = (world) => {
    world[3][1] = 1;
    world[3][2] = 1;
    world[3][3] = 1;
    world[2][3] = 1;
    world[1][2] = 1;

    return world;
};

export const gliderLeft = (world) => {
    world[20][40] = 1;
    world[20][41] = 1;
    world[20][42] = 1;
    world[19][40] = 1;
    world[18][41] = 1;

    return world;
};

export const pulsar = (world) => {
    world[2][34] = 1;
    world[2][35] = 1;
    world[2][36] = 1;
    world[2][40] = 1;
    world[2][41] = 1;
    world[2][42] = 1;

    world[4][32] = 1;
    world[4][37] = 1;
    world[4][39] = 1;
    world[4][44] = 1;

    world[5][32] = 1;
    world[5][37] = 1;
    world[5][39] = 1;
    world[5][44] = 1;

    world[6][32] = 1;
    world[6][37] = 1;
    world[6][39] = 1;
    world[6][44] = 1;

    world[7][34] = 1;
    world[7][35] = 1;
    world[7][36] = 1;
    world[7][40] = 1;
    world[7][41] = 1;
    world[7][42] = 1;

    world[9][34] = 1;
    world[9][35] = 1;
    world[9][36] = 1;
    world[9][40] = 1;
    world[9][41] = 1;
    world[9][42] = 1;

    world[10][32] = 1;
    world[10][37] = 1;
    world[10][39] = 1;
    world[10][44] = 1;

    world[11][32] = 1;
    world[11][37] = 1;
    world[11][39] = 1;
    world[11][44] = 1;

    world[12][32] = 1;
    world[12][37] = 1;
    world[12][39] = 1;
    world[12][44] = 1;

    world[14][34] = 1;
    world[14][35] = 1;
    world[14][36] = 1;
    world[14][40] = 1;
    world[14][41] = 1;
    world[14][42] = 1;

    return world;
};
