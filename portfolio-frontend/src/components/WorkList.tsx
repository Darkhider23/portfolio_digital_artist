import React, { useState, useEffect } from 'react';
import WorkItem from './WorkItem'; // Adjust the import path as necessary
import axios from 'axios';
import { Work } from './types';
import { useSearchParams } from 'react-router-dom';

const WorkList: React.FC = () => {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const showAll = searchParams.get('showall') === 'true';

  const baseURL = process.env.REACT_APP_API_BASE_URL;
  const api = axios.create({ baseURL });

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await api.get<Work[]>('/works');
        setWorks(response.data);
        setLoading(false);
      } catch (error: any) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchWorks();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/works/${id}`);
      setWorks(works.filter(work => work._id !== id));
    } catch (error: any) {
      setError('Failed to delete work');
    }
  };

  const handleUpdate = (id: string) => {
    window.location.href = `/works/edit/${id}`;
  };

  const filteredWorks = showAll ? works : works.filter(work => work.status === 'displayed');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
      <div className="card-grid">
        {filteredWorks.map(work => (
          <WorkItem
            key={work._id}
            work={work}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
  );
};

export default WorkList;
