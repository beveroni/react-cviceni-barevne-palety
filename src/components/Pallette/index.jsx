import React from 'react';
import { SchemeColor } from '../SchemeColor/index.jsx';
import './style.css';

export const Palette = ({ paletteData }) => (
  <div className="palette">
    <div
      className={
        paletteData.direction === 'vertical'
          ? 'palette-scheme palette-scheme--vertical'
          : 'palette-scheme palette-scheme--horizontal'
      }
    >
      <img
        className="scheme-image"
        src={paletteData.image}
        alt={paletteData.name}
      />
      <div className="scheme-colors">
        {paletteData.colors.map((color) => (
          <SchemeColor key={color} color={color} />
        ))}
      </div>
    </div>
    <div className="palette-info">
      <h2>{paletteData.name}</h2>
      <p>{paletteData.description}</p>

      <p>
        Photo by{' '}
        <a href={paletteData.attribution.url} target="_blank">
          {paletteData.attribution.name}
        </a>
        .
      </p>
    </div>
  </div>
);
