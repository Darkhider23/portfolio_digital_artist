import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/WorkForm.css'

const WorkForm: React.FC<{ isEdit?: boolean }> = ({ isEdit = false }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [clientUrl, setClientUrl] = useState('');
  const [status, setStatus] = useState('displayed');
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const baseURL = process.env.REACT_APP_API_BASE_URL;
  const api = axios.create({ baseURL });

  useEffect(() => {
    if (isEdit && id) {
      api.get(`${baseURL}/works/${id}`).then(response => {
        const work = response.data;
        setTitle(work.title);
        setDescription(work.description);
        setClientUrl(work.clientUrl);
        setStatus(work.status);
      });
    }
  }, [isEdit, id, baseURL]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (imageFile) formData.append('image', imageFile); // Append the image file
    formData.append('clientUrl', clientUrl);
    formData.append('status', status);

    console.log(formData);

    if (isEdit && id) {
      await api.put(`/works/${id}`, formData);
    } else {
      await api.post(`/works`, formData);
    }
    navigate('/');
  };

  return (
    <div className="add-form-container">
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          className="title-text"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="file"
          onChange={(e) => setImageFile(e.target.files?.[0] || null)}
          accept="image/*"
        />
        <input
          className="clienturl-text"
          type="text"
          value={clientUrl}
          onChange={(e) => setClientUrl(e.target.value)}
          placeholder="Client URL"
        />
        <div className="action-container">
          <select className='status-select' value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="displayed">Displayed</option>
            <option value="hidden">Hidden</option>
          </select>
          <button type="submit">
            {isEdit ? 'Update Work' : 'Add Work'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkForm;
