import React, { useEffect, useState } from 'react';
import WorkItem from './WorkItem';
import axios from 'axios';
import { Work } from './types';
import EditWorkPopup from './EditWorkPopup'; // Import the edit popup component

const WorkList: React.FC = () => {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [editingWork, setEditingWork] = useState<Work | null>(null); // State for the work being edited

  const baseURL = process.env.REACT_APP_API_BASE_URL;

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

  const handleDelete = async (_id: string) => {
    try {
      await api.delete(`/works/${_id}`);  // Adjusted to use _id
      setWorks(works.filter(work => work._id !== _id));  // Adjusted to use _id
    } catch (error: any) {
      setError('Failed to delete the work item');
    }
  };

  const handleUpdate = (_id: string) => {
    const workToEdit = works.find(work => work._id === _id);  // Adjusted to use _id
    if (workToEdit) {
      setEditingWork(workToEdit);  // Open the popup with the selected work item
    }
  };

  const handleEditSubmit = async (updatedWork: Work) => {
    try {
      const response = await api.patch(`/works/${updatedWork._id}`, updatedWork);  // Adjusted to use _id
      setWorks(works.map(work => (work._id === updatedWork._id ? response.data : work)));  // Adjusted to use _id
      setEditingWork(null);  // Close the popup after submitting
    } catch (error: any) {
      setError('Failed to update the work item');
    }
  };

  return (
    <div className='card-grid'>
      {works.map(work => (
        <WorkItem
          key={work._id}  // Adjusted to use _id
          work={work}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
      {editingWork && (
        <EditWorkPopup
          work={editingWork}
          onClose={() => setEditingWork(null)}
          onSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
};

export default WorkList;
