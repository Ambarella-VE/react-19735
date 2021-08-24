import logo from './logo.svg';
import './App.css';

function App() {
  
  /* ------------ Spread Operators ------------ */
  const numeros = [1, 2, 3 , 4]

  console.log(numeros)

  // ... trae los elementos del array que llama y permite agregar más elementos en el nuevo array
  const nuevoNumeros = [...numeros, 5, 6]

  console.log(nuevoNumeros)

  const objeto = {
    tipo: 'vehículo',
    marca: 'mercedes benz',
    modelo: 'c200',
    año: '2017'
  }

  console.log(objeto)

  // ... trae los elementos del objeto que llama y permite hacer cambios solo a ciertas keys en el nuevo objeto
  const nuevoObjeto = {
    ...objeto,
    año:'2019'
  }

  console.log(nuevoObjeto)

  /* -------------- Destructuring ------------- */
  let a, b

  // Este modo nos permite asignarle valores de un array a dos variables al mismo tiempo
  [a, b] = [10, 20]

  console.log(a)
  console.log(b)

  let c, d, rest
  // Este modo nos permite asignarle valores de un array a dos variables al mismo tiempo y al utilizar ... en rest nos asigna el resto de valores del array a esa ultima variable
  [c, d, ...rest] = [10, 20, 40, 50, 60]

  console.log(c)
  console.log(d)
  console.log(rest)

  let e, f
  // De otra manera, solo asigna a las variables existentes la cantidad de valores que alcancen
  [e, f] = [10, 20, 40, 50, 60]

  console.log(e)
  console.log(f)

  // Muy similar con objetos
  const empleado = {
    nombre: 'Sebastian',
    profesión: 'Desarrollador',
    curso: 'Reactjs'
  }

  const key = 'nombre'
  const { [key]: propiedadEliminada, profesión, ...restoPropiedades } = empleado

  console.log(propiedadEliminada)
  console.log(profesión)
  console.log(restoPropiedades)

  /* ----------------- Arrays ----------------- */
  const array = [
    {name: 'seba', age: 28},
    {name: 'ana', age: 28},
    {name: 'jose', age: 21},
    {name: 'juan', age: 32},
    {name: 'pepe', age: 19},
  ]

  const nuevoArray = array.filter(elemento => elemento['age']===28)
  console.log(nuevoArray)

  const números = [1, 2, 3]

  const nuevosNumeros = números.map( x => x*2)

  console.log(nuevosNumeros)


  /* ---------------- For each loop ---------------- */
  números.forEach(elemento => 
    console.log(elemento)
    )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
