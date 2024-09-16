import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../css/EquipoSemana.css";

interface Player {
  id: number;
  name: string;
  position: string;
  imageUrl: string; // En caso de que tenga imagen
}

function EquipoSemana() {
  const [team, setTeam] = useState<Player[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Simulación de llamada a la API
  const fetchTeam = async () => {
    try {
      // setLoading(true);
      // const response = await fetch("https://api.example.com/team-of-the-week"); // Cambia a tu API
      // if (!response.ok) throw new Error("Error al obtener los datos");
      // const data = await response.json();
      // setTeam(data.players); // Asumiendo que la API devuelve un array de jugadores
      // setLoading(false);
      const data = {
        players: [
          {
            id: 1,
            name: "Lionel Messi",
            position: "Delantero",
            imageUrl: "https://via.placeholder.com/60",
          },
          {
            id: 2,
            name: "Cristiano Ronaldo",
            position: "Delantero",
            imageUrl: "https://via.placeholder.com/60",
          },
          {
            id: 3,
            name: "Sergio Ramos",
            position: "Defensor",
            imageUrl: "https://via.placeholder.com/60",
          },
          {
            id: 4,
            name: "Manuel Neuer",
            position: "Portero",
            imageUrl: "https://via.placeholder.com/60",
          },
          {
            id: 5,
            name: "Kevin De Bruyne",
            position: "Mediocampista",
            imageUrl: "https://via.placeholder.com/60",
          },
          {
            id: 6,
            name: "Eden Hazard",
            position: "Mediocampista",
            imageUrl: "https://via.placeholder.com/60",
          },
        ],
      };

      // Simulación de una API que devuelve un array de jugadores
      setTeam(data.players);
      setLoading(false);
    } catch (error) {
      setError("No se pudo cargar el equipo");
      setLoading(false);
    }
  };

  // Efecto para hacer la llamada a la API
  useEffect(() => {
    fetchTeam();
  }, []);

  if (loading) {
    return <div>Cargando equipo...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="week-team container">
      <h2 className="text-center mb-4">Equipo de la Semana</h2>
      <div className="cancha justify-content-center">
        <div className="field">
          <div className="row_player">
            {team.map((player) => (
              <div
              className={`col-4 player-${player.id}`}
                key={player.id}
              >
                <img
                  src={player.imageUrl}
                  alt={player.name}
                  className="img-fluid rounded-circle mb-2"
                  style={{ width: "50px", height: "50px" }}
                />
                <span>{player.name}</span>
                <small className="text-muted">{player.position}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EquipoSemana;
