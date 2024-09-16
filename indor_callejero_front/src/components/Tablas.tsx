import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Team {
  id: number;
  name: string;
  points: number;
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
            { id: 1, name: 'Equipo PLA', points: 10 },
            { id: 2, name: 'Equipo LC3', points: 8 },
            { id: 3, name: 'Equipo AMI', points: 6 },
            { id: 4, name: 'Equipo PIL', points: 4 },
          ],
        },
        {
          name: 'Grupo B',
          teams: [
            { id: 5, name: 'Equipo SFR', points: 12 },
            { id: 6, name: 'Equipo 5ES', points: 9 },
            { id: 7, name: 'Equipo CAN', points: 7 },
            { id: 8, name: 'Equipo RID', points: 5 },
          ],
        },
        {
          name: 'Grupo C',
          teams: [
            { id: 9, name: 'Equipo UCH', points: 11 },
            { id: 10, name: 'Equipo 4ES', points: 9 },
            { id: 11, name: 'Equipo ZHI', points: 8 },
            { id: 12, name: 'Equipo FVS', points: 6 },
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
      <h2 className="text-center mb-4">Tablas de Posiciones</h2>
      {groups.map((group, index) => (
        <div key={index} className="grupo mb-4">
          <h3>{group.name}</h3>
          <ul className="list-group">
            {group.teams.map((team) => (
              <li key={team.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{team.name}</span>
                <span className="badge bg-primary rounded-pill">{team.points} puntos</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Tablas;
