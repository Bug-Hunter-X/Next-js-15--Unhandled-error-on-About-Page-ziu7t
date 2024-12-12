```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // Simulate an error
  const a = 10;
  const b = 0;
  const result = a / b; //Causes an error

  return (
    <div>
      <h1>About Page</h1>
      <p>The result is: {result}</p> 
    </div>
  );
}
```