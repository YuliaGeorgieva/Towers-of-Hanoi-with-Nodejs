/**
 * Iterative solution of the Towers of Hanoi
 *
 * @param {number} n - The number of disks to move.
 * @param {string} startRod - The rod where the disks start -> A
 * @param {string} endRod - The rod where the disks should end up -> C
 * @param {string} middleRod - The rod used as a helper during the process -> B
 * @returns {string[]} A list of steps, each showing how to move a disk -> Move disk N from A → B
 * @throws {Error} If n is not a number or is negative.
 */



export function hanoiIterative(n, startRod, endRod, middleRod) {

    if (typeof n !== 'number') {
        throw new Error('The number of disks must be a number.');
    }
    if (n < 0) {
        throw new Error('The number of disks cannot be negative.');
    }

    const moves = [];
    const totalMoves = Math.pow(2, n) - 1;

    if (n === 0) {
        return moves;
    }

    const rods = { A: [], B: [], C: [] };

    for (let i = n; i >= 1; i--) {
        rods[startRod].push(i);
    }

    // If the number of disks is even, swap endRod and middleRod.
    if (n % 2 === 0) {
        [endRod, middleRod] = [middleRod, endRod];
    }


    for (let move = 1; move <= totalMoves; move++) {
        let from, to;


        if (move % 3 === 1) {
            from = startRod;
            to = endRod;
        } else if (move % 3 === 2) {
            from = startRod;
            to = middleRod;
        } else {
            from = middleRod;
            to = endRod;
        }


    if (rods[from].length === 0) {

        let disk = rods[to].pop();
        rods[from].push(disk);
        moves.push(`${move}. Move disk ${disk} from ${to} → ${from}`);

    } else if (rods[to].length === 0) {

        let disk = rods[from].pop();
        rods[to].push(disk);
        moves.push(`${move}. Move disk ${disk} from ${from} → ${to}`);

    } else {

        const fromDisk = rods[from][rods[from].length - 1];
        const toDisk = rods[to][rods[to].length - 1];

        if (fromDisk < toDisk) {

            let disk = rods[from].pop();
            rods[to].push(disk);
            moves.push(`${move}. Move disk ${disk} from ${from} → ${to}`);
        } else {

            let disk = rods[to].pop();
            rods[from].push(disk);
            moves.push(`${move}. Move disk ${disk} from ${to} → ${from}`);
        }
    }
}

return moves;

}