class Game {
    start() {
        console.log('game started');
    }
}

import defaultCharacter from './domain.js';

console.log(defaultCharacter);

const defaultGame = new Game();
export default defaultGame;



export class GameSavingData {};
export function readGameSaving() {};
export function writeGameSaving() {};