import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/WorkList.css';
import { DeleteIcon, EditIcon } from '../styles/Icons';

interface WorkItemProps {
  work: {
    _id: string;
    imageUrl: string;
    title: string;
    description: string;
  };
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;

}

const WorkItem: React.FC<WorkItemProps> = ({ work, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const navigate = useNavigate();

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowDescription(false);
  };

  const toggleDescription = () => setShowDescription(prev => !prev);

  const handleEdit = () => {
    navigate(`/works/edit/${work._id}`); // Redirect to the EditWork page with the work ID
  };

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
          <button onClick={handleEdit} className="update-button">
            <EditIcon />
          </button>
          <button onClick={() => onDelete(work._id)} className="delete-button">
            <DeleteIcon />
          </button>
          <button className="show-description-button" onClick={toggleDescription}>
            {showDescription ? <FaEyeSlash style={{ fontSize: '24px' }} /> : <FaEye style={{ fontSize: '24px' }} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
