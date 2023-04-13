import styles from './app.module.scss';
import { Avatar, Background, Panel } from '@resume/ui';
import foto from '../assets/images/foto.jpg';

export function App() {
  return (
    <div className={styles['main']}>
      <Background />
      <div className={styles['left-panel']}>
        <Panel>
          <div className={styles['left-panel-content']}>
            <Avatar src={foto} alt="Paulo Tessarolli" size={200} />
          </div>
        </Panel>
      </div>
      <div className={styles['right-panel']}>
        <h1>Right Panel</h1>
      </div>
    </div>
  );
}

export default App;
