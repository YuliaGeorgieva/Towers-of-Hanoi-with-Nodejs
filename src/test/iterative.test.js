import { hanoiIterative } from '../iterative.js';

test('Iterative Hanoi with 3 disks', () => {
    const expectedMoves = [
        "1. Move disk 1 from A → C",
        "2. Move disk 2 from A → B",
        "3. Move disk 1 from C → B",
        "4. Move disk 3 from A → C",
        "5. Move disk 1 from B → A",
        "6. Move disk 2 from B → C",
        "7. Move disk 1 from A → C"
    ];

    expect(hanoiIterative(3, 'A', 'C', 'B')).toEqual(expectedMoves);
});

test('Iterative Hanoi with 1 disk', () => {
    expect(hanoiIterative(1, 'A', 'C', 'B')).toEqual(["1. Move disk 1 from A → C"]);
});

test('Iterative Hanoi with 2 disks', () => {
    const expectedMoves = [
        "1. Move disk 1 from A → B",
        "2. Move disk 2 from A → C",
        "3. Move disk 1 from B → C"
    ];

    expect(hanoiIterative(2, 'A', 'C', 'B')).toEqual(expectedMoves);
});
