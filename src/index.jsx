import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Palette } from './components/Pallette';
import { palettes } from './palettes';

// const palettes = [
//   {
//     name: 'Mimose Retreat',
//     image: '/img/mimosa-retreat.jpg',
//     colors: [
//       { code: '#583e26' },
//       { code: '#a78b71' },
//       { code: '#f7c815' },
//       { code: '#ec9704' },
//       { code: '#9c4a1a' },
//     ],
//   },
//   {
//     name: 'Ocean Waves',
//     image: '/img/ocean-waves.jpg',
//     colors: [
//       { code: '#012e4a' },
//       { code: '#036280' },
//       { code: '#378ba4' },
//       { code: '#81bece' },
//       { code: '#e8ede7' },
//     ],
//   },
// ];

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>
        {palettes.map((palette) => (
          <Palette key={palette.name} paletteData={palette} />
        ))}
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
