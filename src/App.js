import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Notes from './pages/Notes';
import Feedback from './pages/Feedback';
import ThankYou from './pages/ThankYou';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UploadNote from './pages/UploadNote';
import FeedbackDisplay from './pages/FeedbackDisplay';
import Login from './pages/Login';
import './App.css'; 
import StudentGuide from './pages/StudentGuide';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/feedbacks" element={<FeedbackDisplay />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/upload" element={<UploadNote />} />
            <Route path="/login" element={<Login />} />
            <Route path="/guide" element={<StudentGuide />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

