
import Image from 'next/image';
import styles from '../styles/components/ProjectLocation.module.scss';

const ProjectLocation = ({location, map, title}) => {
  return (
    <div className={`container ${styles.project}`}>
      <div className={styles.project__details}>
        <p>Project Name</p>
        <h1>{title}</h1>
        <p>Project Location</p>
        <h2>{location}</h2>
      </div>
      <div className={styles.project__map}>
        {map && <Image
          className={styles.project__map__img}
          src={map}
          height={340}
          width={700}
          alt={location}
          layout="intrinsic"
        />}
      </div>
    </div>
  )
}

export default ProjectLocation;
