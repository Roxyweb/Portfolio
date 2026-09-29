type Props = { title: string; items: string[]; index: string }
export default function SkillCard({ title, items, index }: Props) {
  return <article className="skill-card"><span className="card-index">{index}</span><h3>{title}</h3><div className="tag-list">{items.map(item => <span className="tag" key={item}>{item}</span>)}</div></article>
}
