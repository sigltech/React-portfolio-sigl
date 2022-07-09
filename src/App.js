import React, {useState, useEffect} from 'react';
import './css/App.css';
import {LoadingPage} from './components/index.jsx';
import { ProjectsPage} from './pages/ProjectsPage';
import { AboutMe} from './pages/AboutMe';
import { ContactmePage } from './pages/ContactmePage';
import { HomePage } from './pages/HomePage';
import { Layout } from './Layout/index.js'
import {Routes, Route} from 'react-router-dom';


function App() {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  },[]);

  return (
    <>
    {loading ? <LoadingPage /> :
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactmePage />} />
        </Route>
      </Routes>
    }
    </>
  );
}

export default App;
