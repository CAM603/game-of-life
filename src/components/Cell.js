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
                style={{
                    width: 15,
                    height: 15,
                    backgroundColor: world[row_index][col_index]
                        ? "green"
                        : undefined,
                    border: "solid black 1px",
                }}
            />
        </>
    );
};

export default Cell;
