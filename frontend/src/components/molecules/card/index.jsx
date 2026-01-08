import styles from './card.module.css'

function Card({ title, description, children, action }) {
  return (
    <div className={styles.card}>
      {title && (
        <h3 className={styles.title}>{title}</h3>
      )}
      {description && (
        <p className={styles.description}>{description}</p>
      )}
      {children && (
        <div className={styles.content}>{children}</div>
      )}
      {action && (
        <div className={styles.action}>{action}</div>
      )}
    </div>
  )
}

export default Card

