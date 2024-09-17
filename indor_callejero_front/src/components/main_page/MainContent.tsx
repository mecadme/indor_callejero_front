import Jornada from "./Jornada";
import EquipoSemana from "./EquipoSemana";
import JugadorFecha from "./JugadorFecha";
import TecnicoFecha from "./TecnicoFecha.tsx";
import Tablas from "./Tablas.tsx";
import Videos from "./Videos.tsx";

import "../../css/MainContent.css";

function MainContent() {
  return (
    <main className="main-content">
      <div className="round_container">
        <Jornada />
        <div className="row_week">
          <div className="week_team">
            <EquipoSemana />
          </div>
          <div className="week_player">
            <JugadorFecha />
          </div>
          <div className="week_coach">
            <TecnicoFecha />
          </div>
        </div>
      </div>
      <div className="sponsor_container">
        Franja de auspicios
      </div>
      <div className="position_container">
        <Tablas />
        <Videos />
      </div>
      <div />
    </main>
  );
}

export default MainContent;
