import React, { useState, useCallback, useRef } from "react";
import "./App.css";
import produce from "immer";
import Container from "./components/Container";

const numRows = 25;
const numCols = 25;

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

const generateEmptyGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
        // 0 indicates dead cell
        rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
};

function App() {
    const [grid, setGrid] = useState(() => {
        return generateEmptyGrid();
    });

    const [running, setRunning] = useState(false);

    const runningRef = useRef();
    runningRef.current = running;

    const runSimulation = useCallback(() => {
        if (!runningRef.current) {
            return;
        }
        // simulate
        setGrid((current_grid) => {
            return produce(current_grid, (gridCopy) => {
                // Iterate through the current grid
                for (let i = 0; i < numRows; i++) {
                    for (let j = 0; j < numCols; j++) {
                        // Compute the number of neighbors
                        let neighbors = 0;
                        operations.forEach(([x, y]) => {
                            const newI = i + x;
                            const newJ = j + y;
                            // Checking to make sure it's not out of bounds
                            if (
                                newI >= 0 &&
                                newI < numRows &&
                                newJ >= 0 &&
                                newJ < numCols
                            ) {
                                neighbors += current_grid[newI][newJ];
                            }
                        });
                        // Determines what happens to cell
                        if (neighbors < 2 || neighbors > 3) {
                            gridCopy[i][j] = 0;
                        } else if (gridCopy[i][j] === 0 && neighbors === 3) {
                            gridCopy[i][j] = 1;
                        }
                    }
                }
            });
        });

        setTimeout(runSimulation, 1000);
    }, []);

    return (
        <>
            <button
                onClick={() => {
                    setRunning(!running);
                    if (!running) {
                        runningRef.current = true;
                        runSimulation();
                    }
                }}
            >
                {running ? "Stop" : "Start"}
            </button>
            <button
                onClick={() => {
                    setGrid(generateEmptyGrid());
                }}
            >
                Clear
            </button>
            <button
                onClick={() => {
                    const rows = [];
                    for (let i = 0; i < numRows; i++) {
                        // 0 indicates dead cell
                        rows.push(
                            Array.from(Array(numCols), () =>
                                Math.random() > 0.5 ? 1 : 0
                            )
                        );
                    }
                    setGrid(rows);
                }}
            >
                Random
            </button>
            <div
                className="App"
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${numCols}, 20px)`,
                }}
            >
                {grid.map((rows, row_index) =>
                    rows.map((col, col_index) => (
                        <div
                            onClick={() => {
                                const newGrid = produce(grid, (gridCopy) => {
                                    gridCopy[row_index][col_index] = grid[
                                        row_index
                                    ][col_index]
                                        ? 0
                                        : 1;
                                });
                                setGrid(newGrid);
                            }}
                            key={`${row_index} - ${col_index}`}
                            style={{
                                width: 20,
                                height: 20,
                                backgroundColor: grid[row_index][col_index]
                                    ? "green"
                                    : undefined,
                                border: "solid black 1px",
                            }}
                        />
                    ))
                )}
            </div>
        </>
    );
}

export default App;
