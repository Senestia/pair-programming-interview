import { Link } from 'react-router-dom'
import styles from './topic-card.module.css'

function TopicCard({ topic }) {
  const { icon, title, description, tags, status, path } = topic

  return (
    <div className={styles.topicCard}>
      <div className={styles.topicHeader}>
        <div className={styles.topicIcon}>{icon}</div>
        <span className={`${styles.statusBadge} ${styles[status] || ''}`}>
          {status === 'active' ? 'Active' : 'Coming Soon'}
        </span>
      </div>
      <h3 className={styles.topicTitle}>{title}</h3>
      <p className={styles.topicDescription}>{description}</p>
      {tags && (
        <div className={styles.topicTags}>
          {tags.map((tag, i) => (
            <span key={i} className={styles.topicTag}>{tag}</span>
          ))}
        </div>
      )}
      {status === 'active' ? (
        <Link to={path} className={styles.topicButton}>
          Explore
        </Link>
      ) : (
        <button 
          disabled 
          className={`${styles.topicButton} ${styles.disabled}`}
          aria-label="Coming soon"
        >
          Coming Soon
        </button>
      )}
    </div>
  )
}

export default TopicCard

