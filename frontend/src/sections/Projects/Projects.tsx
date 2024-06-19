import styles from './ProjectsStyles.module.scss';
import ProjectCard from '@/components/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={"pr0ject_image_url"}
          link="project_line"
          name="project_name"
          description="project_description"
        />
      </div>
    </section>
  );
}

export default Projects;
