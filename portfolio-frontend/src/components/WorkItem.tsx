import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FiExternalLink } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import '../styles/WorkList.css';
import { DeleteIcon, EditIcon, ShowBook, HideBook } from '../styles/Icons';
import axios from 'axios';

interface WorkItemProps {
  work: {
    _id: string;
    imageUrl: string;
    title: string;
    description: string;
    status: 'displayed' | 'hidden';
    clientUrl: string; // Add clientUrl field to the work item
  };
  onDelete: (_id: string) => void;
  onUpdate: (_id: string) => void;
}

const WorkItem: React.FC<WorkItemProps> = ({ work, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [status, setStatus] = useState(work.status);

  const navigate = useNavigate();

  const baseURL = process.env.REACT_APP_API_BASE_URL;
  const api = axios.create({ baseURL });

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowDescription(false);
  };

  const toggleDescription = () => setShowDescription(prev => !prev);

  const handleEdit = () => {
    navigate(`/works/edit/${work._id}`);
  };

  const toggleStatus = async () => {
    const newStatus = status === 'displayed' ? 'hidden' : 'displayed';
    try {
      await api.patch(`/works/${work._id}/status`, { status: newStatus });
      setStatus(newStatus);
      navigate(0);
    } catch (error) {
      console.error('Failed to update status', error);
    }
  };

  const openExternalLink = () => {
    if (work.clientUrl) {
      // Check if the URL starts with http:// or https://
      const url = work.clientUrl.startsWith('http://') || work.clientUrl.startsWith('https://')
        ? work.clientUrl
        : `https://${work.clientUrl}`;

      window.open(url, '_blank'); // Opens the client URL in a new tab
    } else {
      console.warn('No client URL provided');
    }
  };

  return (
    <div className="card-container">
      <div
        className={`card-image ${isHovered ? 'over' : 'out'}`}
        style={{ backgroundImage: `url(${baseURL}/${work.imageUrl})` }}
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
            {showDescription ? <HideBook style={{ fontSize: '24px' }} /> : <ShowBook style={{ fontSize: '24px' }} />}
          </button>
          <button className="status-toggle-button" onClick={toggleStatus}>
            {status === 'displayed' ? <FaEyeSlash /> : <FaEye />}
          </button>
          <button className="client-url-button" onClick={openExternalLink} title="Visit Client URL">
            <FiExternalLink />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
