import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FeedbackDisplay() {
  const [feedbacks, setFeedbacks] = useState([]);

  const isAdmin = localStorage.getItem("userRole") === "admin";

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = () => {
    axios.get('https://studymate-backend-n321.onrender.com/api/feedbacks/')
      .then(res => setFeedbacks(res.data))
      .catch(err => console.error("Failed to fetch feedbacks", err));
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this feedback?");
    if (!confirm) return;

    try {
      await axios.delete(`https://studymate-backend-n321.onrender.com/api/delete-feedback/${id}`);
      fetchFeedbacks(); // refresh after delete
    } catch (err) {
      console.error("Delete failed", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Student Feedback ❤️</h2>

      {feedbacks.length === 0 ? (
        <p style={styles.noFeedback}>No feedback submitted yet.</p>
      ) : (
        <div style={styles.grid}>
          {feedbacks.map((fb, index) => (
            <div key={index} style={styles.card}>
              <h3 style={styles.name}>
                👤 {fb.name} <span style={styles.id}>({fb.college_id})</span>
              </h3>
              <p style={styles.message}> {fb.message}</p>
              <small style={styles.time}> {new Date(fb.submitted_at).toLocaleString()}</small>
              {isAdmin && (
                <button
                  style={styles.deleteBtn}
                  onClick={() => handleDelete(fb._id || fb.id)}
                >
                  🗑️ Delete
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    background: 'linear-gradient(to right, #e0f7fa, #fce4ec)',
    minHeight: '100vh'
  },
  heading: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#2c3e50'
  },
  noFeedback: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#777'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem'
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '1.2rem',
    borderRadius: '12px',
    boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
    position: 'relative',
  },
  name: {
    fontSize: '1.1rem',
    color: '#34495e',
    marginBottom: '0.5rem'
  },
  id: {
    fontWeight: 'normal',
    color: '#999',
    fontSize: '0.95rem'
  },
  message: {
    fontSize: '1rem',
    marginBottom: '0.5rem',
    color: '#555'
  },
  time: {
    fontSize: '0.85rem',
    color: '#888'
  },
  deleteBtn: {
    marginTop: '10px',
    padding: '6px 12px',
    fontSize: '0.85rem',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: '0.3s',
  }
};

export default FeedbackDisplay;









// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function FeedbackDisplay() {
//   const [feedbacks, setFeedbacks] = useState([]);

//   useEffect(() => {
//     axios.get('https://studymate-backend-n321.onrender.com/api/feedbacks/')
//       .then(res => setFeedbacks(res.data))
//       .catch(err => console.error("Failed to fetch feedbacks", err));
//   }, []);

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Student Feedback❤️</h2>

//       {feedbacks.length === 0 ? (
//         <p style={styles.noFeedback}>No feedback submitted yet.</p>
//       ) : (
//         <div style={styles.grid}>
//           {feedbacks.map((fb, index) => (
//             <div key={index} style={styles.card}>
//               <h3 style={styles.name}>
//                 👤 {fb.name} <span style={styles.id}>({fb.college_id})</span>
//               </h3>
//               <p style={styles.message}>📝 {fb.message}</p>
//               <small style={styles.time}>🕒 {new Date(fb.submitted_at).toLocaleString()}</small>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: '2rem',
//     background: 'linear-gradient(to right, #e0f7fa, #fce4ec)',
//     minHeight: '100vh'
//   },
//   heading: {
//     fontSize: '2.5rem',
//     textAlign: 'center',
//     marginBottom: '2rem',
//     color: '#2c3e50'
//   },
//   noFeedback: {
//     textAlign: 'center',
//     fontStyle: 'italic',
//     color: '#777'
//   },
//   grid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//     gap: '1.5rem'
//   },
//   card: {
//     backgroundColor: '#ffffff',
//     padding: '1.2rem',
//     borderRadius: '12px',
//     boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
//     transition: 'transform 0.2s ease',
//   },
//   name: {
//     fontSize: '1.1rem',
//     color: '#34495e',
//     marginBottom: '0.5rem'
//   },
//   id: {
//     fontWeight: 'normal',
//     color: '#999',
//     fontSize: '0.95rem'
//   },
//   message: {
//     fontSize: '1rem',
//     marginBottom: '0.5rem',
//     color: '#555'
//   },
//   time: {
//     fontSize: '0.85rem',
//     color: '#888'
//   }
// };

// export default FeedbackDisplay;
