import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Jugador {
  id: number;
  name: string;
  avatarUrl: string;
}

const JugadorFecha: React.FC = () => {
  const [jugadores, setJugadores] = useState<Jugador[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Simulación de una llamada a la API para obtener los jugadores
  const fetchJugadoresData = async () => {
    try {
      // setLoading(true);
      // const response = await fetch('https://api.example.com/jugadores'); // Cambia a tu API real
      // if (!response.ok) throw new Error('Error al obtener los jugadores');
      // const data = await response.json();
      // setJugadores(data);
      // setLoading(false);
      setLoading(true);

      // Datos simulados (puedes reemplazar esto con la API real)
      const data: Jugador[] = [
        {
          id: 1,
          name: 'Lionel Messi',
          avatarUrl: 'https://via.placeholder.com/150',
        },
      ];

      // Simulamos el set de datos de jugadores
      setJugadores(data);
      setLoading(false);
    } catch (error) {
      setError('No se pudo cargar los jugadores');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJugadoresData();
  }, []);

  if (loading) {
    return <div>Cargando jugadores...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="jugador-fecha container">
      <h2 className="text-center mb-4">Jugador de la Fecha</h2>
      <div className="row_player">
        {jugadores.length > 0 ? (
          jugadores.map((jugador) => (
            <div key={jugador.id} className="col-6 col-md-4 col-lg-3 mb-4">
              <div className="card text-center">
                <img src={jugador.avatarUrl} alt={jugador.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{jugador.name}</h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="alert alert-info">No hay jugadores disponibles</div>
        )}
      </div>
    </div>
  );
};

export default JugadorFecha;
