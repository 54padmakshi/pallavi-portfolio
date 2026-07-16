import { useEffect, useRef } from 'react'
import {
  roles, contact, summary, skillGroups, projects, experience, education, training,
} from './data.js'

/** Fades a section in the first time it scrolls into view. */
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          io.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

function Nav() {
  const links = [
    ['Summary', '#summary'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Experience', '#experience'],
    ['Education', '#education'],
  ]
  return (
    <nav>
      <div className="wrap navbar">
        <div className="brand">
          Pallavi<span className="tag">.dev</span>
        </div>
        <ul>
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-inner">
        <div className="jsx-line">
          <span className="b">const</span> engineer = <span className="b">new</span> Developer(
          <span className="s">"Bengaluru"</span>)<span className="cursor" />
        </div>
        <h1 className="name">Pallavi Huilgol</h1>
        <div className="roles">
          {roles.map((r) => (
            <span key={r}>{r}</span>
          ))}
        </div>
        <div className="hero-meta">
          <a href={`tel:${contact.phone}`}>📞 {contact.phoneDisplay}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </header>
  )
}

function Summary() {
  const ref = useReveal()
  return (
    <section id="summary">
      <div className="wrap summary reveal" ref={ref}>
        <p className="eyebrow">Summary</p>
        <h2>Building back into frontend, deliberately</h2>
        <p>{summary}</p>
      </div>
    </section>
  )
}

function Skills() {
  const ref = useReveal()
  return (
    <section id="skills">
      <div className="wrap reveal" ref={ref}>
        <p className="eyebrow">Skills</p>
        <h2>Core stack</h2>
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="chips">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <div className={`proj-card${project.wide ? ' wide' : ''}`}>
      <span className="proj-tag">{project.tag}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.links.length > 0 && (
        <div className="proj-links">
          {project.links.map((link) => (
            <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.url}>
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

function Projects() {
  const ref = useReveal()
  return (
    <section id="projects">
      <div className="wrap reveal" ref={ref}>
        <p className="eyebrow">Projects</p>
        <h2>Recent build log</h2>
        <div className="projects">
          {projects.map((p) => (
            <ProjectCard project={p} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  const ref = useReveal()
  return (
    <section id="experience">
      <div className="wrap reveal" ref={ref}>
        <p className="eyebrow">Experience</p>
        <h2>Track record</h2>
        <div className="timeline">
          {experience.map((job) => (
            <div className="t-item" key={job.role}>
              <div className="role">{job.role}</div>
              <div className="org">{job.org}</div>
              <div className="dates">{job.dates}</div>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  const ref = useReveal()
  return (
    <section id="education">
      <div className="wrap reveal" ref={ref}>
        <div className="grid-two">
          <div>
            <p className="eyebrow">Education</p>
            <h2>Foundation</h2>
            <div className="edu-item">
              <div className="role">{education.role}</div>
              <div className="dates">{education.dates}</div>
            </div>
          </div>
          <div>
            <p className="eyebrow">Training</p>
            <h2>Recent upskilling</h2>
            <ul className="plain">
              {training.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        Built by Pallavi Huilgol · Bengaluru ·{' '}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Summary />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </>
  )
}
