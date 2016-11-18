## Frozen Milk

### Background

Frozen Milk is vertical scroller game from top to bottom.
A player will control a cow, attempting to ski through between the flags in order to earn high points.

### Functionality & MVP  

With Frozen Milk users will be able to:

- [ ] Start, pause, and reset the game board
- [ ] Click or press a single button to change directions
- [ ] Audio features that feels like skiing
- [ ] Change difficulty as the game advances

In addition, this project will include:

- [ ] An About modal describing the background and rules of the game
- [ ] A production README
- [ ] Extra characters

### Wireframes

This app will consist of a single screen with game board, game controls, and nav links to the Github, my LinkedIn,
and the About modal.

![start](./assets/wireframe/start.png)
![ingame](./assets/wireframe/ingame.png)
![paused](./assets/wireframe/paused.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic,
- `Easel.js` with `HTML5 Canvas` for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be three scripts involved in this project:

`board.js`: this script will handle the logic for creating and updating the necessary `Easel.js` elements and rendering them to the DOM.

`cow.js`: this script will handle the user interaction logic. Losing conditions will be included.

`flags.js`: this script will handle populating random distance flag poles.

### Implementation Timeline

**Day 1**: Setup and render elements on the page

- Get a green bundle with `webpack`
- Learn enough `Easel.js` to render an object to the `Canvas` element

**Day 2**: Create logic for flag population

- Complete `flag.js` logic which are populated in random distance in random positions
- Losing conditions for `cow.js`

**Day 3**: Collision and keyboard interactions

- speed for `cow.js`
- collision box for cow and flags
- map keyboard interactions for user

**Day 4**: polish looks and visual effects and sounds

- Have a styled `Canvas`, nice looking controls and title
- If time: include more difficult phases and more character variations

### Bonus features

There are many directions this cellular automata engine could eventually go.  Some anticipated updates are:

- [ ] Keep track of the highest scores
- [ ] Add different characters for user to choose to play as
