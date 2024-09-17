import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/Tablas.css";

interface Team {
  id: number;
  name: string;
  points: number;
  color: string;
}

interface Group {
  name: string;
  teams: Team[];
}

const Tablas: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Simulación de llamada a la API para obtener las tablas
  const fetchGroupsData = async () => {
    try {
    //   setLoading(true);
    //   const response = await fetch('https://api.example.com/groups'); // Cambia a tu API real
    //   if (!response.ok) throw new Error('Error al obtener los grupos');
    //   const data = await response.json();
    //   setGroups(data);
    //   setLoading(false);
    setLoading(true);

      // Datos simulados (puedes reemplazar con la llamada a la API real)
      const data: Group[] = [
        {
          name: 'Grupo A',
          teams: [
            { id: 1, name: 'Equipo PLA', points: 10, color: '#FF5733' },
            { id: 2, name: 'Equipo LC3', points: 8, color: '#33FF57' },
            { id: 3, name: 'Equipo AMI', points: 6, color: '#5733FF' },
            { id: 4, name: 'Equipo PIL', points: 4, color: '#F1C40F' },
          ],
        },
        {
          name: 'Grupo B',
          teams: [
            { id: 5, name: 'Equipo SFR', points: 12, color: '#8E44AD' },
            { id: 6, name: 'Equipo 5ES', points: 9, color: '#3498DB' },
            { id: 7, name: 'Equipo CAN', points: 7, color: '#1ABC9C' },
            { id: 8, name: 'Equipo RID', points: 5, color: '#E74C3C' },
          ],
        },
        {
          name: 'Grupo C',
          teams: [
            { id: 9, name: 'Equipo UCH', points: 11, color: '#9B59B6' },
            { id: 10, name: 'Equipo 4ES', points: 9, color: '#2980B9' },
            { id: 11, name: 'Equipo ZHI', points: 8, color: '#27AE60' },
            { id: 12, name: 'Equipo FVS', points: 6, color: '#D35400' },
          ],
        },
      ];
      

      // Simulamos el set de datos de grupos
      setGroups(data);
      setLoading(false);
    } catch (error) {
      setError('No se pudo cargar las tablas');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGroupsData();
  }, []);

  if (loading) {
    return <div>Cargando tablas...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="tablas container">
      <h2 className="standings-title">Tablas de Posiciones</h2>
      {groups.map((group, index) => (
        <div key={index} className="grupo mb-4">
          <h3>{group.name}</h3>
          <ul className="list-group">
            {group.teams.map((team) => (
              <li key={team.id} className="list-group-item d-flex justify-content-between align-items-center"
              style={{ backgroundColor: team.color }}>
              <span>{team.name}</span>
                <span className="rounded-pill">{team.points} puntos</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Tablas;
