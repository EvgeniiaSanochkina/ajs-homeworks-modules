import defaultCharacter from './domain.js';

class Game {
    start() {
        console.log('game started');
    }
}

console.log(defaultCharacter);

const defaultGame = new Game();
export default defaultGame;



export class GameSavingData {};
export function readGameSaving() {};
export function writeGameSaving() {};