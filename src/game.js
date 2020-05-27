export const GRID_SIZE = 50;

const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
];

export const worldBuffer = (world) => {
    let newWorld = generateWorld();
    for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < GRID_SIZE; j++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
                const newI = i + x;
                const newJ = j + y;
                if (
                    newI >= 0 &&
                    newI < GRID_SIZE &&
                    newJ >= 0 &&
                    newJ < GRID_SIZE
                ) {
                    neighbors += world[newI][newJ];
                }
            });

            newWorld[i][j] =
                neighbors === 3 || (neighbors === 2 && world[i][j] === 1)
                    ? 1
                    : 0;
        }
    }
    return newWorld;
};

export const generateWorld = () => {
    const rows = [];
    for (let i = 0; i < GRID_SIZE; i++) {
        // 0 indicates dead cell
        rows.push(Array.from(Array(GRID_SIZE), () => 0));
    }
    return rows;
};

export const generateRandomGrid = () => {
    const rows = [];
    for (let i = 0; i < GRID_SIZE; i++) {
        // 0 indicates dead cell
        rows.push(
            Array.from(Array(GRID_SIZE), () => (Math.random() > 0.7 ? 1 : 0))
        );
    }
    return rows;
};

export const generatePulsar = () => {
    const rows = [];
    for (let i = 0; i < GRID_SIZE; i++) {
        // 0 indicates dead cell
        rows.push(Array.from(Array(GRID_SIZE), () => 0));
    }
    rows[2][4] = 1;
    rows[2][5] = 1;
    rows[2][6] = 1;
    rows[2][10] = 1;
    rows[2][11] = 1;
    rows[2][12] = 1;

    rows[4][2] = 1;
    rows[4][7] = 1;
    rows[4][9] = 1;
    rows[4][14] = 1;

    rows[5][2] = 1;
    rows[5][7] = 1;
    rows[5][9] = 1;
    rows[5][14] = 1;

    rows[6][2] = 1;
    rows[6][7] = 1;
    rows[6][9] = 1;
    rows[6][14] = 1;

    rows[7][4] = 1;
    rows[7][5] = 1;
    rows[7][6] = 1;
    rows[7][10] = 1;
    rows[7][11] = 1;
    rows[7][12] = 1;

    rows[9][4] = 1;
    rows[9][5] = 1;
    rows[9][6] = 1;
    rows[9][10] = 1;
    rows[9][11] = 1;
    rows[9][12] = 1;

    rows[10][2] = 1;
    rows[10][7] = 1;
    rows[10][9] = 1;
    rows[10][14] = 1;

    rows[11][2] = 1;
    rows[11][7] = 1;
    rows[11][9] = 1;
    rows[11][14] = 1;

    rows[12][2] = 1;
    rows[12][7] = 1;
    rows[12][9] = 1;
    rows[12][14] = 1;

    rows[14][4] = 1;
    rows[14][5] = 1;
    rows[14][6] = 1;
    rows[14][10] = 1;
    rows[14][11] = 1;
    rows[14][12] = 1;

    return rows;
};

export const generateGlider = () => {
    const rows = [];
    for (let i = 0; i < GRID_SIZE; i++) {
        // 0 indicates dead cell
        rows.push(Array.from(Array(GRID_SIZE), () => 0));
    }
    rows[3][1] = 1;
    rows[3][2] = 1;
    rows[3][3] = 1;
    rows[2][3] = 1;
    rows[1][2] = 1;

    return rows;
};
