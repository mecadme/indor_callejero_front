import React from 'react';
import '../css/TeamBar.css';

interface Team {
  id: number;
  name: string;
  logoUrl: string;
}

interface TeamsBarProps {
  content: Team[];
  getAllTeams: (id: number) => void;
}

const TeamsBarComponent: React.FC<TeamsBarProps> = ({ content, getAllTeams }) => {
  return (
    <nav className="teams_bar navbar navbar-expand-lg navbar-light bg-light">
      <div className="team_container-fluid">
        {/* Si no hay equipos, muestra el mensaje */}
        {content.length === 0 && <div className="alert alert-info">No hay equipos</div>}
        
        {/* Lista de equipos */}
        <ul className="teams_logo_list">
          {content.length > 0 &&
            content.map((team) => (
              <li key={team.id} className="nav-item" onClick={() => getAllTeams(team.id)}>
                <a className="nav-link">
                  <img src={team.logoUrl} alt={team.name} className="logo_team" />
                </a>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default TeamsBarComponent;
