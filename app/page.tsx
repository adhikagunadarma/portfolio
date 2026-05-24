import Image from 'next/image';
import profileImage from '@/public/profile.jpg';

const coreHighlights = [
  '7 years of software engineering experience across backend, data, mobile, and full-stack delivery.',
  '4+ years focused on Java Spring Boot, Apache Spark, PostgreSQL, and AWS for finance-oriented backend systems.',
  'Built batch and near real-time processing flows, internal reporting services, and operational tooling.',
  'Actively targeting software engineering opportunities in Japan with a focus on reliable and maintainable systems.',
];

const experiences = [
  {
    company: 'Traveloka',
    role: 'Software Engineer (Backend)',
    period: 'Nov 2021 – Present',
    stack: 'Java, Spring Boot, Scala, Apache Spark, AWS, PostgreSQL, Docker, GitHub Actions',
    bullets: [
      'Developed and maintained AWS EMR-based ETL jobs for monthly financial closing, transforming product-level data from S3 for downstream analytics and finance systems.',
      'Maintained shared Spring Boot services used by corporate teams for standardized financial data ingestion, transformation, and operational workflows.',
      'Built finance reporting components including validation/checker flows, recorder processes, and near real-time transaction recording with SQS and SNS.',
      'Contributed to database archival automation with AWS Lambda and improved CI/CD build times for ETL deployments by reducing unnecessary module compilation.',
    ],
  },
  {
    company: 'Asuransi Simas Jiwa',
    role: 'Mobile Developer',
    period: 'Jan 2019 – Nov 2021',
    stack: 'Ionic, TypeScript, Angular, Android, iOS, REST APIs',
    bullets: [
      'Worked on SIJI Access, a customer app for policy viewing, claims submission, approval tracking, and product information.',
      'Improved maintainability by refactoring legacy modules into cleaner and more modular components.',
      'Reduced crashes and support friction with better API integration and client-side error handling.',
      'Supported SIJI Approval, an internal leadership application for operational approvals across mobile and web.',
    ],
  },
  {
    company: 'Sunwell System',
    role: 'Backend Developer (Freelance)',
    period: 'Sep 2018 – Dec 2018',
    stack: 'Laravel/Lumen, PHP, MySQL',
    bullets: [
      'Built backend APIs for a lightweight ERP covering warehouse, inventory, and sales workflows.',
      'Designed endpoints and coordinated implementation closely with frontend developers.',
      'Prepared deployment support and documentation for the client engineering team.',
    ],
  },
  {
    company: 'EBDesk Teknologi',
    role: 'Full-Stack Developer Intern',
    period: 'May 2017 – Aug 2017',
    stack: 'Spring Boot, Java, MySQL',
    bullets: [
      'Built an employee management system with organizational charts, role assignment, and access control.',
      'Delivered backend features, documentation, and deployment artifacts for internal use.',
    ],
  },
];

const projects = [
  {
    name: 'Financial ETL and Reporting Platform Work',
    description:
      'Production backend work spanning ETL pipelines, financial reporting, and near real-time recording flows on top of AWS, Spark, Spring Boot, and PostgreSQL.',
  },
  {
    name: 'Money Tracker App',
    description:
      'Personal finance backend built with Java Spring Boot and PostgreSQL, designed around CRUD workflows, structured business logic, and relational schema design.',
  },
  {
    name: 'Face Recognition Automation Tool',
    description:
      'Python automation tool using OpenCV, face-recognition, and Google APIs to identify photos containing a target face from cloud photo sources.',
  },
];

const skillGroups = [
  {
    title: 'Backend & Data',
    items: ['Java', 'Spring Boot', 'Scala', 'Apache Spark', 'REST API design', 'Microservices', 'ETL pipelines'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS EMR', 'ECS Fargate', 'Lambda', 'S3', 'RDS', 'SQS/SNS', 'Athena', 'QuickSight', 'Docker', 'GitHub Actions'],
  },
  {
    title: 'Databases & Other',
    items: ['PostgreSQL', 'MySQL', 'Python', 'TypeScript', 'PHP', 'Performance optimization', 'Cost efficiency'],
  },
];

const certifications = [
  'Flutter Clock Challenge — Google (2020)',
  'Flutter Create Challenge — Google (2019)',
  'Machine Learning, Data Science and Deep Learning with Python — Udemy (2020)',
  'The Complete iOS App Development Bootcamp — Udemy (2020)',
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero card">
        <div className="hero-copy">
          <p className="eyebrow">Backend Software Engineer</p>
          <h1>Adhika Gunadarma</h1>
          <p className="hero-text">
            I build reliable backend services, ETL pipelines, and finance-oriented internal platforms.
            My recent work has focused on Java Spring Boot, Scala Spark, PostgreSQL, and AWS.
          </p>
          <div className="hero-actions">
            <a href="mailto:adhikagunadarma@gmail.com" className="button primary">
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/adhika-gunadarma-b884a6118/"
              className="button secondary"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://github.com/adhikagunadarma" className="button secondary" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <ul className="meta-list">
            <li>Bandung, Indonesia</li>
            <li>English: Professional working proficiency</li>
            <li>Japanese: Basic, with weekly classes and daily practice</li>
          </ul>
        </div>

        <div className="hero-image-wrap">
          <Image
            src={profileImage}
            alt="Adhika Gunadarma"
            width={320}
            height={320}
            className="hero-image"
            priority
          />
        </div>
      </section>

      <section className="grid two-columns">
        <article className="card">
          <p className="section-label">About</p>
          <h2>Backend-first, with product and platform empathy</h2>
          <p>
            I am a backend software engineer with 7 years of experience across engineering roles, including
            4+ years working deeply on backend services and data workflows. I have supported financial
            systems, monthly closing ETL pipelines, reporting services, and operational reliability in
            cross-functional environments.
          </p>
          <p>
            My background also includes mobile and full-stack work, which helps me communicate well across
            product, business, and engineering teams. I am especially interested in opportunities in Japan
            where I can keep growing as an engineer while contributing to scalable and maintainable systems.
          </p>
        </article>

        <article className="card">
          <p className="section-label">Highlights</p>
          <h2>What I bring</h2>
          <ul className="bullet-list">
            {coreHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="card">
        <div className="section-heading-row">
          <div>
            <p className="section-label">Experience</p>
            <h2>Recent work and impact</h2>
          </div>
        </div>

        <div className="timeline">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.role}`} className="timeline-item">
              <div className="timeline-header">
                <div>
                  <h3>{experience.role}</h3>
                  <p className="timeline-company">{experience.company}</p>
                </div>
                <span className="timeline-period">{experience.period}</span>
              </div>
              <p className="stack-line">{experience.stack}</p>
              <ul className="bullet-list compact">
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="grid two-columns">
        <article className="card">
          <p className="section-label">Projects</p>
          <h2>Selected work</h2>
          <div className="project-list">
            {projects.map((project) => (
              <div key={project.name} className="project-item">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="card">
          <p className="section-label">Education & Certifications</p>
          <h2>Foundation and continuous learning</h2>
          <div className="education-block">
            <h3>Bachelor of Science in Computer Science</h3>
            <p>Institut Teknologi Harapan Bangsa · 2014 – 2018</p>
          </div>
          <ul className="bullet-list compact">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="card">
        <p className="section-label">Skills</p>
        <h2>Technical stack</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-card">
              <h3>{group.title}</h3>
              <div className="chip-wrap">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

