# Solution for Towers of Hanoi using Nodejs


After clonning this repository install the required the dependencies: 
#### npm install

To run the program : 
#### npm start

To run the tests: 

#### npm test

There are several tests for performance, for edge cases and order of moves as well as the implementation of the recursive and iterative solutions


## TOWERS OF HANOI

The Towers of Hanoi is a classic mathematical puzzle involving three rods(A ,B, C) and N 
disks of different sizes. The puzzle starts with all the disks stacked in decreasing size on one 
rod, and the objective is to move all the disks to another rod following these rules: 
1. Only one disk can be moved at a time. 
2. A larger disk cannot be placed on top of a smaller disk. 
3. A disk can only be moved from the top of one rod to another rod.

Requirements

● Implement the Towers of Hanoi algorithm using recursion.
● Implement the same algorithm without recursion
● Document the solutions with clear explanations.
● Write test cases to validate correctness.

Example 
For N = 3 disks, the solution involves the following moves: 
1. Move disk 1 from A → C 
2. Move disk 2 from A → B 
3. Move disk 1 from C → B 
4. Move disk 3 from A → C 
5. Move disk 1 from B → A 
6. Move disk 2 from B → C 
7. Move disk 1 from A → C


![HanoiTowers1](https://github.com/user-attachments/assets/33e5f4f1-aa5a-4404-a485-733586b38b46)
![HanoiTowers2](https://github.com/user-attachments/assets/9ba48a0b-07ce-44a5-a801-7e27e6e99aa3)
![HanoiTowers3](https://github.com/user-attachments/assets/98154467-e7fb-4e6d-a0aa-08295aa60a93)


Recursive solution: 
Move the top n−1 disks from the starting rod to the auxiliary rod, as a temporary holding area.
Move the remaining disk (the biggest) directly to the destination rod.
Then move n-1 disks from the auxiliary rod to the destination rod
![Diagram](https://github.com/user-attachments/assets/58581a9f-a6fd-458f-b99f-242dcd47a920)



Iterative solution: 
Use a loop to perform the required moves, while alternating between the available rods based on the move count and whether the number of disks is even or odd.
If the number is even, the rods are swapped

![Logic](https://github.com/user-attachments/assets/87d87509-4b4c-45fb-b98e-314f99059241)


The time complexity for both is O(2^n)


