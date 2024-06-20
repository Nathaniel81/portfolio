import { useUser } from '@/context/UserProfileContext';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import './App.css';
import { ImSpinner2 } from "react-icons/im";
import { Toaster } from 'react-hot-toast';

function App() {
  const { loading } = useUser();

  return (
    <>
      <Toaster />
      {loading ? (
        <div className="spinner-container">
          <ImSpinner2 className="spinner" />
        </div>
      ) : (
        <>
          <Hero />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
