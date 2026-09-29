import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { projects } from '../../data/projects'
export default function Projects() {
  return <section className="section-wrap projects-section" id="projects"><div className="section-grid projects-intro"><SectionTitle eyebrow="SELECTED WORK & EXPERIMENTS" title={'A few things\nin the making.'} /><p className="intro-aside">Small steps, personal experiments and ideas taking shape. Each project is part of the learning process.</p></div><div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div></section>
}
