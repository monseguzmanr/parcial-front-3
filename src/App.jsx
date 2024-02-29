import { useState } from 'react';
import './App.css';
import { Card } from './components/Card';

function App() {

  const [nombre, setNombre] = useState('');
  const [animal, setAnimal] = useState('');
  const [mostrarCard, setMostrarCard] = useState(false);
  const [mensaje, setMensajeError] = useState(false);

  const onChangeNombre = (e) => setNombre(e.target.value);
  const onChangeAnimal = (e) => setAnimal(e.target.value);

  const isValidNombre = (name) => {
    let inValid = /\s/;
    return name.trim().length > 2 && !inValid.test(name);
  };

  const isValidAnimal = (animal) => {
    return animal.trim().length > 5;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidNombre(nombre) && isValidAnimal(animal)) {
      setMostrarCard(true);
      setMensajeError(false);
    } else {
      setMostrarCard(false);
      setMensajeError(true);
    }
  };

  return (
    
      <div>
        
        <h1>Parcial Front-end 3 - Monserrat Guzman</h1>
        <div class="formulario">
          <form onSubmit={handleSubmit}>

          <label>
            Nombre:
            <input type="text" placeholder='Ingresa tu nombre' value={nombre} onChange={onChangeNombre}/>
          </label>

          <label>
            Animal Favorito:
            <input type="text" value={animal} placeholder="Animal favorito" onChange={onChangeAnimal}/>
          </label>

          <button type='submit'>Submit</button>
          </form>
        </div>



        {mensaje && (
          <p style={{ color: 'red' }}>
            Por favor chequea que la información sea correcta
          </p>
        )}

        {mostrarCard && <Card nombre={nombre} animal={animal} />}
      
      </div>

  );
}

export default App;