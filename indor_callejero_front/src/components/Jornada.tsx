import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Match {
  team1: string;
  team2: string;
  score1: number;
  score2: number;
}

interface JornadaData {
  date: string;
  matches: Match[];
}

const Jornada: React.FC = () => {
  const [jornadaData, setJornadaData] = useState<JornadaData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchJornadaData = async () => {
    try {
      // setLoading(true);
      // const response = await fetch('https://api.example.com/jornadas'); // Cambia a tu API real
      // if (!response.ok) throw new Error('Error al obtener los datos de la jornada');
      // const data = await response.json();
      // setJornadaData(data);
      // setLoading(false);
      setLoading(true);
    
    // Simula los datos como si vinieran de la API
    const data: JornadaData[] = [
      {
        date: "Martes 24 de Septiembre",
        matches: [
          { team1: "PLA", team2: "LC3", score1: 2, score2: 1 },
          { team1: "AMI", team2: "PIL", score1: 3, score2: 3 },
          { team1: "CAN", team2: "RID", score1: 0, score2: 0 }
        ]
      },
      {
        date: "Jueves 26 de Septiembre",
        matches: [
          { team1: "5ES", team2: "SFR", score1: 1, score2: 2 },
          { team1: "4ES", team2: "UCH", score1: 0, score2: 4 },
          { team1: "FVS", team2: "ZHI", score1: 3, score2: 1 }
        ]
      }
    ];

    setJornadaData(data);
    setLoading(false);
    } catch (error) {
      setError('No se pudo cargar la jornada');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJornadaData();
  }, []);

  if (loading) {
    return <div>Cargando jornada...</div>;
  }

  if (error) {
    return <div className='error'>{error}</div>;
  }

  return (
    <div className="jornada container">
      <h2 className="text-center mb-4">Jornada</h2>

      {jornadaData.map((jornada, index) => (
        <div key={index} className="mb-4">
          <p><strong>{jornada.date}</strong></p>
          <ul className="list-group">
            {jornada.matches.map((match, idx) => (
              <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{match.team1} {match.score1} - {match.team2} {match.score2}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Jornada;
