export const GRID_SIZE = 50;

// Represents all possible neighbors of a cell
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

// Finds the number of neighbors of a cell
const getNeighbors = (i, j, world) => {
    let neighbors = 0;
    operations.forEach(([x, y]) => {
        const newI = i + x;
        const newJ = j + y;
        if (newI >= 0 && newI < GRID_SIZE && newJ >= 0 && newJ < GRID_SIZE) {
            neighbors += world[newI][newJ];
        }
    });
    return neighbors;
};

// Takes in a world and returns a new world based on the rules of life
export const worldBuffer = (world) => {
    let newWorld = generateWorld();
    for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < GRID_SIZE; j++) {
            let neighbors = getNeighbors(i, j, world);
            // Determine which cells live and die
            newWorld[i][j] =
                neighbors === 3 || (neighbors === 2 && world[i][j] === 1)
                    ? 1
                    : 0;
        }
    }
    return newWorld;
};

// Generates a world filled with dead cells
export const generateWorld = () => {
    const rows = [];
    for (let i = 0; i < GRID_SIZE; i++) {
        // 0 indicates dead cell
        rows.push(Array.from(Array(GRID_SIZE), () => 0));
    }
    return rows;
};

// Generates a world with random dead and alive cells
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
