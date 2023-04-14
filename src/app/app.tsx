import styles from './app.module.scss';
import { Avatar, Background, Panel } from '@resume/ui';
import foto from '../assets/images/foto.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export function App() {
  return (
    <div className={styles['main']}>
      <Background />
      <div className={styles['main-container']}>
        <div className={styles['left-panel']}>
          <Panel>
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
            </div>
          </Panel>
        </div>
        <div className={styles['right-panel']}>
          <h1>Right Panel</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
