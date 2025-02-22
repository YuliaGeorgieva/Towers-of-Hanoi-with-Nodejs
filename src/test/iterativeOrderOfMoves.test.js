import { hanoiIterative } from '../iterative.js';

function validateMoves(moves) {
    const rods = { A: [], B: [], C: [] };

    for (const move of moves) {
        const match = move.match(/(\d+)\. Move disk (\d+) from (\w) → (\w)/);
        if (match) {
            const diskNumber = parseInt(match[2], 10);
            const fromRod = match[3];
            const toRod = match[4];

            // Check if the move is valid: cannot place a larger disk on a smaller disk
            if (rods[toRod].length > 0 && rods[toRod][rods[toRod].length - 1] < diskNumber) {
                throw new Error(`Invalid move: Cannot place disk ${diskNumber} on top of a smaller disk on rod ${toRod}`);
            }

            rods[fromRod] = rods[fromRod].filter(d => d !== diskNumber);
            rods[toRod].push(diskNumber);
        }
    }
}

describe('Order of Moves Tests for Iterative Towers of Hanoi', () => {
    test('Iterative solution generates valid moves for 3 disks', () => {
        const moves = hanoiIterative(3, 'A', 'C', 'B');
        expect(() => validateMoves(moves)).not.toThrow();
    });

    test('Iterative solution generates valid moves for 2 disks', () => {
        const moves = hanoiIterative(2, 'A', 'C', 'B');
        expect(() => validateMoves(moves)).not.toThrow();
    });
});
