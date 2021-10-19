//import logo from './logo.svg';
//import './App.css';
// import React, {Fragment} from 'react'; //para trabajar como elementos
import "./styles/style.scss"
import Curso from './Curso'
import Banner from './Banner'
import Formulario from './Formulario'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Topbar from './Banner'


// const cursos = [
//   {
//     "nombre": "Base de Datos",
//     "image": "data:image/jpeg;base64,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",
//     "price": "2000mnx",
//     "profesor": "Samuel Lopez"
//   },
//   {
//     "nombre": "Java desde Cero",
//     "image": "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/06/wallpaper-halo.jpg?itok=jpnVs2JW",
//     "price": "1500mnx",
//     "profesor": "Angela Ríos"
//   },
//   {
//     "nombre": "NodeJS desde Cero",
//     "image": "https://www.xtrafondos.com/wallpapers/call-of-duty-mobile-hidora-kai-skin-6472.jpg",
//     "price": "1500mnx",
//     "profesor": "Jair Vazquez"
//   },
//   // {
//   //   "nombre" : "React desde Cero",
//   //   "image"  : "https://swall.teahub.io/photos/small/10-104146_abstract-macbook-pro-wallpaper-hd-fondos-de-pantalla.jpg",
//   //   "price"  : "2500mnx",
//   //   "profesor" : "Jorge Valencia"
//   // }
// ]

const App = () => (
  //Todo va dentro de un div general para trabajar elementos cerrando al final
  //<Fragment></Fragment> //para trabajar con elementos cerrandose al final
  // </> // tambien para agregar elementos cerrando al final
  //<>
  <Router>
    <Switch>
      <Route path="/" exact component={Banner} />
      {/* <Banner />
      <div className="ed-grid m-grid-3">
        {
          cursos.map(c => <Curso nombre={c.nombre} image={c.image} price={c.price} profesor={c.profesor} />)
        }
      </div> */}
      <Route path="/formulario" exact component={Formulario} />
      {/* <Formulario /> */}

      <Route path="/curso" exact component={Curso} />
      {/* <Curso /> */}

      <Route component={() => (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <span>Web page not found.</span>
        </div>
      )} />
    </Switch>
  </Router>
  //</>

  /* <Curso  //para el paso de todas las propiedades
      nombre : "Curso desde Cero"
      image : ""
      price : "1200mnx"
      profesor : "Juana Marquez"
      location : "Online"
      />
  */

)
export default App;
