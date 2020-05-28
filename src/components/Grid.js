import React, { useState } from "react";
import Cell from "./Cell";

const Grid = (props) => {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${50}, 10px)`,
                backgroundColor: "grey",
            }}
        >
            {props.world.map((rows, row_index) =>
                rows.map((col, col_index) => (
                    <Cell
                        key={`${row_index} - ${col_index}`}
                        world={props.world}
                        row_index={row_index}
                        col_index={col_index}
                        setWorld={props.setWorld}
                        playing={props.playing}
                    />
                ))
            )}
        </div>
    );
};

export default Grid;
