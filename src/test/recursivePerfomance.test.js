import { hanoiRecursive } from '../recursive.js';

describe('Performance Tests for Recursive Towers of Hanoi', () => {
    test('Recursive performance with 20 disks', () => {
        expect(() => hanoiRecursive(20, 'A', 'C', 'B')).not.toThrow();
    });
});
