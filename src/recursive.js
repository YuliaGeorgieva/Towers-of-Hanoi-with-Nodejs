/**
 * Recursive Solvution the Towers of Hanoi
 *
 * @param {number} n - The number of disks to move.
 * @param {string} startRod - The rod where the disks begin -> A
 * @param {string} endRod - The rod where the disks need to go -> C
 * @param {string} middleRod - The rod used temporarily during the process -> B
 * @param {string[]} [moves=[]] - An array that stores each move as a string.
 * @param {{ count: number }} [step={ count: 0 }] - An object tracking the move count.
 * @returns {string[]} A list of step-by-step moves, formatted as -> Move disk N from A → B
 * @throws {Error} If n is not a number or is negative.
 */



export function hanoiRecursive(n, startRod, endRod, middleRod, moves = [], step = { count: 0 }) {

    if (typeof n !== 'number' || n < 0) {
        throw new Error('Number of disks cannot be negative.');
    }


    if (n === 0) {
        return moves;
    }

    if (n === 1) {
        step.count++;
        moves.push(`${step.count}. Move disk 1 from ${startRod} → ${endRod}`);
        return moves;
    }

    
    hanoiRecursive(n - 1, startRod, middleRod, endRod, moves, step);

    step.count++;
    moves.push(`${step.count}. Move disk ${n} from ${startRod} → ${endRod}`);

    hanoiRecursive(n - 1, middleRod, endRod, startRod, moves, step);
    
    return moves;
}
