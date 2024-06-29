import { useTheme } from '@/context/ThemeContext';
import { useUser } from '@/context/UserProfileContext';
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa6";
import { IoMoon, IoSunny } from "react-icons/io5";
import styles from './HeroStyles.module.scss';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const { profile } = useUser();
  const ROLE = 'Web Developer';

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={profile?.profile_picture || 'default_profile_picture_url'} // Provide a default image URL
          className={styles.hero}
          alt={`Profile picture of ${profile?.user?.first_name || 'User'}`}
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
        <h2>{ROLE}</h2>
        <span className={styles.socialIcons}>
          {profile?.discord && (
            <a href={profile.discord} aria-label="Discord">
              <FaDiscord 
                color={theme === 'dark' ? 'white' : 'black'} 
                size={20} 
              />
            </a>
          )}
          {profile?.github && (
            <a href={profile.github} aria-label="Github">
              <FaGithub 
                color={theme === 'dark' ? 'white' : 'black'} 
                size={20} 
              />
            </a>
          )}
          {profile?.linkedin && (
            <a href={profile.linkedin} aria-label="LinkedIn">
              <FaLinkedin 
                color={theme === 'dark' ? 'white' : 'black'} 
                size={20} 
              />
            </a>
          )}
        </span>
        <p className={styles.description}>
          {profile?.bio}
        </p>
        {profile?.cv && (
          <a href={profile.cv} download>
            <button className="hover">Resume</button>
          </a>
        )}
      </div>
    </section>
  );
}

export default Hero;
