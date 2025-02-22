import { hanoiRecursive } from '../recursive.js';

describe('Recursive Hanoi Edge Cases', () => {
    test('Recursive Hanoi with 0 disks', () => {
        expect(hanoiRecursive(0, 'A', 'C', 'B')).toEqual([]);
    });

    test('Recursive Hanoi with negative disks', () => {
        expect(() => hanoiRecursive(-1, 'A', 'C', 'B')).toThrow();
    });

    test('Recursive Hanoi with non-integer input', () => {
        expect(() => hanoiRecursive('three', 'A', 'C', 'B')).toThrow();
    });

    test('Recursive Hanoi with large number of disks', () => {
        const moves = hanoiRecursive(10, 'A', 'C', 'B');
        expect(moves.length).toBe(1023);
    });
});
