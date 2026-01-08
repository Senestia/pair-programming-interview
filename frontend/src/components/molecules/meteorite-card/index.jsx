import Card from '../card'
import styles from './meteorite-card.module.css'

function MeteoriteCard({ spaceObject }) {
  if (!spaceObject) return null

  return (
    <Card
      title={spaceObject.name}
      description={spaceObject.description}
    >
      <div className={styles.meta}>
        <div className={styles.metaRow}>
          <span className={styles.label}>Type:</span>
          <span className={styles.value}>{spaceObject.type}</span>
        </div>
        <div className={styles.metaRow}>
          <span className={styles.label}>Mass:</span>
          <span className={styles.value}>{spaceObject.mass_g.toLocaleString()} g</span>
        </div>
        {spaceObject.composition && spaceObject.composition.length > 0 && (
          <div className={styles.metaRow}>
            <span className={styles.label}>Composition:</span>
            <div className={styles.composition}>
              {spaceObject.composition.map((comp, i) => (
                <span key={i} className={styles.tag}>{comp}</span>
              ))}
            </div>
          </div>
        )}
        <div className={styles.metaRow}>
          <span className={styles.label}>Radioactive:</span>
          <span className={`${styles.value} ${spaceObject.is_radioactive ? styles.radioactive : styles.safe}`}>
            {spaceObject.is_radioactive ? 'Yes' : 'No'}
          </span>
        </div>
      </div>
    </Card>
  )
}

export default MeteoriteCard

