import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../assets/noteslogo.png';

function Notes() {
  const [notes, setNotes] = useState([]);
  const [filters, setFilters] = useState({
    course: '',
    year: '',
    semester: '',
    search: ''
  });

  const role = localStorage.getItem('userRole');

  useEffect(() => {
    axios.get('https://studymate-backend-n321.onrender.com/api/notes/')
      .then(res => setNotes(res.data))
      .catch(err => console.error("Error fetching notes:", err));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      axios.delete(`https://studymate-backend-n321.onrender.com/api/notes/${id}/`)
        .then(() => {
          setNotes(prev => prev.filter(note => note.id !== id));
        })
        .catch(err => console.error("Failed to delete note", err));
    }
  };

  const filteredNotes = notes.filter(note => {
    const matchesCourse = !filters.course || note.course === filters.course;
    const matchesYear = !filters.year || note.year === filters.year;
    const matchesSemester = !filters.semester || Number(note.semester) === Number(filters.semester);
    const matchesSearch = !filters.search ||
      note.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      note.subject.toLowerCase().includes(filters.search.toLowerCase());

    return matchesCourse && matchesYear && matchesSemester && matchesSearch;
  });

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        <img src={logo} alt="Logo" style={styles.noteslogo} /> Notes
      </h2>

      <div className="filters-container" style={styles.filters}>
        <select onChange={(e) => setFilters({ ...filters, course: e.target.value })} style={styles.select}>
          <option value="">All Courses</option>
          <option value="BSc IT">BSc IT</option>
          <option value="BSc CS">BSc CS</option>
        </select>

        <select onChange={(e) => setFilters({ ...filters, year: e.target.value })} style={styles.select}>
          <option value="">All Years</option>
          <option value="FY">First Year</option>
          <option value="SY">Second Year</option>
          <option value="TY">Third Year</option>
        </select>

        <select onChange={(e) => setFilters({ ...filters, semester: e.target.value })} style={styles.select}>
          <option value="">All Semesters</option>
          {[1, 2, 3, 4, 5, 6].map(num => (
            <option key={num} value={num}>Sem {num}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="🔍 Search by title/subject"
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          style={styles.searchBox}
        />
      </div>

      <h3 style={styles.subheading}>Notes List</h3>

      {filteredNotes.length > 0 ? (
        <div style={styles.grid}>
          {filteredNotes.map((note, index) => (
            <div key={index} style={styles.card} className="notes-card">
              <h4 style={styles.title}>{note.title} 📓</h4>
              <p><strong>{note.subject}</strong></p>
              <p>
                <span style={styles.tag}>{note.course}</span>{' '}
                <span style={styles.tag}>{note.year}</span>{' '}
                <span style={styles.tag}>Sem {note.semester}</span>
              </p>
              <a
  href={note.file_url}
  target="_blank"
  rel="noopener noreferrer"
  style={styles.download}
>
  Download
</a>

              {role === 'admin' && note.id && (
                <button onClick={() => handleDelete(note.id)} style={styles.deleteBtn}>
                  ❌ Delete
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p style={styles.noResults}>No notes found for the selected filters.</p>
      )}

      <style>{`
        @media (max-width: 768px) {
          .filters-container {
            flex-direction: column !important;
            align-items: stretch !important;
          }

          .filters-container select,
          .filters-container input {
            width: 100% !important;
          }

          .notes-card {
            padding: 1rem !important;
          }
        }

        .notes-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    background: 'linear-gradient(135deg, #e0f7fa, #fce4ec)',
    minHeight: '100vh',
    fontFamily: 'Segoe UI, sans-serif'
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    color: '#2c3e50'
  },
  noteslogo: {
    width: '40px',
    height: '40px',
    verticalAlign: 'middle',
    marginRight: '10px',
    marginBottom: '5px'
  },
  subheading: {
    textAlign: 'center',
    color: '#444',
    marginBottom: '1.5rem'
  },
  filters: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '2rem'
  },
  select: {
    padding: '0.6rem',
    borderRadius: '10px',
    border: '1px solid #ccc',
    minWidth: '140px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },
  searchBox: {
    padding: '0.6rem',
    borderRadius: '10px',
    border: '1px solid #ccc',
    minWidth: '220px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.5rem'
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '1.5rem',
    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
    textAlign: 'center'
  },
  title: {
    textTransform: 'uppercase',
    color: '#2c3e50',
    marginBottom: '0.7rem',
    fontWeight: 'bold'
  },
  tag: {
    display: 'inline-block',
    backgroundColor: '#e1f5fe',
    padding: '0.4rem 0.8rem',
    borderRadius: '999px',
    fontSize: '0.8rem',
    margin: '0.3rem 0.2rem',
    color: '#0277bd'
  },
  download: {
    display: 'inline-block',
    marginTop: '1rem',
    padding: '0.6rem 1.4rem',
    backgroundColor: '#00bcd4',
    color: '#fff',
    borderRadius: '30px',
    textDecoration: 'none',
    transition: 'background 0.3s ease',
    fontWeight: '600'
  },
  deleteBtn: {
    display: 'block',
    margin: '0.8rem auto 0',
    padding: '8px 16px',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  noResults: {
    textAlign: 'center',
    color: '#888',
    fontStyle: 'italic',
    marginTop: '2rem'
  }
};

export default Notes;
