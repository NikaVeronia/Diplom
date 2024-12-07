import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Comand.modules.css';
import TeamCard from '../TeamCard/TeamCard';

interface Team {
  id: number;
  imgUrl: string;
  name: string;
  role: string;
}

const Comand: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<Team[]>('https://87c4e51ebc337641.mokky.dev/team');
        setTeams(response.data);
        setError(null);
      } catch (err: any) {
        setError(err.message || 'Ошибка при загрузке данных.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div className='ContComand'>
      <div className='imgComand'>
        {isLoading && <div className="spinner">Загрузка...</div>}
        {error && <div className="error">{error}</div>}
        {!isLoading && !error && (
          <div className='teamCards'>
            {teams.map((team) => (
              <TeamCard
                key={team.id}
                imgUrl={team.imgUrl}
                name={team.name}
                role={team.role}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comand;
