import React from 'react';
import ProductPage from './components/ProductPage'; // Importing your product gallery page
import './App.css'; // Optional: Tailwind CSS or custom styles

const App = () => {
  return (
    <div className="App bg-gray-100 min-h-screen">
      {/* Optional: Add a Navbar */}
      <header className="py-4 bg-white shadow">
        <h1 className="text-center text-3xl font-bold">My E-commerce Site</h1>
      </header>

      {/* Main Application */}
      <main className="p-8">
        <ProductPage />
      </main>

      {/* Optional: Add a Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 My E-commerce Site. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
