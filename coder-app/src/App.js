import logo from './logo.svg';
import './App.css';

/* Con props por defecto  */
/* const Titulo = (props) => {
  return <h1>Hola {props.firstName} {props.lastName ? props.lastName : 'No tiene apellido'}</h1>
} */

/* Especificando las propiedades que va a recibir el componente */
const Titulo = ({firstName, lastName}) => {
  return <h1>Hola {firstName} { lastName ? lastName : 'No tiene apellido' }</h1>
}

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Titulo firstName="Seba" lastName="Zuviria"/>
        <Titulo firstName="María"/>
        <img src={logo} className="App-logo" alt="logo" />      
      </header>
    </div>
  );
}

export default App;
