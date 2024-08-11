import React, { useState } from 'react';
import { Work } from './types';

interface EditWorkPopupProps {
  work: Work;
  onClose: () => void;
  onSubmit: (updatedWork: Work) => void;
}

const EditWorkPopup: React.FC<EditWorkPopupProps> = ({ work, onClose, onSubmit }) => {
  const [updatedWork, setUpdatedWork] = useState<Work>(work);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUpdatedWork(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(updatedWork);
  };

  return (
    <div className="edit-popup">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={updatedWork.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          value={updatedWork.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="imageUrl"
          value={updatedWork.imageUrl}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EditWorkPopup;
