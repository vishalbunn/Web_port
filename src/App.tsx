import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Layout from './Layout';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ProjectCaseStudy from './pages/ProjectCaseStudy';
import SystemsPage from './pages/SystemsPage';
import StackPage from './pages/StackPage';
import ContactPage from './pages/ContactPage';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:id" element={<ProjectCaseStudy />} />
          <Route path="systems" element={<SystemsPage />} />
          <Route path="stack" element={<StackPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
