
// import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/components/ProjectLocation.module.scss';

const ProjectLocation = ({location, map, title}) => {
  // TODO test & remove layout
  // const [layout, setLayout] = useState('intrinsic');
  // useEffect(() => {
  //   setLayout(window.innerWidth > 750 ? 'fill' : 'intrinsic');
  // });
  return (
  <div className={styles.project}>
    <div className={styles.project__details}>
      <p>Project Name</p>
      <h1>{title}</h1>
      <p>Project Location</p>
      <h2>{location}</h2>
    </div>
    <div className={styles.project__map}>
      {map && <Image
        src={map}
        height={570}
        width={1177}
        alt={location}
      />}
    </div>
  </div>
)
      }

export default ProjectLocation;
