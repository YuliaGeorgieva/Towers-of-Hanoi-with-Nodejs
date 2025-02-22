import readline from 'readline';
import { hanoiRecursive } from './recursive.js';
import { hanoiIterative } from './iterative.js';

/**
 * Prompts the user to enter the number of disks and displays both recursive 
 * and iterative solutions.
 */

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const getNumberOfDisks = () => {
        rl.question("Enter the number of disks: ", (input) => {
            const numDisks = parseInt(input, 10);

            if (isNaN(numDisks) || numDisks <= 0) {
                console.log("Number of disks must be bigger than 0.");
                return getNumberOfDisks(); // Prompt the user again
            }

            console.log(`\nSolving Towers of Hanoi for ${numDisks} disks:\n`);

            // Recursive Solution
            console.log("Recursive Solution:");
            const recursiveMoves = hanoiRecursive(numDisks, 'A', 'C', 'B');
            console.log(recursiveMoves.join("\n"));

            console.log("\n---------------------------------\n");

            // Iterative Solution
            console.log("Iterative Solution:");
            const iterativeMoves = hanoiIterative(numDisks, 'A', 'C', 'B');
            console.log(iterativeMoves.join("\n"));

            rl.close();
        });
    };

    getNumberOfDisks(); // Initial call to get the number of disks
}

main();
