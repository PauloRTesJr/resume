import { ReactNode } from 'react';
import styles from './panel.module.scss';

/* eslint-disable-next-line */
export interface PanelProps {
  children: ReactNode;
  type: 'left' | 'right';
}

export function Panel({ children, type }: PanelProps) {
  const isMobileOrTablet =
    window.innerWidth <= 768 && window.innerHeight <= 1024;

  const classType = isMobileOrTablet ? 'mobile' : type;

  return (
    <div className={`${styles['panel-container']} ${styles[classType]}`}>
      {children}
    </div>
  );
}

export default Panel;
