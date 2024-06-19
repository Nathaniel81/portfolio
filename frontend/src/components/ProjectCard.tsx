import styles from './ProjectCard.module.scss';

interface projectCardProps {
	src: string;
	link: string;
	name: string;
	description: string;
}

const ProjectCard = ({ src, link, name, description }: projectCardProps) => {
  return (
    <a href={link} target="_blank">
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={src} />
        </div>
        <div className={styles.descriptionContainer}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
