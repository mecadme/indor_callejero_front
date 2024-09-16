import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Video {
  id: number;
  title: string;
  url: string;
}

const Videos: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Simulación de llamada a la API para obtener los videos
  const fetchVideosData = async () => {
    try {
      // setLoading(true);
      // const response = await fetch('https://api.example.com/videos'); // Cambia a tu API real
      // if (!response.ok) throw new Error('Error al obtener los videos');
      // const data = await response.json();
      // setVideos(data);
      // setLoading(false);
      setLoading(true);

      // Datos simulados (puedes reemplazar esto con la llamada a la API real)
      const data: Video[] = [
        {
          id: 1,
          title: 'Entrenamiento de equipo',
          url: 'https://www.facebook.com/romanmatut/videos/1243289196850060/',
        },
        {
          id: 2,
          title: 'Partido destacado',
          url: 'https://www.facebook.com/romanmatut/videos/1243289196850060/',
        },
        {
          id: 3,
          title: 'Entrevista al técnico',
          url: 'https://www.facebook.com/romanmatut/videos/1243289196850060/',
        },
        {
          id: 4,
          title: 'Resumen del partido',
          url: 'https://www.facebook.com/romanmatut/videos/1243289196850060/',
        },
      ];

      setVideos(data);
      setLoading(false);
    } catch (error) {
      setError('No se pudieron cargar los videos');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideosData();
  }, []);

  if (loading) {
    return <div>Cargando videos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="videos container">
      <h2 className="text-center mb-4">Los Últimos Videos</h2>
      <div className="row">
        {videos.length > 0 ? (
          videos.map((video) => (
            <div key={video.id} className="col-12 col-md-6 mb-4">
              <div className="video">
                <h5>{video.title}</h5>
                <iframe
                  width="100%"
                  height="315"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))
        ) : (
          <div className="alert alert-info">No hay videos disponibles</div>
        )}
      </div>
    </div>
  );
};

export default Videos;
