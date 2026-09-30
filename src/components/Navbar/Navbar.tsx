type Props = { menuOpen: boolean; setMenuOpen: (open: boolean) => void }
const links = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Services', '#services'], ['Journey', '#journey'], ['Contact', '#contact']]
export default function Navbar({ menuOpen, setMenuOpen }: Props) {
  return <header className="site-header"><nav className="nav-shell" aria-label="Main navigation"><a className="wordmark" href="#home" aria-label="Okibe Roy Samson home">ROY<span>.</span></a><button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button><div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>{links.map(([name, href]) => <a key={name} href={href} onClick={() => setMenuOpen(false)}>{name}</a>)}<a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <span>↗</span></a></div></nav></header>
}
