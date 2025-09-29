// Exercise: Manipulation des données
// Solutions pour: userNames, engineers, averageAge, userDescriptions

const users = [
  { id: 1, name: "Alice", age: 28, specialty: "Marketing" },
  { id: 2, name: "Bob", age: 35, specialty: "Engineering" },
  { id: 3, name: "Charlie", age: 22, specialty: "Marketing" },
  { id: 4, name: "David", age: 42, specialty: "Engineering" },
  { id: 5, name: "Eve", age: 29, specialty: "Design" },
];

// 1. User Names: array with only the names
const userNames = users.map(u => u.name);
console.log('userNames:', userNames);

// 2. Engineers: array of user objects working in Engineering
const engineers = users.filter(u => u.specialty === 'Engineering');
console.log('engineers:', engineers);

// 3. Average Age: calculate average age and store in averageAge (rounded to one decimal)
const totalAge = users.reduce((sum, u) => sum + u.age, 0);
const averageAge = Math.round((totalAge / users.length) * 10) / 10;
console.log('averageAge:', averageAge);

// 4. User Descriptions: array of strings describing each user
const userDescriptions = users.map(u => `${u.name} is ${u.age} years old.`);
console.log('userDescriptions:', userDescriptions);
