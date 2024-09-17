import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Jornada.css';

interface Match {
  team1: string;
  team2: string;
  score1: number;
  score2: number;
  time: string;
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
      setLoading(true);
    
      const data: JornadaData[] = [
        {
          date: "Martes 24 de Septiembre",
          matches: [
            { team1: "PLA", team2: "LC3", score1: 2, score2: 1, time: "19:15" },
            { team1: "AMI", team2: "PIL", score1: 3, score2: 3, time: "20:15" },
            { team1: "CAN", team2: "RID", score1: 0, score2: 0, time: "21:15" }
          ]
        },
        {
          date: "Jueves 26 de Septiembre",
          matches: [
            { team1: "5ES", team2: "SFR", score1: 1, score2: 2, time: "19:15" },
            { team1: "4ES", team2: "UCH", score1: 0, score2: 4, time: "20:15" },
            { team1: "FVS", team2: "ZHI", score1: 3, score2: 1, time: "21:15" }
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
      <h2 className="jornada-title">Jornada 1</h2>

      {jornadaData.map((jornada, index) => (
        <div key={index} className="jornada-card">
          <p className="jornada-date"><strong>{jornada.date}</strong></p>
          <ul className="list-group">
            {jornada.matches.map((match, idx) => (
              <li key={idx} className="list-group-item match-card d-flex flex-column align-items-center">
                <div className="match-details d-flex justify-content-between">
                  <span className="team team1">{match.team1}</span>
                  <span className="score">{match.score1} - {match.score2}</span>
                  <span className="team team2">{match.team2}</span>
                </div>
                <span className="match-time">{match.time}</span> {/* Hora debajo */}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Jornada;
