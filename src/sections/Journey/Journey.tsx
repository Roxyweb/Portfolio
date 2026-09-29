import SectionTitle from '../../components/SectionTitle/SectionTitle'
const steps = [
  { time: '2023', title: 'The Beginning', text: 'Started exploring technology and coding.' },
  { time: 'THEN', title: 'Frontend Development', text: 'Focused on HTML, CSS and JavaScript.' },
  { time: 'NEXT', title: 'React & Modern Web', text: 'Started building interactive interfaces with React and modern frontend tools.' },
  { time: 'ALONG THE WAY', title: 'Design & 3D', text: 'Explored Figma, UI/UX, Blender and 3D design.' },
  { time: 'EXPANDING', title: 'Python & Automation', text: 'Expanded into Python, automation and programming.' },
  { time: 'NOW', title: 'JARVIS', text: 'Developing an experimental voice-controlled personal assistant while continuing to learn.' },
]
export default function Journey() {
  return <section className="section-wrap journey-section" id="journey"><SectionTitle eyebrow="THE LEARNING CURVE" title="One step at a time." text="A work in progress, and that’s the point." /><div className="journey-list">{steps.map((step, i) => <article className={`journey-item ${i === steps.length - 1 ? 'journey-item--current' : ''}`} key={step.title}><span className="journey-time">{step.time}</span><span className="journey-node" /><div><h3>{step.title}{i === steps.length - 1 && <span className="now-pill">CURRENTLY</span>}</h3><p>{step.text}</p></div></article>)}</div></section>
}
