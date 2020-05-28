import React from "react";

const About = (props) => {
    return (
        <div className="about">
            <h3>About</h3>
            <p>
                The Game of Life created by John Conway in 1970. Players create
                or select an initial configuration and then observe how it
                evolves over an infinite number of generations. The world is an
                infinite 2D grid of square cells, each that can be either dead
                or alive. Every cell interacts with its eight neighbors
                (horizontally, vertically, diagonally or adjacent) and after
                every generation, the rules dictate which cells live and die.
            </p>
            <h4>The Rules</h4>
            <ul>
                <li>
                    Any live cell with fewer than two live neighbors dies, as if
                    by underpopulation.
                </li>
                <li>
                    Any live cell with two or three live neighbors lives on to
                    the next generation.
                </li>
                <li>
                    Any live cell with more than three live neighbors dies, as
                    if by overpopulation.
                </li>
                <li>
                    Any dead cell with exactly three live neighbors becomes a
                    live cell, as if by reproduction.
                </li>
                <li>Rule</li>
            </ul>
        </div>
    );
};

export default About;
