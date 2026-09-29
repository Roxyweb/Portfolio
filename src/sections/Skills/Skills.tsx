import SectionTitle from '../../components/SectionTitle/SectionTitle'
import SkillCard from '../../components/SkillCard/SkillCard'
import { exploring, skillGroups } from '../../data/skills'
export default function Skills() {
  return <section className="section-wrap skills-section" id="skills"><SectionTitle eyebrow="TOOLS I WORK WITH" title="A growing toolkit." text="A foundation in frontend, with room to keep exploring." /><div className="skills-grid">{skillGroups.map((group, i) => <SkillCard key={group.title} title={group.title} items={group.items} index={`0${i + 1}`} />)}</div><div className="exploring-row"><div><span className="eyebrow"><i />IN PROGRESS</span><h3>Currently exploring</h3><p>Learning in public, one experiment at a time.</p></div><div className="tag-list">{exploring.map(item => <span className="tag tag--outline" key={item}>{item}<span className="explore-dot" /></span>)}</div></div></section>
}
