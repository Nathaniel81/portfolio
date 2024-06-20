import styles from './ProjectCard.module.scss';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

interface projectCardProps {
	src: string;
	website: string;
	github_repo: string;
	title: string;
	description: string;
}

const ProjectCard = ({ src, github_repo, website, title, description }: projectCardProps) => {
  return (
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={src} />
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.header}>
            <h3>{title}</h3>
            <span className={styles.links}>
              <a href={github_repo} target="_blank">
                <FaGithub size={20} />
              </a>
              <a href={website} target="_blank">
                <FaExternalLinkAlt size={20} />
              </a>
            </span>
          </div>
          <p>{description}</p>
        </div>
      </div>
  );
};

export default ProjectCard;
