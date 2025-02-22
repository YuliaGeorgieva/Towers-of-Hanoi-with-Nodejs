import { hanoiIterative } from '../iterative.js';

describe('Iterative Hanoi Edge Cases', () => {
    test('Iterative Hanoi with 0 disks', () => {
        expect(hanoiIterative(0, 'A', 'C', 'B')).toEqual([]);
    });

    test('Iterative Hanoi with negative disks', () => {
        expect(() => hanoiIterative(-1, 'A', 'C', 'B')).toThrow();
    });

    test('Iterative Hanoi with non-integer input', () => {
        expect(() => hanoiIterative('three', 'A', 'C', 'B')).toThrow();
    });

    test('Iterative Hanoi with large number of disks', () => {
        const moves = hanoiIterative(10, 'A', 'C', 'B');
        expect(moves.length).toBe(1023);
    });
});
