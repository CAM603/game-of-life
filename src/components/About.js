import React from "react";

const About = () => {
    return (
        <div className="about">
            <h3>About</h3>
            <p>
                The Game of Life was created by{" "}
                <a
                    className="link"
                    href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
                    target="_blank"
                >
                    John Conway
                </a>{" "}
                in 1970. The game consists of a 2D grid of cells, each cell
                having one of two states: dead or alive. A new generation of
                cells is created according to a simple set of rules, from which
                complex behaviors can emerge. Players can create or select an
                initial configuration and then observe how it evolves over an
                infinite number of generations. Every cell interacts with its
                eight neighbors (horizontally, vertically, diagonally or
                adjacent) and after every generation, the rules dictate which
                cells live and die.
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
            </ul>
        </div>
    );
};

export default About;
