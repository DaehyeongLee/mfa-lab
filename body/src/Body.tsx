import React from 'react';

const Body: React.FC = () => {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome to Micro Frontend Demo</h1>
      <p>This is the main content area of the application.</p>
      <section>
        <h2>Features</h2>
        <ul>
          <li>Built with React 18</li>
          <li>TypeScript support</li>
          <li>Micro Frontend architecture</li>
          <li>Single SPA integration</li>
        </ul>
      </section>
    </main>
  );
};

export default Body; 