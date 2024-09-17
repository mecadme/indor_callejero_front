import Equipos from "./Equipos.tsx";
import Calendario from "./Calendario.tsx";
import Standings from "./Standings.tsx";
import Estadisticas from "./Estadisticas.tsx";
import Pronosticos from "./Pronosticos.tsx";
import Comparaciones from "./Comparaciones.tsx";

import "../../css/Footer.css";
import Sponsors from "../Sponsors.tsx";

function Footer() {
  return (
    <footer className="footer-container">
      {/* Sección de patrocinadores */}
      <div className="sponsors">
        <Sponsors />
      </div>

      {/* Sección de columnas del footer */}
      <div className="column-footer">
        <div className="equipo">
          <Equipos />
        </div>
        <div className="schedule">
          <Calendario />
        </div>
        <div className="standings">
          <Standings />
        </div>
        <div className="estadisticas">
          <Estadisticas />
        </div>
        <div className="pronosticos">
          <Pronosticos />
        </div>
        <div className="comparaciones">
          <Comparaciones />
        </div>
      </div>

      {/* Powered by */}
      <div className="powered-by">
        <p>Powered by IPSUM SOLUTIO</p>
      </div>
    </footer>
  );
}

export default Footer;
