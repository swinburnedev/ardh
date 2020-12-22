import Image from 'next/image';
import styles from '../styles/components/ProjectLocation.module.scss';

const ProjectLocation = ({location, map, title}) => (
  <div className={styles.project}>
    <div className={styles.project__details}>
      <p>Project Name</p>
      <h1>{title}</h1>
      <p>Project Location</p>
      <h2>{location}</h2>
    </div>
    <div className={styles.project__map}>
      <Image
        src={map}
        layout="fill"
        alt={location}
      />
    </div>
  </div>
)

export default ProjectLocation;
