type Props = { eyebrow: string; title: string; text?: string }
export default function SectionTitle({ eyebrow, title, text }: Props) {
  return <div className="section-heading"><span className="eyebrow"><i />{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}
