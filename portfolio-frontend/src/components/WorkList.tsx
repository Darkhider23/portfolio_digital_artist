import React, {useEffect, useState } from 'react';
import WorkItem from './WorkItem'; // Adjust the import path as necessary
import axios from 'axios';
import { Work } from './types';

const WorkList: React.FC = () => {

  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
 

  const baseURL = process.env.REACT_APP_API_BASE_URL;
  // const baseURL = 'http://localhost:3000';

  console.log(baseURL)
  // Create an Axios instance with the base URL
  const api = axios.create({
    baseURL,
  });

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

  const handleDelete = (id: string) => {
    setWorks(works.filter(work => work.id !== id));
  };

  const handleUpdate = (id: string) => {
    // Implement the update logic here
    console.log(`Update work with id ${id}`);
    // For example, you might want to show a modal with a form to edit the work item
  };

  return (
    <div className='card-grid'>
      
        {works.map(work => (
          <WorkItem
            key={work.id}
            work={work}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      
    </div>
  );
};

export default WorkList;
