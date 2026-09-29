import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { services } from '../../data/services'
export default function Services() {
  return <section className="section-wrap services-section" id="services"><div className="section-grid"><SectionTitle eyebrow="HOW I CAN HELP" title="Ideas into interfaces." /><p className="intro-aside">Thoughtful digital work, with clear communication and a focus on the people using it.</p></div><div className="services-list">{services.map(service => <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><span className="service-arrow">↗</span></article>)}</div></section>
}
