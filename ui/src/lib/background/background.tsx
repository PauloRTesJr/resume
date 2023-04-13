import { useEffect, useMemo, useState } from 'react';
import styles from './background.module.scss';
import angularLogo from './images/angular.svg';
import reactLogo from './images/react.svg';
import svelteLogo from './images/svelte.svg';
import flutterLogo from './images/flutter.svg';

export function Background() {
  const images = useMemo(
    () => [angularLogo, reactLogo, svelteLogo, flutterLogo],
    []
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setOpacity(1);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className={styles['background']}>
      <img
        className={styles['background-image']}
        width={400}
        height={400}
        src={images[currentImageIndex]}
        alt="logo slider"
        style={{ opacity, transition: 'opacity 0.5s' }}
      />
    </div>
  );
}

export default Background;
