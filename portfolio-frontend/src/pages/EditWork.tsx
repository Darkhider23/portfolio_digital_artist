import React from 'react';
import WorkForm from '../components/WorkForm';

const EditWork: React.FC = () => {
  return (
    <div>
      <h1>Edit Work</h1>
      <WorkForm isEdit={true} />
    </div>
  );
};

export default EditWork;
