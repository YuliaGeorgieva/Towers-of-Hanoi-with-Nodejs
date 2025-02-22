import { hanoiIterative } from '../iterative.js';

describe('Performance Tests for Iterative Towers of Hanoi', () => {
    test('Iterative performance with 20 disks', () => {
        expect(() => hanoiIterative(20, 'A', 'C', 'B')).not.toThrow(); 
    });
});
