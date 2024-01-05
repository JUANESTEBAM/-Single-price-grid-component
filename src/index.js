// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Components/Card'; // Asegúrate de que la ruta y la capitalización coincidan

ReactDOM.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
);
