import styles from './ProjectsStyles.module.scss';
import ProjectCard from '@/components/ProjectCard';
import { useUser } from '@/context/UserProfileContext';
import { IProjects } from '@/types';

function Projects() {
  const { profile } = useUser();

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {profile?.projects?.map((project: IProjects) => (
          <ProjectCard
            key={project.id}
            src={project.image}
            github_repo={project.github_repo}
            website={project.website}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
