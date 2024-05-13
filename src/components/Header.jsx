import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <div class="container-full">
            <header class="container header">
                <h1>Estacionamento</h1>
                <nav class="menu">
                    <ul>
                        <li>
                            <Link to="/">Listar</Link>
                        </li>
                        <li>
                            <Link to="/cadastro">Cadastrar</Link>
                        </li>
                        <li>
                            <Link to="/vagas-livres">Vagas Livres</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
