import Link from 'next/link';
import styles from '../styles/components/PaginationRow.module.scss';

const PaginationRow = ({next, prev}) => {
  return (
    <div className={`container ${styles.pagination}`}>
      <div className={styles.pagination__prev}>
        <p>Previous Project</p>
        <Link href={prev.url}>
          <a>{prev.name}</a>
        </Link>
      </div>
      <div className={styles.pagination__next}>
        <p>Next Project</p>
        <Link href={next.url}>
          <a>{next.name}</a>
        </Link>
      </div>
    </div>
  )
}

export default PaginationRow;
