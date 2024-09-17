import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/EquipoSemana.css";

interface Player {
  id: number;
  name: string;
  position: string;
  imageUrl: string; // En caso de que tenga imagen
}

// Mapeo de las áreas de grid según la posición del jugador
const gridPositionMap = {
  Portero: "portero",
  Defensa1: "defensa1",
  Defensa2: "defensa2",
  Medio1: "medio1",
  Medio2: "medio2",
  Delantero: "delantero",
};

function EquipoSemana() {
  let defensaCount = 0;
  let medioCount = 0;

  const [team, setTeam] = useState<Player[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Simulación de llamada a la API
  const fetchTeam = async () => {
    try {
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
            position: "Defensa",
            imageUrl: "https://via.placeholder.com/60",
          },
          {
            id: 3,
            name: "Sergio Ramos",
            position: "Defensa",
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

      setTeam(data.players); // Simulación de una API que devuelve un array de jugadores
      setLoading(false);
    } catch (error) {
      setError("No se pudo cargar el equipo");
      setLoading(false);
    }
  };

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
          <div className="team-grid">
            {team.map((player) => {
              let gridArea = "";

              // Asignar el área del grid dependiendo de la posición del jugador
              if (player.position === "Portero") {
                gridArea = gridPositionMap.Portero;
              } else if (player.position === "Defensa") {
                defensaCount++;
                gridArea =
                  gridPositionMap[
                    `Defensa${defensaCount}` as keyof typeof gridPositionMap
                  ];
              } else if (player.position === "Mediocampista") {
                medioCount++;
                gridArea =
                  gridPositionMap[
                    `Medio${medioCount}` as keyof typeof gridPositionMap
                  ];
              } else if (player.position === "Delantero") {
                gridArea = gridPositionMap.Delantero;
              }

              return (
                <div
                  key={player.id}
                  className={`player player-${player.id}`}
                  style={{ gridArea }}
                >
                  <img
                    src={player.imageUrl}
                    alt={player.name}
                    className="img-player"
                  />
                  <span>{player.name}</span>
                  <small className="text-muted">{player.position}</small>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EquipoSemana;
