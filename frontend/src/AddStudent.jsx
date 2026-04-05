import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = ({ onAdd }) => {
  const [form, setForm] = useState({ name: '', email: '', course: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.course) return;
    await axios.post('http://localhost:8080/students', form);
    setForm({ name: '', email: '', course: '' });
    onAdd();
  };

  return (
    <div className='form-container'>
      <h3>Add New Student</h3>
      <div className='form-row'>
        <input
          name='name'
          placeholder='Name'
          value={form.name}
          onChange={handleChange}
        />
        <input
          name='email'
          placeholder='Email'
          value={form.email}
          onChange={handleChange}
        />
        <input
          name='course'
          placeholder='Course'
          value={form.course}
          onChange={handleChange}
        />
        <button className='btn-add' onClick={handleSubmit}>
          + Add Student
        </button>
      </div>
    </div>
  );
};

export default AddStudent;
