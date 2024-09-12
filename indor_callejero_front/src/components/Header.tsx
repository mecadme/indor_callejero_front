import logo from "../assets/indor_callejero_logo.png"; 
import TeamsBarComponent from "./TeamsBarComponent";
import "../css/Header.css";

const data = {
    getAllTeams: () => console.log('Get all teams'), // or some other implementation
    content: [
      { id: 1, name: 'Equipo 1', logoUrl: 'https://cdn-icons-png.flaticon.com/512/2102/2102633.png' },
      { id: 2, name: 'Equipo 2', logoUrl: 'https://cdn-icons-png.flaticon.com/512/2102/2102633.png' },
      { id: 3, name: 'Equipo 3' , logoUrl: 'https://cdn-icons-png.flaticon.com/512/2102/2102633.png'},
      { id: 4, name: 'Equipo 4', logoUrl: 'https://cdn-icons-png.flaticon.com/512/2102/2102633.png' },
      { id: 5, name: 'Equipo 5', logoUrl: 'https://cdn-icons-png.flaticon.com/512/2102/2102633.png' },
      { id: 6, name: 'Equipo 6', logoUrl: 'https://cdn-icons-png.flaticon.com/512/2102/2102633.png' },
      { id: 7, name: 'Equipo 7', logoUrl: 'https://cdn-icons-png.flaticon.com/512/2102/2102633.png' },
      { id: 8, name: 'Equipo 8', logoUrl: 'https://cdn-icons-png.flaticon.com/512/2102/2102633.png' },
      { id: 9, name: 'Equipo 9', logoUrl: 'https://cdn-icons-png.flaticon.com/512/2102/2102633.png' },
      { id: 10, name: 'Equipo 10', logoUrl: 'https://cdn-icons-png.flaticon.com/512/2102/2102633.png' },
      { id: 11, name: 'Equipo 11', logoUrl: 'https://cdn-icons-png.flaticon.com/512/2102/2102633.png' },
      { id: 12, name: 'Equipo 12', logoUrl: 'https://cdn-icons-png.flaticon.com/512/2102/2102633.png' },
    ],
  };
  

export default function Header() {
  return (
    <header className="header">
      <TeamsBarComponent content={data.content} getAllTeams={data.getAllTeams} />

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a 
            className="navbar-brand" 
            href="https://www.facebook.com/IndorCallejeroAzogues" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={logo} 
              alt="Logo de Indor Callejero" 
              className="logo" 
              width="50" 
            />
          </a>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="http://localhost:3000/PROYECTO_CALLEJERO" 
                  target="_blank"
                >
                  PROYECTO CALLEJERO
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="http://localhost:3000/TODO_LO_QUE_DEBES_SABER" 
                  target="_blank"
                >
                  TODO LO QUE DEBES SABER
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="http://localhost:3000/PALMARES_HISTORICO" 
                  target="_blank"
                >
                  PALMARÉS HISTÓRICO
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="http://localhost:3000/PRONOSTICOS" 
                  target="_blank"
                >
                  PRONÓSTICO DE RESULTADOS
                </a>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-primary">
                  <span className="material-symbols-outlined"> Iniciar Sesión </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
