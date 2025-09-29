/** 
 * This is a simple example of a TypeScript program that runs in Node.js.
 * It demonstrates basic TypeScript syntax, type annotations, and function usage.
 * 
 * Your job is to answer to the exercices described in the README.md file.
 * 
 * (You can delete the below block of code to do your exercises)
 * 
 * For the -- main -- branch containing your -- homework --:
 *      - You will find a README.md file with the instructions for the exercises.
 *      - Your code will be executed automatically to grade your work.
 *      - So please, use the exact same file names and structure as described in the README.md.
 * 
 * Let's get started!
 * **/



/**
 * Exercise: fetch todos from JSONPlaceholder, filter completed ones,
 * and log the number and titles. Handle network errors and bad responses.
 */

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

async function fetchAndFilterTodos(): Promise<void> {
    const url = 'https://jsonplaceholder.typicode.com/todos';

    try {
        // Use globalThis.fetch to avoid TypeScript DOM typings issues in Node environments
        const resp = await (globalThis as any).fetch(url);

        if (!resp.ok) {
            console.log('Network response was not ok');
            return;
        }

        const todos: Todo[] = await resp.json();

        const completed = todos.filter((t) => t.completed === true);

        console.log(`Number of completed tasks: ${completed.length}`);
        console.log('Titles of completed tasks:', completed.map((t) => t.title));
    } catch (err) {
        console.error('Fetch error:', (err as Error).message);
    }
}

// Run the function when this file is executed
fetchAndFilterTodos();