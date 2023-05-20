import { Login } from "./components/Login";
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom'
import { Cursos } from "./components/Cursos";
import { Miscursos } from "./components/Miscursos";
import { Informacion } from "./components/Informacion";
import { Clase } from "./components/Clase";
import { Clase2 } from "./components/Clase2";


function App() {
  return (
    <>
      <Router>
      <div className="container">
        <Routes>
          <Route exact path={"/"} element={<Login></Login>}></Route>
          <Route path={"/cursos"} element={<Cursos></Cursos>}></Route>
          <Route path={"/miscursos"} element={<Miscursos></Miscursos>}></Route>
          <Route path={"/informacion"} element={<Informacion></Informacion>}></Route>
          <Route path={"/clase"} element={<Clase></Clase>}></Route>
          <Route path={"/clase2"} element={<Clase2></Clase2>}></Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}
export default App;
