import MeteoriteCard from '../../molecules/meteorite-card'
import styles from './space-debris-meteorites.module.css'

function SpaceDebrisMeteorites({ spaceObjects = [] }) {
  return (
    <div className={styles.page}>
      <section className={styles.header}>
        <h1 className={styles.title}>Space Debris & Meteorites</h1>
        <p className={styles.subtitle}>
          Explore the relationship between space debris and meteorites, and how their presence affects Earth and space activities
        </p>
      </section>

      <section className={styles.content}>
        {spaceObjects.length === 0 ? (
          <div className={styles.empty}>
            <p>No space objects available.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {spaceObjects.map((object) => (
              <MeteoriteCard key={object.id} spaceObject={object} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default SpaceDebrisMeteorites

