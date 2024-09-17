import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Equipos() {
  const [teams, setTeams] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Estado de carga

  useEffect(() => {
    // Simulación de respuesta de la API
    const fetchTeams = async () => {
      try {
        const data = [
          "América",
          "Cruz Azul",
          "Chivas",
          "Pumas",
          "Monterrey",
          "Tigres",
          "León",
          "Santos Laguna",
          "Toluca",
          "Pachuca",
          "Necaxa",
          "Querétaro",
        ];

        // Simula retraso de red
        setTimeout(() => {
          setTeams(data);
          setLoading(false); // Cambiar el estado de carga a false cuando los equipos se cargan
        }, 1000); // Simula una demora de 1 segundo
      } catch (error) {
        console.error("Error al cargar equipos:", error);
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return <p>Cargando equipos...</p>; // Mostrar mensaje de carga mientras los datos están siendo recuperados
  }

  return (
    <div className="footer-section">
      <h5>Equipos</h5>
      <ul>
        {teams.map((team) => (
          <li key={team}>
            <Link to={`/equipo/${encodeURIComponent(team)}`}>{team}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Equipos;
