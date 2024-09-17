import { useEffect, useState } from "react";

function Calendario() {
  const [matches, setMatches] = useState<string[]>([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch("/api/calendario");
        const data = await response.json();
        setMatches(data);
      } catch (error) {
        console.error("Error al cargar el calendario:", error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div className="footer-section">
      <h5>Calendario</h5>
      <ul>
        {matches.map((match) => (
          <li key={match}>{match}</li>
        ))}
      </ul>
    </div>
  );
}

export default Calendario;
