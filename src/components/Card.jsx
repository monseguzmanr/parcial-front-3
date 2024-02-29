import React from 'react';

export const Card = ({ nombre, animal }) => {
  return (
    <div class="sucess">
      <h4>Nombre: {nombre}</h4>
      <h4>Tu animal favorito: {animal}</h4>
    </div>
  );
};