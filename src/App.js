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
import { Login } from './components/Login';
import { Register } from './components/Register';
import { useState } from 'react';
import { Sidebar } from './components/Sidebar';


function App() {

  const [sidebar, setSidebar] = useState(false);

  //**** TO TURN OFF MOCK DATA AND USE BACKEND DATABASE - TOGGLE TO FALSE ****//
  const [mockData, setMockData] = useState(true);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  }

  return (
    <Router>
      <Navbar sidebar={sidebar} toggleSidebar={toggleSidebar} />
      <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/dashboard" element={<Dashboard mockData={mockData}/>} />
        <Route path="/edit/:id" element={<EditExercise mockData={mockData}/>} />
        <Route path="/create" element={<CreateExercise mockData={mockData} />} />
        <Route path="/user" element={<CreateField />} />
        <Route path="/statistics" element={<Statistics mockData={mockData}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
