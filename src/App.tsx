import './App.css';
import Certifications from './components/certifications';
import Experience from './components/experience';
import ExtraActivities from './components/extra activities';
import Main from './components/main';
import NavBar from './components/nav';
import Projects from './components/projects';
import Skills from './components/skills';
import { DarkModeProvider, DarkModeContext } from './DarkModeContext';


function AppContent() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      <NavBar />
      <Main />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <ExtraActivities />
      

    </div>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

export default App;