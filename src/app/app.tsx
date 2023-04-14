import styles from './app.module.scss';
import { Avatar, Background, Panel, WorkSection } from '@resume/ui';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { jobs } from '@resume/models';

export function App() {
  return (
    <>
      <Background />
      <div className={styles['main']}>
        <div className={styles['left-panel']}>
          <Panel type="left">
            <div className={styles['left-panel-content']}>
              <Avatar
                src={'https://github.com/paulortesjr.png'}
                alt="Paulo Tessarolli"
                size={125}
              />
              <h1>Personal Information</h1>
              <h2>Paulo Roberto Tessarolli Junior</h2>
              <p>
                Email:{' '}
                <a href="mailto:paulortesjr@gmail.com">paulortesjr@gmail.com</a>
              </p>
              <h2>About me</h2>
              <p className={styles['left-panel-about']}>
                I have over 7 years of experience as a Frontend Developer, and I
                possess a strong understanding of API functionality, which I
                gained from my background as a Fullstack developer. Although I
                am well-versed in both areas, I have discovered that my passion
                for coding lies primarily in Frontend development. I am an
                ardent learner, and I enjoy studying and expanding my knowledge
                to stay up-to-date with the latest trends and advancements in
                the field.
              </p>
              <div className={styles['left-panel-actions']}>
                <a
                  href="https://www.linkedin.com/in/paulortesjr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon fontSize="large" />
                </a>
                <a
                  href="https://github.com/PauloRTesJr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon fontSize="large" />
                </a>
              </div>
            </div>
          </Panel>
        </div>
        <div className={styles['right-panel']}>
          <Panel type="right">
            <div className={styles['right-panel-content']}>
              <h1>Work Experience</h1>
              <WorkSection {...jobs.opus} />
            </div>
          </Panel>
        </div>
      </div>
    </>
  );
}

export default App;
