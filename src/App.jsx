
import "./App.css";
import maPhoto from "./assets/ma-photo.jpg";

const skills = [
  {
    category: "01 / WEB DEVELOPMENT",
    icon: "⌘",
    name: "Développement web",
    color: "violet",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"],
    level: "FORMATION & PRATIQUE",
  },
  {
    category: "02 / PROGRAMMING",
    icon: "</>",
    name: "Programmation",
    color: "blue",
    items: ["Java", "Python — notions", "API REST", "Spring Boot"],
    level: "SELON LES PROJETS",
  },
  {
    category: "03 / NETWORK ENGINEERING",
    icon: "⌁",
    name: "Réseaux informatiques",
    color: "cyan",
    items: ["Adressage IP", "TCP/IP", "Cisco Packet Tracer", "CCNA — cours"],
    level: "APPRENTISSAGE PRATIQUE",
  },
  {
    category: "04 / CYBERSECURITY",
    icon: "⬡",
    name: "Cybersécurité",
    color: "pink",
    items: [
      "Sécurité informatique",
      "Menaces & vulnérabilités",
      "Bonnes pratiques",
      "Sensibilisation",
    ],
    level: "NOTIONS & FORMATION",
  },
  {
    category: "05 / SYSTEMS & IT",
    icon: "▤",
    name: "Systèmes & support IT",
    color: "orange",
    items: [
      "Windows",
      "Installation logiciels",
      "Configuration de postes",
      "Support technique",
    ],
    level: "EXPÉRIENCE PRATIQUE",
  },
  {
    category: "06 / TOOLS & BUSINESS",
    icon: "◈",
    name: "Outils & applications",
    color: "green",
    items: ["Git & GitHub", "Odoo ERP", "VS Code", "Microsoft Office"],
    level: "FORMATION & UTILISATION",
  },
];

const projects = [
  {
    number: "01",
    type: "DÉVELOPPEMENT WEB",
    title: "API REST Authentication",
    description:
      "Projet autour de l'authentification et des échanges entre applications via une API REST.",
    tags: ["API REST", "Backend"],
    link: "https://github.com/halimata22/api-rest-authentification",
    linkText: "Explorer le dépôt",
    visual: "api",
  },
  {
    number: "02",
    type: "INTERFACE WEB",
    title: "Gestion des utilisateurs",
    description:
      "Projet d'interface web dédié à la gestion des utilisateurs.",
    tags: ["Interface", "Web"],
    link: "https://github.com/halimata22/gestion-user-interface",
    linkText: "Explorer le dépôt",
    visual: "interface",
  },
  
  {
    number: "03",
    type: "GESTION & ERP",
    title: "Gestion d’inventaire avec Odoo",
    description:
      "Projet réalisé dans le cadre de ma formation, consacré à la configuration de modules Odoo pour la gestion de l’inventaire et le suivi des stocks.",
    tags: ["Odoo ERP", "Inventaire", "Gestion des stocks"],
    link: null,
    link: "https://github.com/halimata22/odoo-gestion-inventaire.git",

    linkText: "Explorer le dépôt",
  },

];

function Reveal({ children, className = "" }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function SkillCard({ skill, index }) {
  return (
    <article
      className={`skill-card ${skill.color}`}
      style={{ "--delay": `${index * 100}ms` }}
    >
      <div className="skill-card-top">
        <span className="skill-icon">{skill.icon}</span>
        <span className="skill-index">0{index + 1}</span>
      </div>

      <p className="micro-label">{skill.category}</p>
      <h3>{skill.name}</h3>

      <div className="skill-tags">
        {skill.items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div className="skill-bottom">
        <span className="tiny-dot" />
        {skill.level}
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card project-${project.visual}`}>
      <div className="project-art">
        <span className="art-number">{project.number} / 03</span>

        {project.visual === "api" && (
          <div className="api-art">
            <span className="api-bracket">{"{ }"}</span>
            <div className="api-lines">
              <i />
              <i />
              <i />
              <i />
            </div>
            <span className="art-caption">REST / AUTH</span>
          </div>
        )}

        {project.visual === "interface" && (
          <div className="interface-art">
            <div className="interface-sidebar">
              <i />
              <i />
              <i />
            </div>
            <div className="interface-content">
              <div className="interface-heading" />
              <div className="interface-row">
                <i />
                <i />
              </div>
              <div className="interface-row">
                <i />
                <i />
              </div>
              <div className="interface-row">
                <i />
                <i />
              </div>
            </div>
          </div>
        )}

        {project.visual === "network" && (
          <div className="network-art">
            <span className="node node-a">PC</span>
            <span className="node node-b">SW</span>
            <span className="node node-c">R</span>
            <span className="node node-d">PC</span>
            <span className="network-line line-a" />
            <span className="network-line line-b" />
            <span className="network-line line-c" />
            <span className="network-line line-d" />
          </div>
        )}
      </div>

      <div className="project-info">
        <p className="micro-label">{project.type}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            {project.linkText} <span>↗</span>
          </a>
        ) : (
          <span className="project-coming">{project.linkText} ↗</span>
        )}
      </div>
    </article>
  );
}

function App() {
  return (
    <div className="portfolio">
      <div className="background-grid" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="navbar">
        <a href="#accueil" className="logo">
          H<span>.</span>
          <small>PORTFOLIO</small>
        </a>

        <nav>
          <a href="#apropos">À propos</a>
          <a href="#competences">Compétences</a>
          <a href="#projets">Projets</a>
          <a href="#contact" className="nav-contact">
            Me contacter ↗
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-content">
            <div className="availability">
              <span className="pulse-dot" />
              <span>PORTFOLIO PERSONNEL / 2026</span>
            </div>

            
<p className="hero-eyebrow">
  FUTURE INGÉNIEURE EN CYBERSÉCURITÉ
</p>

<div className="hero-name-wrap">
  <p className="name-overline">IDENTITÉ NUMÉRIQUE</p>

  <h2 className="hero-name">
    <span className="name-initial">H</span>alimata Adoum <span className="name-dot">.</span>
  </h2>

  <div className="name-signature">
    <span className="name-line"></span>
    <span>TECH · NETWORKS · SECURITY</span>
    <span className="name-line"></span>
  </div>
</div>

<h1>
  Comprendre.
  <br />
  Connecter.
  <br />
  <span className="gradient-text">Sécuriser.</span>
</h1>

            <p className="hero-description">
              Étudiante en informatique, passionnée par les réseaux,
              les technologies web et la sécurité des systèmes numériques.
              Je transforme ma curiosité en compétences, projet après projet.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projets">
                Explorer mon univers <span>↗</span>
              </a>
              <a className="button button-ghost" href="#competences">
                Mes compétences <span>↓</span>
              </a>
            </div>

            <div className="hero-footer">
              <span><i /> RÉSEAUX</span>
              <span><i /> CYBERSÉCURITÉ</span>
              <span><i /> DÉVELOPPEMENT</span>
            </div>
          </div>

          {/* Photo intégrée à côté du texte d'accueil */}
          <div className="hero-visual hero-profile-layout">
            <div className="profile-orbit profile-orbit-one" />
            <div className="profile-orbit profile-orbit-two" />
            <div className="profile-orbit profile-orbit-three" />

            <span className="profile-cross profile-cross-one">+</span>
            <span className="profile-cross profile-cross-two">+</span>

            <div className="profile-frame">
              <div className="profile-frame-inner">
                <img
                  src={maPhoto}
                  alt="Portrait de Halimata"
                  className="hero-profile-photo"
                />
              </div>
            </div>

            <div className="profile-label profile-label-top">
              <span className="profile-label-icon">⌁</span>
              <span>
                <small>FIELD 01</small>
                <b>NETWORKS</b>
              </span>
              <i />
            </div>

            <div className="profile-label profile-label-bottom">
              <span className="profile-label-icon">⬡</span>
              <span>
                <small>FIELD 02</small>
                <b>CYBERSECURITY</b>
              </span>
              <i />
            </div>

            <div className="visual-coordinates">
              04°03' N
              <br />
              09°42' E
            </div>
            <div className="visual-index">FIG. 001 — DIGITAL IDENTITY</div>
          </div>

          <a href="#apropos" className="scroll-cue">
            <span className="scroll-line" />
            DÉFILER POUR EXPLORER
          </a>
        </section>

        <section className="about section-shell" id="apropos">
          <Reveal>
            <div className="section-heading">
              <p className="section-kicker">01 / À PROPOS</p>
              <span className="section-code">IDENTITY_PROTOCOL</span>
            </div>

            <div className="about-layout">
              <div className="about-title">
                <h2>
                  La curiosité
                  <br />
                  est mon <span className="gradient-text">moteur.</span>
                </h2>
              </div>

              <div className="about-copy">
                <p>
                  Je suis étudiante en troisième année d'informatique et je
                  construis progressivement mon parcours vers les réseaux
                  et la cybersécurité.
                </p>
                <p>
                  J'explore aussi le développement web, les API et les outils
                  informatiques. Mon expérience en support IT m'a permis de
                  découvrir la configuration des postes de travail,
                  l'installation d'applications et l'assistance technique.
                </p>
                <div className="about-signature">
                  <span className="signature-line" />
                  <span>APPRENDRE · PRATIQUER · PROGRESSER</span>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="skills section-shell" id="competences">
          <Reveal>
            <div className="section-heading">
              <p className="section-kicker">02 / COMPÉTENCES</p>
              <span className="section-code">SKILL_MATRIX v1.0</span>
            </div>

            <div className="skills-heading">
              <h2>
                Plusieurs domaines.
                <br />
                <span className="gradient-text">Une seule ambition.</span>
              </h2>
              <p>
                Un aperçu des technologies étudiées et des outils utilisés
                pendant ma formation et mes projets.
              </p>
            </div>
          </Reveal>

          <div className="skills-matrix">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          <p className="skills-note">
            * Les niveaux varient selon la technologie. Cette liste présente
            des acquis de formation et des domaines en cours d'apprentissage.
          </p>
        </section>

        <section className="projects section-shell" id="projets">
          <Reveal>
            <div className="section-heading">
              <p className="section-kicker">03 / PROJETS & EXPÉRIENCES</p>
              <span className="section-code">BUILD_LOG / 2026</span>
            </div>

            <div className="projects-heading">
              <h2>
                Le savoir prend
                <br />
                forme dans <span className="gradient-text">l'action.</span>
              </h2>
              <p>
                Quelques projets et expériences de mon parcours informatique.
              </p>
            </div>
          </Reveal>

          <div className="project-list">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
        </section>

        <section className="journey section-shell">
          <Reveal>
            <div className="section-heading">
              <p className="section-kicker">04 / MON PARCOURS</p>
              <span className="section-code">ROADMAP.EXE</span>
            </div>

            <h2>
              En progression.
              <br />
              <span className="gradient-text">Toujours.</span>
            </h2>

            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-node">01</span>
                <div>
                  <p className="micro-label">FORMATION</p>
                  <h3>Informatique — 3e année</h3>
                  <p>
                    Développement, systèmes, réseaux et bases de la sécurité
                    informatique.
                  </p>
                </div>
                <span className="timeline-status">EN COURS</span>
              </div>

              <div className="timeline-item">
                <span className="timeline-node">02</span>
                <div>
                  <p className="micro-label">EXPÉRIENCE</p>
                  <h3>Stage en support informatique</h3>
                  <p>
                    Configuration de postes, logiciels, imprimantes et
                    assistance technique.
                  </p>
                </div>
                <span className="timeline-status">PRATIQUE</span>
              </div>

              <div className="timeline-item">
                <span className="timeline-node">03</span>
                <div>
                  <p className="micro-label">OBJECTIF</p>
                  <h3>Ingénierie réseaux & cybersécurité</h3>
                  <p>
                    Approfondir les réseaux, les systèmes et les pratiques
                    de sécurisation.
                  </p>
                </div>
                <span className="timeline-status future">NEXT MISSION</span>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-frame">
            <div className="contact-orb" />
            <p className="section-kicker">05 / CONTACT</p>
            <p className="contact-overline">
              UNE IDÉE · UNE OPPORTUNITÉ · UN ÉCHANGE
            </p>
            <h2>
              Créons quelque chose
              <br />
              de <span className="gradient-text">remarquable.</span>
            </h2>
            <p className="contact-description">
              Je suis ouverte aux échanges, aux projets d'apprentissage
              et aux opportunités qui me permettront de progresser.
            </p>
            <a
              className="button button-primary contact-button"
              href="mailto:adoumhalimata2@gmail.com"
            >
              Entrer en contact <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#accueil" className="logo">
          H<span>.</span>
        </a>
        <p>CONÇU AVEC CURIOSITÉ & CAFÉ · © 2026</p>
        <a href="#accueil" className="back-top">
          RETOUR EN HAUT ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
