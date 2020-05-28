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
                    width: "10px",
                    height: "10px",
                    // width: "5px",
                    // height: "5px",
                    backgroundColor: world[row_index][col_index]
                        ? "#BADA22"
                        : undefined,
                    border: "solid purple 1px",
                }}
            />
        </>
    );
};

export default Cell;
