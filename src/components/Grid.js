import React, { useState } from "react";
import Cell from "./Cell";

const Grid = (props) => {
    return (
        <div
            style={{
                backgroundColor: "grey",
                width: "500px",
                height: "500px",
                // width: "250px",
                // height: "250px",
                display: "flex",
                flexFlow: "row wrap",
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
