import React from 'react';
import { Link } from 'react-router-dom';

interface WorkItemProps {
  work: any;
  onDelete: (id: number) => void;
}

const WorkItem: React.FC<WorkItemProps> = ({ work, onDelete }) => {
  return (
    <li>
      <h2>{work.title}</h2>
      <p>{work.description}</p>
      <img src={work.imageUrl} alt={work.title} width="200" />
      <p><a href={work.clientUrl} target="_blank" rel="noopener noreferrer">Client's Site</a></p>
      <p>Status: {work.status}</p>
      <Link to={`/edit/${work.id}`}>Edit</Link>
      <button onClick={() => onDelete(work.id)}>Delete</button>
    </li>
  );
};

export default WorkItem;
