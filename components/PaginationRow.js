import Link from 'next/link';
import styles from '../styles/components/PaginationRow.module.scss';

const PaginationRow = ({next, prev}) => {
  return (
    <div className={`container ${styles.pagination}`}>
      <div className={styles.pagination__prev}>
        <Link href={prev.url}>
          <a className={styles.pagination__subtitle}>Previous Project</a>
        </Link>
        <Link href={prev.url}>
          <a className={styles.pagination__link}>{prev.name}</a>
        </Link>
      </div>
      <div className={styles.pagination__next}>
        <Link href={next.url}>
          <a className={styles.pagination__subtitle}>Next Project</a>
        </Link>
        <Link href={next.url}>
          <a className={styles.pagination__link}>{next.name}</a>
        </Link>
      </div>
    </div>
  )
}

export default PaginationRow;
