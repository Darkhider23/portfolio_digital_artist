import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

interface WorkFormProps {
  isEdit?: boolean;
}

const WorkForm: React.FC<WorkFormProps> = ({ isEdit = false }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [clientUrl, setClientUrl] = useState('');
  const [status, setStatus] = useState('displayed');
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // Access environment variable
const baseURL = process.env.REACT_APP_API_BASE_URL;

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL,
});

  useEffect(() => {
    if (isEdit && id) {
      api.get(`/works/${id}`).then(response => {
        const work = response.data;
        setTitle(work.title);
        setDescription(work.description);
        setImageUrl(work.imageUrl);
        setClientUrl(work.clientUrl);
        setStatus(work.status);
      });
    }
  }, [isEdit, id]);

  const handleSubmit = (e: React.FormEvent) => {
    console.log(title,description,imageUrl,clientUrl,status)
    e.preventDefault();
    const work = { title, description, imageUrl, clientUrl, status };
    console.log(work);
    if (isEdit && id) {
      api.patch(`/works/${id}`, work).then(() => navigate('/'));
    } else {
      api.post('/works', work).then(() => navigate('/'));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" required />
      <input type="text" value={clientUrl} onChange={(e) => setClientUrl(e.target.value)} placeholder="Client URL" />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="displayed">Displayed</option>
        <option value="hidden">Hidden</option>
      </select>
      <button type="submit">{isEdit ? 'Update Work' : 'Add Work'}</button>
    </form>
  );
};

export default WorkForm;
