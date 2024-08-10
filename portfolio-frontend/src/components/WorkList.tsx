import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import WorkItem from './WorkItem';

const WorkList: React.FC = () => {
  const [works, setWorks] = useState([]);

  // Access environment variable
const baseURL = process.env.REACT_APP_API_BASE_URL;
// const baseURL = 'http://localhost:3000';

console.log(baseURL)
// Create an Axios instance with the base URL
const api = axios.create({
  baseURL,
});

  useEffect(() => {
    api.get('/works').then(response => {
      setWorks(response.data);
    });
  }, []);

  const handleDelete = (id: number) => {
    api.delete(`/works/${id}`).then(() => {
      setWorks(works.filter((work: any) => work.id !== id));
    });
  };

  return (
    <div>
      <h1>Portfolio</h1>
      <ul>
        {works.map((work: any) => (
          <WorkItem key={work.id} work={work} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default WorkList;
