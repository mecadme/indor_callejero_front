import Jornada from "./Jornada";
import EquipoSemana from "./EquipoSemana";
import JugadorFecha from "./JugadorFecha";
import TecnicoFecha from "./TecnicoFecha";
import Tablas from "./Tablas";
import Videos from "./Videos";

import "../css/MainContent.css";

function MainContent() {
  return (
    <main className="main-content">
      <div className="round_container">
        <Jornada />
        <div className="row">
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
      <div className="position_container"></div>
      <Tablas />
      <Videos />
      <div/>
    </main>
  );
}

export default MainContent;
