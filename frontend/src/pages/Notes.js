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
      {/* Enhanced Moving Background */}
      <div style={styles.movingBackground}>
        <div style={styles.floatingShape1}></div>
        <div style={styles.floatingShape2}></div>
        <div style={styles.floatingShape3}></div>
        <div style={styles.floatingShape4}></div>
        <div style={styles.floatingShape5}></div>
        <div style={styles.floatingShape6}></div>
        <div style={styles.floatingShape7}></div>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        <div style={styles.headerContainer}>
          <h2 style={styles.heading}>
            <img src={logo} alt="Logo" style={styles.noteslogo} /> 
            <span style={styles.gradientText}>Notes</span>
          </h2>
          <p style={styles.subtitle}>Discover and access study materials</p>
        </div>

        <div className="filters-container" style={styles.filtersContainer}>
          <div style={styles.filtersGlass}>
            <div style={styles.filterRow}>
              <div style={styles.selectWrapper}>
                <select onChange={(e) => setFilters({ ...filters, course: e.target.value })} style={styles.select}>
                  <option value="">All Courses</option>
                  <option value="BSc IT">BSc IT</option>
                  <option value="BSc CS">BSc CS</option>
                </select>
              </div>

              <div style={styles.selectWrapper}>
                <select onChange={(e) => setFilters({ ...filters, year: e.target.value })} style={styles.select}>
                  <option value="">All Years</option>
                  <option value="FY">First Year</option>
                  <option value="SY">Second Year</option>
                  <option value="TY">Third Year</option>
                </select>
              </div>

              <div style={styles.selectWrapper}>
                <select onChange={(e) => setFilters({ ...filters, semester: e.target.value })} style={styles.select}>
                  <option value="">All Semesters</option>
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>Sem {num}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={styles.searchContainer}>
              <div style={styles.searchWrapper}>
                <input
                  type="text"
                  placeholder="Search by title or subject..."
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  style={styles.searchBox}
                />
                <div style={styles.searchIcon}>⌕</div>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.resultsHeader}>
          <h3 style={styles.subheading}>
            {filteredNotes.length > 0 ? `Found ${filteredNotes.length} Notes` : 'Notes Collection'}
          </h3>
        </div>

        {loading ? (
          <div style={styles.loaderContainer}>
            <div className="beautiful-loader">
              <div className="loader-ring"></div>
              <div className="loader-ring"></div>
              <div className="loader-ring"></div>
              <div className="loader-inner-circle"></div>
            </div>
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p style={styles.loadingText}>Loading your notes...</p>
          </div>
        ) : filteredNotes.length > 0 ? (
          <div style={styles.grid}>
            {filteredNotes.map((note, index) => (
              <div key={index} style={styles.card} className="notes-card">
                <div style={styles.cardInner}>
                  {/* <div style={styles.cardHeader}>
                    <h4 style={styles.title}>{note.title.toUpperCase()}</h4>
                  </div> */}
                  
                  <div style={styles.cardContent}>
                    <h4 style={styles.title}>{note.title.toUpperCase()}</h4>                    
                    <div style={styles.subjectContainer}>
                      <p style={styles.subject}>{note.subject}</p>
                    </div>
                    <div style={styles.tagsContainer}>
                      <span style={styles.tag}>{note.course}</span>
                      <span style={styles.tag}>{note.year}</span>
                      <span style={styles.tag}>Sem {note.semester}</span>
                    </div>
                  </div>

                  <div style={styles.cardActions}>
                    <a href={note.file_url} target="_blank" rel="noopener noreferrer" style={styles.download}>
                      <span style={styles.downloadIcon}>↓</span>
                      View & Download
                    </a>

                    {role === 'admin' && note.id && (
                      <button 
                        onClick={() => handleDelete(note.id)} 
                        style={styles.deleteBtn} 
                        disabled={deletingId === note.id}
                      >
                        {deletingId === note.id ? <span className="mini-loader" /> : 'Delete'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={styles.noResultsContainer}>
            <div style={styles.noResultsIcon}>⌕</div>
            <p style={styles.noResults}>No notes found for the selected filters.</p>
            <p style={styles.noResultsSubtext}>Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      <style>{`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.7; }
    50% { transform: scale(1.05); opacity: 1; }
  }

  @keyframes gradientShimmer {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  /* Beautiful Loading Animations */
  @keyframes loader-ring-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes loader-ring-pulse {
    0%, 100% { 
      transform: scale(1); 
      opacity: 1; 
    }
    50% { 
      transform: scale(1.1); 
      opacity: 0.7; 
    }
  }

  @keyframes loader-inner-glow {
    0%, 100% { 
      background: linear-gradient(45deg, rgb(45, 182, 209), rgb(25, 4, 81));
      box-shadow: 0 0 20px rgba(45, 182, 209, 0.8), inset 0 0 20px rgba(25, 4, 81, 0.6);
    }
    50% { 
      background: linear-gradient(45deg, rgb(25, 4, 81), rgb(45, 182, 209));
      box-shadow: 0 0 30px rgba(25, 4, 81, 0.8), inset 0 0 30px rgba(45, 182, 209, 0.6);
    }
  }

  @keyframes loading-dots {
    0%, 20% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.5); opacity: 0.7; }
    100% { transform: scale(1); opacity: 1; }
  }

  .beautiful-loader {
    position: relative;
    width: 120px;
    height: 120px;
    margin: 0 auto 2rem;
  }

  .loader-ring {
    position: absolute;
    border: 3px solid transparent;
    border-radius: 50%;
    animation: loader-ring-spin 2s linear infinite;
  }

  .loader-ring:nth-child(1) {
    width: 120px;
    height: 120px;
    border-top: 3px solid rgba(45, 182, 209, 0.8);
    border-right: 3px solid rgba(45, 182, 209, 0.4);
    animation-duration: 2s;
  }

  .loader-ring:nth-child(2) {
    width: 90px;
    height: 90px;
    top: 15px;
    left: 15px;
    border-top: 3px solid rgba(25, 4, 81, 0.8);
    border-left: 3px solid rgba(25, 4, 81, 0.4);
    animation-duration: 1.5s;
    animation-direction: reverse;
  }

  .loader-ring:nth-child(3) {
    width: 60px;
    height: 60px;
    top: 30px;
    left: 30px;
    border-top: 2px solid rgba(45, 182, 209, 0.6);
    border-bottom: 2px solid rgba(45, 182, 209, 0.3);
    animation-duration: 1s;
  }

  .loader-inner-circle {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 45px;
    left: 45px;
    border-radius: 50%;
    animation: loader-inner-glow 2s ease-in-out infinite;
  }

  .loading-dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 1rem;
  }

  .loading-dots span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: linear-gradient(45deg, rgb(45, 182, 209), rgb(25, 4, 81));
    animation: loading-dots 1.4s ease-in-out infinite;
  }

  .loading-dots span:nth-child(1) { animation-delay: 0s; }
  .loading-dots span:nth-child(2) { animation-delay: 0.2s; }
  .loading-dots span:nth-child(3) { animation-delay: 0.4s; }

  /* Enhanced Moving Background Animations */
  @keyframes float1 {
    0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.6; }
    25% { transform: translate(40px, -40px) rotate(90deg); opacity: 0.8; }
    50% { transform: translate(-30px, -80px) rotate(180deg); opacity: 0.4; }
    75% { transform: translate(-60px, -40px) rotate(270deg); opacity: 0.7; }
  }

  @keyframes float2 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.5; }
    33% { transform: translate(-50px, 50px) rotate(120deg) scale(1.2); opacity: 0.8; }
    66% { transform: translate(50px, 30px) rotate(240deg) scale(0.8); opacity: 0.6; }
  }

  @keyframes float3 {
    0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
    20% { transform: translate(35px, -35px) rotate(72deg); opacity: 0.7; }
    40% { transform: translate(-25px, -70px) rotate(144deg); opacity: 0.9; }
    60% { transform: translate(-55px, -25px) rotate(216deg); opacity: 0.5; }
    80% { transform: translate(-30px, 35px) rotate(288deg); opacity: 0.8; }
  }

  @keyframes float4 {
    0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
    50% { transform: translate(-40px, -50px) scale(1.3); opacity: 0.3; }
  }

  @keyframes float5 {
    0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.7; }
    25% { transform: translate(55px, 45px) rotate(-90deg); opacity: 0.4; }
    50% { transform: translate(30px, -55px) rotate(-180deg); opacity: 0.8; }
    75% { transform: translate(-45px, 30px) rotate(-270deg); opacity: 0.5; }
  }

  @keyframes float6 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.3; }
    50% { transform: translate(25px, -25px) rotate(180deg) scale(1.1); opacity: 0.6; }
  }

  @keyframes float7 {
    0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.5; }
    33% { transform: translate(-20px, 60px) rotate(120deg); opacity: 0.8; }
    66% { transform: translate(40px, -20px) rotate(240deg); opacity: 0.4; }
  }

  .mini-loader {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top: 2px solid #fff;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    display: inline-block;
  }

  .filters-container {
    animation: fadeInUp 0.6s ease-out;
  }

  .select-wrapper:hover select {
    border-color: rgba(45, 182, 209, 0.6);
    box-shadow: 0 6px 20px rgba(45, 182, 209, 0.25);
    transform: translateY(-2px);
  }

  .search-wrapper:hover input {
    border-color: rgba(45, 182, 209, 0.6);
    box-shadow: 0 6px 20px rgba(45, 182, 209, 0.25);
    transform: translateY(-2px);
  }

  .search-wrapper:hover .search-icon {
    color: rgb(45, 182, 209);
    transform: scale(1.1);
  }

  .notes-card {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(0);
  }

  .notes-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(45, 182, 209, 0.2);
  }

  .notes-card:hover .card-icon {
    transform: scale(1.2) rotate(10deg);
  }

  .notes-card a:hover {
    background: linear-gradient(135deg, rgb(25, 4, 81), rgb(45, 182, 209)) !important;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(45, 182, 209, 0.4);
  }

  @media (max-width: 768px) {
    .filter-row {
      flex-direction: column !important;
      gap: 1rem !important;
    }

    .filters-glass {
      padding: 1.5rem !important;
      margin: 0 1rem;
    }

    .select-wrapper select {
      width: 100% !important;
      min-width: auto !important;
    }

    .search-container {
      width: 100% !important;
    }

    .search-wrapper {
      width: 100% !important;
    }

    .notes-card {
      padding: 1.5rem !important;
      margin-bottom: 1rem;
    }

    .card-header h4 {
      font-size: 1rem !important;
    }

    .tags-container {
      justify-content: center !important;
    }

    .beautiful-loader {
      width: 80px !important;
      height: 80px !important;
    }

    .loader-ring:nth-child(1) {
      width: 80px !important;
      height: 80px !important;
    }

    .loader-ring:nth-child(2) {
      width: 60px !important;
      height: 60px !important;
      top: 10px !important;
      left: 10px !important;
    }

    .loader-ring:nth-child(3) {
      width: 40px !important;
      height: 40px !important;
      top: 20px !important;
      left: 20px !important;
    }

    .loader-inner-circle {
      width: 20px !important;
      height: 20px !important;
      top: 30px !important;
      left: 30px !important;
    }
  }

  @media (max-width: 480px) {
    .header-container h2 {
      font-size: 2rem !important;
    }

    .notes-card {
      padding: 1.2rem !important;
    }

    .card-actions {
      flex-direction: column !important;
      gap: 0.8rem !important;
    }

    .card-actions button,
    .card-actions a {
      width: 100% !important;
      text-align: center !important;
    }
  }

  @keyframes fadeInUp {
    from { 
      opacity: 0; 
      transform: translateY(30px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }

  @keyframes bounceIn {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`}</style>

    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    padding: '2rem 1rem',
    background: 'linear-gradient(135deg, rgba(212, 237, 241, 0.95), rgba(228, 240, 241, 0.95))',
    backdropFilter: 'blur(10px)',
    minHeight: '100vh',
    fontFamily: "'Segoe UI', 'Roboto', sans-serif",
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
    top: '8%',
    left: '85%',
    width: '80px',
    height: '80px',
    background: 'linear-gradient(45deg, rgba(45, 182, 209, 0.15), rgba(25, 4, 81, 0.1))',
    borderRadius: '50%',
    animation: 'float1 25s ease-in-out infinite'
  },
  floatingShape2: {
    position: 'absolute',
    top: '65%',
    left: '3%',
    width: '60px',
    height: '60px',
    background: 'linear-gradient(135deg, rgba(25, 4, 81, 0.12), rgba(45, 182, 209, 0.2))',
    borderRadius: '30%',
    animation: 'float2 30s ease-in-out infinite'
  },
  floatingShape3: {
    position: 'absolute',
    top: '15%',
    left: '10%',
    width: '100px',
    height: '100px',
    background: 'linear-gradient(90deg, rgba(45, 182, 209, 0.1), rgba(212, 237, 241, 0.3))',
    borderRadius: '20%',
    animation: 'float3 35s ease-in-out infinite'
  },
  floatingShape4: {
    position: 'absolute',
    top: '80%',
    left: '75%',
    width: '70px',
    height: '70px',
    background: 'linear-gradient(180deg, rgba(25, 4, 81, 0.08), rgba(45, 182, 209, 0.15))',
    borderRadius: '50%',
    animation: 'float4 20s ease-in-out infinite'
  },
  floatingShape5: {
    position: 'absolute',
    top: '35%',
    left: '92%',
    width: '50px',
    height: '50px',
    background: 'linear-gradient(225deg, rgba(45, 182, 209, 0.25), rgba(212, 237, 241, 0.2))',
    borderRadius: '40%',
    animation: 'float5 28s ease-in-out infinite'
  },
  floatingShape6: {
    position: 'absolute',
    top: '50%',
    left: '5%',
    width: '40px',
    height: '40px',
    background: 'linear-gradient(60deg, rgba(25, 4, 81, 0.1), rgba(45, 182, 209, 0.2))',
    borderRadius: '60%',
    animation: 'float6 18s ease-in-out infinite'
  },
  floatingShape7: {
    position: 'absolute',
    top: '25%',
    left: '50%',
    width: '30px',
    height: '30px',
    background: 'linear-gradient(315deg, rgba(45, 182, 209, 0.3), rgba(25, 4, 81, 0.05))',
    borderRadius: '50%',
    animation: 'float7 22s ease-in-out infinite'
  },
  content: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1400px',
    margin: '0 auto'
  },
  headerContainer: {
    textAlign: 'center',
    marginBottom: '3rem',
    padding: '2rem 0'
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '0.5rem',
    color: 'rgb(25, 4, 81)',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem'
  },
  gradientText: {
    background: 'linear-gradient(45deg, rgb(25, 4, 81), rgb(45, 182, 209), rgb(25, 4, 81))',
    backgroundSize: '200% 100%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'gradientShimmer 3s ease-in-out infinite'
  },
  noteslogo: {
    width: '50px',
    height: '50px',
    filter: 'drop-shadow(0 4px 8px rgba(45, 182, 209, 0.3))',
    transition: 'transform 0.3s ease'
  },
  subtitle: {
    color: 'rgba(25, 4, 81, 0.7)',
    fontSize: '1.2rem',
    fontWeight: '400',
    margin: '0'
  },
  resultsHeader: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  subheading: {
    color: 'rgb(25, 4, 81)',
    fontSize: '1.5rem',
    fontWeight: '600',
    margin: '0'
  },
  filtersContainer: {
    marginBottom: '3rem',
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center'
  },
  filtersGlass: {
    background: 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(20px)',
    borderRadius: '25px',
    padding: '2rem 2.5rem',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    boxShadow: '0 15px 35px rgba(45, 182, 209, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
    maxWidth: '800px',
    width: '100%',
    position: 'relative',
    overflow: 'hidden'
  },
  filterRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.5rem',
    marginBottom: '1.5rem',
    flexWrap: 'wrap'
  },
  selectWrapper: {
    position: 'relative'
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  searchWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '450px'
  },
  select: {
    padding: '0.9rem 1.3rem',
    borderRadius: '18px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    minWidth: '160px',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(15px)',
    boxShadow: '0 8px 25px rgba(45, 182, 209, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
    fontSize: '1rem',
    fontWeight: '500',
    color: 'rgb(25, 4, 81)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    outline: 'none',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23194a51' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    backgroundSize: '16px',
    paddingRight: '40px'
  },
  searchBox: {
    padding: '0.9rem 3rem 0.9rem 1.5rem',
    borderRadius: '22px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(15px)',
    boxShadow: '0 8px 25px rgba(45, 182, 209, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
    fontSize: '1rem',
    fontWeight: '500',
    color: 'rgb(25, 4, 81)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    outline: 'none'
  },
  searchIcon: {
    position: 'absolute',
    right: '1.2rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'rgba(25, 4, 81, 0.6)',
    fontSize: '1.2rem',
    transition: 'all 0.3s ease',
    pointerEvents: 'none'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem',
    padding: '1rem 0'
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(15px)',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 8px 32px rgba(45, 182, 209, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    overflow: 'hidden',
    position: 'relative'
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem'
  },
  title: {
    color: 'rgb(25, 4, 81)',
    margin: '0',
    fontWeight: '700',
    fontSize: '1.3rem',
    lineHeight: '1.3'
  },
  cardContent: {
    marginBottom: '2rem'
  },
  subject: {
    color: 'rgba(25, 4, 81, 0.8)',
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '1rem'
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    justifyContent: 'flex-start'
  },
  tag: {
    display: 'inline-block',
    background: 'linear-gradient(135deg, rgba(45, 182, 209, 0.15), rgba(25, 4, 81, 0.1))',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '600',
    color: 'rgb(25, 4, 81)',
    border: '1px solid rgba(45, 182, 209, 0.2)',
    transition: 'all 0.3s ease'
  },
  cardActions: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  download: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.8rem 1.8rem',
    background: 'linear-gradient(135deg, rgb(45, 182, 209), rgba(25, 4, 81, 0.9))',
    color: '#fff',
    borderRadius: '25px',
    textDecoration: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fontWeight: '600',
    fontSize: '1rem',
    boxShadow: '0 4px 15px rgba(45, 182, 209, 0.3)'
  },
  downloadIcon: {
    fontSize: '1.1rem'
  },
  deleteBtn: {
    padding: '0.8rem 1.5rem',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '15px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(244, 67, 54, 0.3)'
  },
  noResultsContainer: {
    textAlign: 'center',
    padding: '4rem 2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    margin: '2rem 0',
    border: '1px solid rgba(255, 255, 255, 0.3)'
  },
  noResultsIcon: {
    fontSize: '4rem',
    marginBottom: '1rem',
    opacity: '0.7'
  },
  noResults: {
    color: 'rgba(25, 4, 81, 0.8)',
    fontSize: '1.3rem',
    fontWeight: '600',
    margin: '0 0 0.5rem 0'
  },
  noResultsSubtext: {
    color: 'rgba(25, 4, 81, 0.6)',
    fontSize: '1rem',
    margin: '0'
  },
  loaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '50vh',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    margin: '2rem 0'
  },
  loadingText: {
    color: 'rgb(25, 4, 81)',
    fontSize: '1.1rem',
    fontWeight: '500'
  }
};

export default Notes;









// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import logo from '../assets/noteslogo.png';

// function Notes() {
//   const [notes, setNotes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [deletingId, setDeletingId] = useState(null);
//   const [filters, setFilters] = useState({
//     course: '',
//     year: '',
//     semester: '',
//     search: ''
//   });

//   const role = localStorage.getItem('userRole');

//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   const fetchNotes = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get('https://studymate-backend-n321.onrender.com/api/notes/');
//       setNotes(res.data);
//     } catch (err) {
//       console.error("Error fetching notes:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this note?")) return;

//     setDeletingId(id);
//     try {
//       await axios.delete(`https://studymate-backend-n321.onrender.com/api/notes/${id}/`);
//       setNotes(prev => prev.filter(note => note.id !== id));
//     } catch (err) {
//       console.error("Failed to delete note", err);
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   const filteredNotes = notes.filter(note => {
//     const matchesCourse = !filters.course || note.course === filters.course;
//     const matchesYear = !filters.year || note.year === filters.year;
//     const matchesSemester = !filters.semester || Number(note.semester) === Number(filters.semester);
//     const matchesSearch = !filters.search ||
//       note.title.toLowerCase().includes(filters.search.toLowerCase()) ||
//       note.subject.toLowerCase().includes(filters.search.toLowerCase());

//     return matchesCourse && matchesYear && matchesSemester && matchesSearch;
//   });

//   return (
//     <div style={styles.container}>
//       {/* Moving Background */}
//       <div style={styles.movingBackground}>
//         <div style={styles.floatingShape1}></div>
//         <div style={styles.floatingShape2}></div>
//         <div style={styles.floatingShape3}></div>
//         <div style={styles.floatingShape4}></div>
//         <div style={styles.floatingShape5}></div>
//       </div>

//       {/* Main Content */}
//       <div style={styles.content}>
//         <h2 style={styles.heading}>
//           <img src={logo} alt="Logo" style={styles.noteslogo} /> Notes
//         </h2>

//         <div className="filters-container" style={styles.filters}>
//           <select onChange={(e) => setFilters({ ...filters, course: e.target.value })} style={styles.select}>
//             <option value="">All Courses</option>
//             <option value="BSc IT">BSc IT</option>
//             <option value="BSc CS">BSc CS</option>
//           </select>

//           <select onChange={(e) => setFilters({ ...filters, year: e.target.value })} style={styles.select}>
//             <option value="">All Years</option>
//             <option value="FY">First Year</option>
//             <option value="SY">Second Year</option>
//             <option value="TY">Third Year</option>
//           </select>

//           <select onChange={(e) => setFilters({ ...filters, semester: e.target.value })} style={styles.select}>
//             <option value="">All Semesters</option>
//             {[1, 2, 3, 4, 5, 6].map(num => (
//               <option key={num} value={num}>Sem {num}</option>
//             ))}
//           </select>

//           <input
//             type="text"
//             placeholder="🔍 Search by title/subject"
//             value={filters.search}
//             onChange={(e) => setFilters({ ...filters, search: e.target.value })}
//             style={styles.searchBox}
//           />
//         </div>

//         <h3 style={styles.subheading}>Notes List</h3>

//         {loading ? (
//           <div style={styles.loaderContainer}><div className="loader"></div></div>
//         ) : filteredNotes.length > 0 ? (
//           <div style={styles.grid}>
//             {filteredNotes.map((note, index) => (
//               <div key={index} style={styles.card} className="notes-card">
//                 <h4 style={styles.title}>{note.title} 📓</h4>
//                 <p><strong>{note.subject}</strong></p>
//                 <p>
//                   <span style={styles.tag}>{note.course}</span>{' '}
//                   <span style={styles.tag}>{note.year}</span>{' '}
//                   <span style={styles.tag}>Sem {note.semester}</span>
//                 </p>
//                 <a href={note.file_url} target="_blank" rel="noopener noreferrer" style={styles.download}>
//                   View & Download
//                 </a>

//                 {role === 'admin' && note.id && (
//                   <button onClick={() => handleDelete(note.id)} style={styles.deleteBtn} disabled={deletingId === note.id}>
//                     {deletingId === note.id ? <span className="mini-loader" /> : '❌ Delete'}
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p style={styles.noResults}>No notes found for the selected filters.</p>
//         )}
//       </div>

//       <style>{`
//   @keyframes spin {
//     0% { transform: rotate(0deg); }
//     100% { transform: rotate(360deg); }
//   }

//   /* Moving Background Animations */
//   @keyframes float1 {
//     0%, 100% { transform: translate(0, 0) rotate(0deg); }
//     25% { transform: translate(30px, -30px) rotate(90deg); }
//     50% { transform: translate(-20px, -60px) rotate(180deg); }
//     75% { transform: translate(-50px, -30px) rotate(270deg); }
//   }

//   @keyframes float2 {
//     0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
//     33% { transform: translate(-40px, 40px) rotate(120deg) scale(1.1); }
//     66% { transform: translate(40px, 20px) rotate(240deg) scale(0.9); }
//   }

//   @keyframes float3 {
//     0%, 100% { transform: translate(0, 0) rotate(0deg); }
//     20% { transform: translate(25px, -25px) rotate(72deg); }
//     40% { transform: translate(-15px, -50px) rotate(144deg); }
//     60% { transform: translate(-45px, -15px) rotate(216deg); }
//     80% { transform: translate(-20px, 25px) rotate(288deg); }
//   }

//   @keyframes float4 {
//     0%, 100% { transform: translate(0, 0) scale(1); }
//     50% { transform: translate(-30px, -40px) scale(1.2); }
//   }

//   @keyframes float5 {
//     0%, 100% { transform: translate(0, 0) rotate(0deg); }
//     25% { transform: translate(45px, 35px) rotate(-90deg); }
//     50% { transform: translate(20px, -45px) rotate(-180deg); }
//     75% { transform: translate(-35px, 20px) rotate(-270deg); }
//   }

//   .loader {
//     width: 42px;
//     height: 42px;
//     border: 5px solid #e0f7fa;
//     border-top: 5px solid #0288d1;
//     border-radius: 50%;
//     animation: spin 1s linear infinite;
//     margin: 2rem auto;
//   }

//   .mini-loader {
//     width: 16px;
//     height: 16px;
//     border: 2px solid #fff;
//     border-top: 2px solid #c62828;
//     border-radius: 50%;
//     animation: spin 0.8s linear infinite;
//     display: inline-block;
//   }

//   .filters-container {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     gap: 1rem;
//     margin-bottom: 2.2rem;
//     animation: fadeIn 0.6s ease-in-out;
//   }

//   .notes-card:hover {
//     transform: translateY(-6px);
//     box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
//   }

//   .notes-card a:hover {
//     background-color:rgb(40, 30, 106) !important;
//   }

//   @media (max-width: 768px) {
//     .filters-container {
//       flex-direction: column !important;
//       align-items: stretch !important;
//     }

//     .filters-container select,
//     .filters-container input {
//       width: 100% !important;
//     }

//     .notes-card {
//       padding: 1.2rem !important;
//     }
//   }

//   @keyframes fadeIn {
//     from { opacity: 0; transform: translateY(10px); }
//     to { opacity: 1; transform: translateY(0); }
//   }
// `}</style>

//     </div>
//   );
// }

// const styles = {
//   container: {
//     position: 'relative',
//     padding: '2rem',
//     background: 'linear-gradient(to bottom right,rgb(214, 237, 241),rgb(239, 251, 253))',
//     minHeight: '100vh',
//     fontFamily: 'Segoe UI, sans-serif',
//     overflow: 'hidden'
//   },
//   movingBackground: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     pointerEvents: 'none',
//     zIndex: 0
//   },
//   floatingShape1: {
//     position: 'absolute',
//     top: '10%',
//     left: '80%',
//     width: '60px',
//     height: '60px',
//     backgroundColor: 'rgba(2, 136, 209, 0.1)',
//     borderRadius: '50%',
//     animation: 'float1 20s ease-in-out infinite'
//   },
//   floatingShape2: {
//     position: 'absolute',
//     top: '60%',
//     left: '5%',
//     width: '40px',
//     height: '40px',
//     backgroundColor: 'rgba(0, 188, 212, 0.15)',
//     borderRadius: '30%',
//     animation: 'float2 25s ease-in-out infinite'
//   },
//   floatingShape3: {
//     position: 'absolute',
//     top: '20%',
//     left: '15%',
//     width: '80px',
//     height: '80px',
//     backgroundColor: 'rgba(2, 119, 189, 0.08)',
//     borderRadius: '20%',
//     animation: 'float3 30s ease-in-out infinite'
//   },
//   floatingShape4: {
//     position: 'absolute',
//     top: '75%',
//     left: '70%',
//     width: '50px',
//     height: '50px',
//     backgroundColor: 'rgba(0, 172, 193, 0.12)',
//     borderRadius: '50%',
//     animation: 'float4 15s ease-in-out infinite'
//   },
//   floatingShape5: {
//     position: 'absolute',
//     top: '40%',
//     left: '90%',
//     width: '35px',
//     height: '35px',
//     backgroundColor: 'rgba(2, 136, 209, 0.2)',
//     borderRadius: '40%',
//     animation: 'float5 22s ease-in-out infinite'
//   },
//   content: {
//     position: 'relative',
//     zIndex: 1
//   },
//   heading: {
//     textAlign: 'center',
//     fontSize: '2.5rem',
//     marginBottom: '1.5rem',
//     color: '#2c3e50'
//   },
//   noteslogo: {
//     width: '40px',
//     height: '40px',
//     verticalAlign: 'middle',
//     marginRight: '10px',
//     marginBottom: '5px'
//   },
//   subheading: {
//     textAlign: 'center',
//     color: '#444',
//     marginBottom: '1.5rem'
//   },
//   filters: {
//     position: 'relative',
//     zIndex: 2
//   },
//   select: {
//     padding: '0.6rem',
//     borderRadius: '10px',
//     border: '1px solid #ccc',
//     minWidth: '140px',
//     backgroundColor: '#fff',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
//   },
//   searchBox: {
//     padding: '0.6rem',
//     borderRadius: '10px',
//     border: '1px solid #ccc',
//     minWidth: '220px',
//     backgroundColor: '#fff',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
//   },
//   grid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
//     gap: '1.5rem'
//   },
//   card: {
//     backgroundColor: '#ffffff',
//     borderRadius: '16px',
//     padding: '1.5rem',
//     boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
//     transition: 'all 0.3s ease',
//     textAlign: 'center'
//   },
//   title: {
//     textTransform: 'uppercase',
//     color: '#2c3e50',
//     marginBottom: '0.7rem',
//     fontWeight: 'bold'
//   },
//   tag: {
//     display: 'inline-block',
//     backgroundColor: '#e1f5fe',
//     padding: '0.4rem 0.8rem',
//     borderRadius: '999px',
//     fontSize: '0.8rem',
//     margin: '0.3rem 0.2rem',
//     color: '#0277bd'
//   },
//   download: {
//     display: 'inline-block',
//     marginTop: '1rem',
//     padding: '0.6rem 1.4rem',
//     backgroundColor: '#00bcd4',
//     color: '#fff',
//     borderRadius: '30px',
//     textDecoration: 'none',
//     transition: 'background 0.3s ease',
//     fontWeight: '600'
//   },
//   deleteBtn: {
//     display: 'block',
//     margin: '0.8rem auto 0',
//     padding: '8px 16px',
//     backgroundColor: '#f44336',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '10px',
//     cursor: 'pointer',
//     fontWeight: 'bold'
//   },
//   noResults: {
//     textAlign: 'center',
//     color: '#888',
//     fontStyle: 'italic',
//     marginTop: '2rem'
//   },
//   loaderContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     minHeight: '40vh'
//   }
// };

// export default Notes;