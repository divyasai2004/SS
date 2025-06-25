import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../assets/noteslogo.png';

function Notes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [filters, setFilters] = useState({
    course: '',
    year: '',
    semester: '',
    search: ''
  });

  const role = localStorage.getItem('userRole');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://studymate-backend-n321.onrender.com/api/notes/');
      setNotes(res.data);
    } catch (err) {
      console.error("Error fetching notes:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    setDeletingId(id);
    try {
      await axios.delete(`https://studymate-backend-n321.onrender.com/api/notes/${id}/`);
      setNotes(prev => prev.filter(note => note.id !== id));
    } catch (err) {
      console.error("Failed to delete note", err);
    } finally {
      setDeletingId(null);
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
      {/* Moving Background */}
      <div style={styles.movingBackground}>
        <div style={styles.floatingShape1}></div>
        <div style={styles.floatingShape2}></div>
        <div style={styles.floatingShape3}></div>
        <div style={styles.floatingShape4}></div>
        <div style={styles.floatingShape5}></div>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
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

        {loading ? (
          <div style={styles.loaderContainer}><div className="loader"></div></div>
        ) : filteredNotes.length > 0 ? (
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
                <a href={note.file_url} target="_blank" rel="noopener noreferrer" style={styles.download}>
                  View & Download
                </a>

                {role === 'admin' && note.id && (
                  <button onClick={() => handleDelete(note.id)} style={styles.deleteBtn} disabled={deletingId === note.id}>
                    {deletingId === note.id ? <span className="mini-loader" /> : '❌ Delete'}
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p style={styles.noResults}>No notes found for the selected filters.</p>
        )}
      </div>

      <style>{`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Moving Background Animations */
  @keyframes float1 {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(30px, -30px) rotate(90deg); }
    50% { transform: translate(-20px, -60px) rotate(180deg); }
    75% { transform: translate(-50px, -30px) rotate(270deg); }
  }

  @keyframes float2 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
    33% { transform: translate(-40px, 40px) rotate(120deg) scale(1.1); }
    66% { transform: translate(40px, 20px) rotate(240deg) scale(0.9); }
  }

  @keyframes float3 {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    20% { transform: translate(25px, -25px) rotate(72deg); }
    40% { transform: translate(-15px, -50px) rotate(144deg); }
    60% { transform: translate(-45px, -15px) rotate(216deg); }
    80% { transform: translate(-20px, 25px) rotate(288deg); }
  }

  @keyframes float4 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-30px, -40px) scale(1.2); }
  }

  @keyframes float5 {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(45px, 35px) rotate(-90deg); }
    50% { transform: translate(20px, -45px) rotate(-180deg); }
    75% { transform: translate(-35px, 20px) rotate(-270deg); }
  }

  .loader {
    width: 42px;
    height: 42px;
    border: 5px solid #e0f7fa;
    border-top: 5px solid #0288d1;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 2rem auto;
  }

  .mini-loader {
    width: 16px;
    height: 16px;
    border: 2px solid #fff;
    border-top: 2px solid #c62828;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    display: inline-block;
  }

  .filters-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2.2rem;
    animation: fadeIn 0.6s ease-in-out;
  }

  .notes-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }

  .notes-card a:hover {
    background-color:rgb(40, 30, 106) !important;
  }

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
      padding: 1.2rem !important;
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`}</style>

    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    padding: '2rem',
    background: 'linear-gradient(to bottom right,rgb(214, 237, 241),rgb(239, 251, 253))',
    minHeight: '100vh',
    fontFamily: 'Segoe UI, sans-serif',
    overflow: 'hidden'
  },
  movingBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 0
  },
  floatingShape1: {
    position: 'absolute',
    top: '10%',
    left: '80%',
    width: '60px',
    height: '60px',
    backgroundColor: 'rgba(2, 136, 209, 0.1)',
    borderRadius: '50%',
    animation: 'float1 20s ease-in-out infinite'
  },
  floatingShape2: {
    position: 'absolute',
    top: '60%',
    left: '5%',
    width: '40px',
    height: '40px',
    backgroundColor: 'rgba(0, 188, 212, 0.15)',
    borderRadius: '30%',
    animation: 'float2 25s ease-in-out infinite'
  },
  floatingShape3: {
    position: 'absolute',
    top: '20%',
    left: '15%',
    width: '80px',
    height: '80px',
    backgroundColor: 'rgba(2, 119, 189, 0.08)',
    borderRadius: '20%',
    animation: 'float3 30s ease-in-out infinite'
  },
  floatingShape4: {
    position: 'absolute',
    top: '75%',
    left: '70%',
    width: '50px',
    height: '50px',
    backgroundColor: 'rgba(0, 172, 193, 0.12)',
    borderRadius: '50%',
    animation: 'float4 15s ease-in-out infinite'
  },
  floatingShape5: {
    position: 'absolute',
    top: '40%',
    left: '90%',
    width: '35px',
    height: '35px',
    backgroundColor: 'rgba(2, 136, 209, 0.2)',
    borderRadius: '40%',
    animation: 'float5 22s ease-in-out infinite'
  },
  content: {
    position: 'relative',
    zIndex: 1
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
    position: 'relative',
    zIndex: 2
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
  },
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '40vh'
  }
};

export default Notes;