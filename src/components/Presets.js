import React from "react";

const Presets = (props) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <button>Preset1</button>
            <button>Preset2</button>
            <button>Preset3</button>
            <button>Preset4</button>
            <button>Preset5</button>
        </div>
    );
};

export default Presets;
