# Conway's Game of Life

## The Game

A very famous cellular automaton is John Conway's Game of Life. app. This game is a class of discrete model known as a Cellular Automaton, abbreviated CA.

It's made up of a grid of cells (usually 2D, but can be any dimension) that follow a simple set of rules from which complex behaviors can emerge.

In the Game of Life, these rules examine each cell of the grid. For each cell, it counts that cell's eight neighbors (up, down, left, right, and diagonals), and then act on that result.

-   If the cell is alive and has 2 or 3 neighbors, then it remains alive. Else it dies.
-   If the cell is dead and has exactly 3 neighbors, then it comes to life. Else if remains dead.
    From those two rules, many types of "creatures" can be created that move around the "landscape".

## Cellular Automata

A cellular automaton (plural: cellular automata, abbreviated CA) is a program that operates on data typically stored in a 2D grid.

A simple set of rules describes how the value in a cell on the grid changes over time, often as the result of the states of that cell's neighbors.

Each round of the simulation examines the current state of the grid, and then produces an entirely new grid consisting of the old state.

This new grid becomes the "current" state of the simulation, and the process repeats. Each new grid is referred to as a generation.

The beautiful thing about cellular automata is that sometimes very complex behavior can emerge from very simple rules.

Practically speaking, CAs have been used in biological and chemical simulations and other areas of research, such as CA-based computer processors, and other numeric techniques.

## Turing Completeness

We say a computing system is Turing Complete if it is capable of performing arbitrary, general purpose computation.

Using a construct in The Game of Life called a glider gun, it's possible to build a rudimentary NAND gate in the Game of Life. While a NAND gate by itself isn't enough to be Turing Complete, the "infinite" grid of The Game of Life allows you to use them (or any other functionally complete operator) to build any other type of logical "circuitry" and memory, as well.

Anything computable can be computed in The Game of Life given a large enough grid and enough time. Most people, however, find JavaScript to be a far easier development medium.

## Double Buffering

There's a technique that's commonly used in graphics programming called double buffering. This is when we display one buffer to the user, but do work on one that's hidden from sight. In this way, the user doesn't see the buffer being generated, they only see the one that was previously completed.

When we're done doing work on the hidden buffer, we page flip and show the hidden buffer to the user. Then the previously-displayed buffer becomes the new hidden buffer, and work begins again.

There are multiple benefits to this approach.

One is that the user doesn't see the work being progressively completed. From their perspective, the work is suddenly done as soon as the page flips.

Another is that the program can use the previous buffer (i.e. the one that is currently being displayed) as a source for material to perform calculations to produce the next buffer. This is particularly beneficial where you need to produce a completely new output based on the complete previous output. If you were to only use a single buffer, you'd have to overwrite the pixels as you went, and this might affect the outcome of the subsequent pixels in an undesirable way.

And this is very useful when implementing a cellular automaton.

There will be two arrays of data for the automaton. One of them holds the data that the user currently sees on the canvas. The other one is where the next frame to be shown is being actively constructed.

After the new frame is constructed, the next from becomes the current frame, and the current frame becomes the next frame. And the process repeats.

Also note that this approach is vaguely reminiscent of the Model and View in the MVC pattern where the Model is manipulated then displayed by the View.
