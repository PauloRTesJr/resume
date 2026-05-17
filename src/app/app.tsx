import styles from './app.module.scss';
import {
  Avatar,
  Background,
  Divider,
  Panel,
  Skill,
  WorkSection,
} from '@resume/ui';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/MailOutline';
import { Technology, jobs, technologies } from '@resume/models';

export function App() {
  const renderSkillItem = (technology: Technology) => {
    return (
      <Skill
        name={technology.name}
        color={technology.color}
        score={technology.score}
        key={technology.name}
      />
    );
  };

  const jobList = [jobs.opus, jobs.i9, jobs.newway, jobs.ltia];
  const yearsOfExperience = new Date().getFullYear() - 2015;
  const techCount = Object.keys(technologies).length;

  return (
    <>
      <Background />
      <main className={styles['shell']}>
        <div className={styles['main']}>
          <aside className={styles['left-panel']}>
            <Panel type="left">
              <div className={styles['left-panel-content']}>
                <div className={styles['status-pill']}>
                  <span className={styles['status-dot']} aria-hidden="true" />
                  Available for new opportunities
                </div>

                <Avatar
                  src={'https://github.com/paulortesjr.png'}
                  alt="Paulo Tessarolli"
                  size={132}
                />

                <h1 className={styles['name']}>
                  <span className={styles['gradient-text']}>
                    Paulo Tessarolli
                  </span>
                </h1>
                <p className={styles['tagline']}>
                  Senior Frontend Engineer · crafting fast, polished web
                  experiences
                </p>

                <div className={styles['section-label']}>
                  <span>{'// about'}</span>
                </div>
                <p className={styles['left-panel-about']}>
                  I have {yearsOfExperience}+ years of experience as a Frontend
                  Developer, with a strong understanding of API design from my
                  background as a Fullstack developer. Although I am well-versed
                  in both, my passion lies in Frontend. I am an ardent learner,
                  constantly studying to stay up-to-date with modern web trends
                  and tooling.
                </p>

                <div className={styles['section-label']}>
                  <span>{'// contact'}</span>
                </div>
                <div className={styles['contact-list']}>
                  <a
                    className={styles['contact-link']}
                    href="mailto:paulortesjr@gmail.com"
                    aria-label="Send me an email"
                  >
                    <EmailIcon fontSize="small" />
                    <span>paulortesjr@gmail.com</span>
                  </a>
                </div>

                <div className={styles['left-panel-actions']}>
                  <a
                    className={styles['icon-btn']}
                    href="https://www.linkedin.com/in/paulortesjr/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Checkout my LinkedIn page!"
                  >
                    <LinkedInIcon fontSize="medium" />
                  </a>
                  <a
                    className={styles['icon-btn']}
                    href="https://github.com/PauloRTesJr"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Checkout my Github page!"
                  >
                    <GitHubIcon fontSize="medium" />
                  </a>
                </div>
              </div>
            </Panel>
          </aside>

          <section className={styles['right-panel']}>
            <Panel type="right">
              <div className={styles['right-panel-content']}>
                <div className={styles['stats']}>
                  <div className={styles['stat']}>
                    <span className={styles['stat-value']}>
                      {yearsOfExperience}+
                    </span>
                    <span className={styles['stat-label']}>
                      years experience
                    </span>
                  </div>
                  <div className={styles['stat']}>
                    <span className={styles['stat-value']}>
                      {jobList.length}
                    </span>
                    <span className={styles['stat-label']}>companies</span>
                  </div>
                  <div className={styles['stat']}>
                    <span className={styles['stat-value']}>{techCount}</span>
                    <span className={styles['stat-label']}>technologies</span>
                  </div>
                </div>

                <h1>Work Experience</h1>
                <div className={styles['timeline']}>
                  {jobList.map((job) => (
                    <WorkSection key={job.company} {...job} />
                  ))}
                </div>

                <Divider />

                <h1>Skills</h1>
                <div className={styles['skills-container']}>
                  {Object.values(technologies).map(renderSkillItem)}
                </div>
              </div>
            </Panel>
          </section>
        </div>
        <footer className={styles['footer']}>
          <span>
            Designed &amp; built with care · © {new Date().getFullYear()} Paulo
            Tessarolli
          </span>
        </footer>
      </main>
    </>
  );
}

export default App;
