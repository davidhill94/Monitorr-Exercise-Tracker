import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { EditExercise } from './components/EditExercise';
import { CreateExercise } from './components/CreateExercise';
import { CreateField } from './components/CreateField';
import { HeroSection } from './components/HeroSection';
import { Footer } from './components/Footer/Footer';
import { Statistics } from './components/Statistics';
import { About } from './components/About';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit/:id" element={<EditExercise />} />
        <Route path="/create" element={<CreateExercise />} />
        <Route path="/user" element={<CreateField />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
