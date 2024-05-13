import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header.jsx"
import ListaVagas from "./pages/ListaVagas.jsx"
import './App.css';
import CadastroVaga from "./pages/CadastroVaga.jsx";
import VagasLivres from "./pages/VagasLivres.jsx";


function App() {
  return (
    <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <ListaVagas />
          </Route>
          <Route exact path="/cadastro">
            <CadastroVaga />
          </Route>
          <Route exact path="/vagas-livres">
            <VagasLivres />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
