import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Sponsor {
  id: number;
  name: string;
  logoUrl: string;
}

const Sponsors: React.FC = () => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Simulación de llamada a la API para obtener los auspiciantes
  const fetchSponsorsData = async () => {
    try {
      // setLoading(true);
      // const response = await fetch('https://api.example.com/sponsors'); // Cambia a tu API real
      // if (!response.ok) throw new Error('Error al obtener los auspiciantes');
      // const data = await response.json();
      // setSponsors(data);
      // setLoading(false);
      setLoading(true);

      // Datos simulados (puedes reemplazar con la llamada a la API real)
      const data: Sponsor[] = [
        {
          id: 1,
          name: 'Sponsor 1',
          logoUrl: 'https://via.placeholder.com/100x100?text=Sponsor+1',
        },
        {
          id: 2,
          name: 'Sponsor 2',
          logoUrl: 'https://via.placeholder.com/100x100?text=Sponsor+2',
        },
        {
          id: 3,
          name: 'Sponsor 3',
          logoUrl: 'https://via.placeholder.com/100x100?text=Sponsor+3',
        },
        {
          id: 4,
          name: 'Sponsor 4',
          logoUrl: 'https://via.placeholder.com/100x100?text=Sponsor+4',
        },
      ];

      setSponsors(data);
      setLoading(false);
    } catch (error) {
      setError('No se pudieron cargar los auspiciantes');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSponsorsData();
  }, []);

  if (loading) {
    return <div>Cargando auspiciantes...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <footer className="footer container text-center">
      <h2 className="mb-4">Logos de todos los auspiciantes</h2>
      <div className="row justify-content-center">
        {sponsors.length > 0 ? (
          sponsors.map((sponsor) => (
            <div key={sponsor.id} className="col-4 col-md-2 mb-4">
              <img
                src={sponsor.logoUrl}
                alt={sponsor.name}
                className="img-fluid"
                style={{ maxHeight: '100px' }}
              />
            </div>
          ))
        ) : (
          <div className="alert alert-info">No hay auspiciantes disponibles</div>
        )}
      </div>
    </footer>
  );
};

export default Sponsors;
