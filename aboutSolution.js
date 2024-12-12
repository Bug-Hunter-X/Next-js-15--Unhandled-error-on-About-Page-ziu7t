```javascript
// pages/aboutSolution.js

export default function About() {
  let result = 'Undefined';

  try {
    const a = 10;
    const b = 0;
    result = a / b; 
  } catch (error) {
    result = "Error: Division by zero.";
    console.error("Error calculating result:", error); //Log error details for debugging
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>The result is: {result}</p>
    </div>
  );
}
```