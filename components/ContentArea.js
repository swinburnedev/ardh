import styles from '../styles/components/ContentArea.module.scss';

const ContentArea = ({title, content}) => (
  <div className={`${styles.content__area} container`}>
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
)

export default ContentArea;
