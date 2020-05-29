import React from "react";

const Cell = ({ world, row_index, col_index, setWorld, playing }) => {
    const handleClick = () => {
        if (playing) {
            return;
        }
        let newWorld = [...world];
        newWorld[row_index][col_index] = world[row_index][col_index] ? 0 : 1;
        setWorld(newWorld);
    };

    return (
        <>
            <div
                onClick={handleClick}
                className={`cell ${
                    world[row_index][col_index] ? "alive" : "dead"
                }`}
            />
        </>
    );
};

export default Cell;
