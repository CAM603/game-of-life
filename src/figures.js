import { generateWorld } from "./game";

// Returns a new world with a preset figure
export const getFigure = (figure) => {
    let newWorld = generateWorld();
    switch (figure) {
        case "pulsar":
            return pulsar(newWorld);
        case "glider":
            return glider(newWorld);
        case "gliderLeft":
            return gliderLeft(newWorld);
        case "gliderGun":
            return gliderGun(newWorld);
        default:
            break;
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

export const gliderGun = (world) => {
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

    return world;
};

export const house = (world) => {
    world[44][10] = 1;
    world[43][10] = 1;
    world[42][10] = 1;
    world[41][10] = 1;
    world[40][10] = 1;
    world[39][10] = 1;
    world[38][10] = 1;
    world[37][10] = 1;

    world[44][18] = 1;
    world[43][18] = 1;
    world[42][18] = 1;
    world[41][18] = 1;
    world[40][18] = 1;
    world[39][18] = 1;
    world[38][18] = 1;
    world[37][18] = 1;

    world[44][16] = 1;
    world[43][16] = 1;
    world[42][16] = 1;
    world[42][15] = 1;
    world[42][14] = 1;
    world[43][14] = 1;
    world[44][14] = 1;

    world[36][10] = 1;
    world[36][9] = 1;
    world[36][11] = 1;
    world[36][12] = 1;
    world[36][13] = 1;
    world[36][14] = 1;
    world[36][15] = 1;
    world[36][16] = 1;
    world[36][17] = 1;
    world[36][18] = 1;
    world[36][19] = 1;
    world[35][18] = 1;
    world[34][17] = 1;
    world[33][16] = 1;
    world[32][15] = 1;
    world[31][14] = 1;
    world[32][13] = 1;
    world[33][12] = 1;
    world[34][11] = 1;
    world[35][10] = 1;

    world[38][15] = 1;
    world[38][16] = 1;
    world[39][16] = 1;
    world[39][15] = 1;

    world[38][12] = 1;
    world[38][13] = 1;
    world[39][13] = 1;
    world[39][12] = 1;

    return world;
};
