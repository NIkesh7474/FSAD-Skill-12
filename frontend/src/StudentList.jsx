import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddStudent from './AddStudent';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await axios.get('http://localhost:8080/students');
    setStudents(res.data);
  };

  useEffect(() => { fetchStudents(); }, []);

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:8080/students/${id}`);
    fetchStudents();
  };

  const updateStudent = async (s) => {
    const name   = prompt('Name:',   s.name);
    const email  = prompt('Email:',  s.email);
    const course = prompt('Course:', s.course);
    if (!name || !email || !course) return;
    await axios.put(`http://localhost:8080/students/${s.id}`,
      { name, email, course });
    fetchStudents();
  };

  return (
    <div className='container'>
      <h1>Student Management System</h1>

      <AddStudent onAdd={fetchStudents} />

      {students.length === 0 ? (
        <p className='empty'>No students found. Add one above!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(s => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.course}</td>
                <td>
                  <button className='btn-update'
                    onClick={() => updateStudent(s)}>
                    Update
                  </button>
                  <button className='btn-delete'
                    onClick={() => deleteStudent(s.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentList;
