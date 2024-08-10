import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaEdit, } from 'react-icons/fa'; // Example icons
import './WorkList.css';

import { DeleteIcon, EditIcon } from '../Icons';

interface WorkItemProps {
  work: {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
  };
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void; // Add onUpdate prop
}

const WorkItem: React.FC<WorkItemProps> = ({ work, onDelete, onUpdate }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowDescription(false); // Hide description on mouse leave
  };

  const toggleDescription = () => setShowDescription(prev => !prev);

  return (
    <div className="card-container">
      <div
        className={`card-image ${isHovered ? 'over' : 'out'}`}
        style={{ backgroundImage: `url(/work_images/${work.imageUrl}.jpg)` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

        <div className={`card-description ${showDescription ? 'show' : ''}`}>
          <p className="card-text">{work.description}</p>
        </div>
        <h2 className="card-title">{work.title}</h2>
        <div className="card-actions">
          <button onClick={() => onUpdate(work.id)} className="update-button"><EditIcon  /></button>
          <button onClick={() => onDelete(work.id)} className="delete-button"><DeleteIcon /></button>
          <button className="show-description-button" onClick={toggleDescription}>
            {showDescription ? <FaEyeSlash style={{ fontSize: '24px' }} /> : <FaEye style={{ fontSize: '24px' }} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
