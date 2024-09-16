import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Tecnico {
  id: number;
  name: string;
  avatarUrl: string;
}

const TecnicoFecha: React.FC = () => {
  const [tecnicos, setTecnicos] = useState<Tecnico[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Simulación de una llamada a la API para obtener los técnicos
  const fetchTecnicosData = async () => {
    try {
      // setLoading(true);
      // const response = await fetch('https://api.example.com/tecnicos'); // Cambia a tu API real
      // if (!response.ok) throw new Error('Error al obtener los técnicos');
      // const data = await response.json();
      // setTecnicos(data);
      // setLoading(false);
      setLoading(true);

      // Datos simulados (puedes reemplazar esto con la API real)
      const data: Tecnico[] = [
        {
          id: 1,
          name: 'Pep Guardiola',
          avatarUrl: 'https://via.placeholder.com/150',
        }
      ];

      // Simulamos el set de datos de técnicos
      setTecnicos(data);
      setLoading(false);
    } catch (error) {
      setError('No se pudo cargar los técnicos');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTecnicosData();
  }, []);

  if (loading) {
    return <div>Cargando técnicos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="tecnico-fecha container">
      <h2 className="text-center mb-4">Técnico de la Fecha</h2>
      <div className="row_coach">
        {tecnicos.length > 0 ? (
          tecnicos.map((tecnico) => (
            <div key={tecnico.id} className="col-6 col-md-4 col-lg-3 mb-4">
              <div className="card text-center">
                <img src={tecnico.avatarUrl} alt={tecnico.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{tecnico.name}</h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="alert alert-info">No hay técnicos disponibles</div>
        )}
      </div>
    </div>
  );
};

export default TecnicoFecha;
