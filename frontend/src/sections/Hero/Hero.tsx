import { useTheme } from '@/context/ThemeContext';
import { useUser } from '@/context/UserProfileContext';
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoMoon, IoSunny } from "react-icons/io5";
import styles from './HeroStyles.module.scss';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const { profile } = useUser();

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={profile?.profile_picture}
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
          {profile?.user?.first_name}
          <br />
          {profile?.user?.last_name}
        </h1>
        <h2>Web Developer</h2>
        <span className={styles.socialIcons}>
          <a href={profile?.twitter} aria-label="Twitter">
            <FaXTwitter 
              color={theme === 'dark' ? 'white' : 'black'} 
              size={20} 
            />
          </a>
          <a href={profile?.github} aria-label="Github">
            <FaGithub 
              color={theme === 'dark' ? 'white' : 'black'} 
              size={20} 
            />
          </a>
          <a href={profile?.linkedin} aria-label="LinkedIn">
            <FaLinkedin 
              color={theme === 'dark' ? 'white' : 'black'} 
              size={20} 
            />
          </a>
        </span>
        <p className={styles.description}>
          {profile?.bio}
        </p>
        <a href={profile?.cv} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
