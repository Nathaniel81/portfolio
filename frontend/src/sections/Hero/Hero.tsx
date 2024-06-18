import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import { useTheme } from '@/context/ThemeContext';
import { IoSunny, IoMoon } from "react-icons/io5";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Nate"
        />
        {theme === 'dark' ? (
          <IoSunny 
            className={styles.colorMode} 
            aria-label="Switch to light mode"
            color="white"
            size={40}
            onClick={toggleTheme}
          />
        ) : (
          <IoMoon
            className={styles.colorMode} 
            aria-label="Switch to dark mode"
            size={40}
            onClick={toggleTheme}
          />
        )}
      </div>
      <div className={styles.info}>
        <h1>
          Nathaniel
          <br />
          Demissie
        </h1>
        <h2>Web Developer</h2>
        <span className={styles.socialIcons}>
          <FaXTwitter 
            color={theme === 'dark' ? 'white' : 'black'} 
            size={20} 
            aria-label="Twitter"
          />
          <FaGithub 
            color={theme === 'dark' ? 'white' : 'black'} 
            size={20} 
            aria-label="Github"
          />
          <FaLinkedin 
            color={theme === 'dark' ? 'white' : 'black'} 
            size={20} 
            aria-label="LinkedIn"
          />
        </span>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <a href="/resume" download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
