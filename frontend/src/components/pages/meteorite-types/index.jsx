import Card from '../../molecules/card'
import styles from './meteorite-types.module.css'

function MeteoriteTypes({ meteoriteTypes = [] }) {
  return (
    <div className={styles.page}>
      <section className={styles.header}>
        <h1 className={styles.title}>Meteorite Types</h1>
        <p className={styles.subtitle}>
          Explore the different classifications of meteorites and their unique characteristics
        </p>
      </section>

      <section className={styles.content}>
        {meteoriteTypes.length === 0 ? (
          <div className={styles.empty}>
            <p>No meteorite types available.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {meteoriteTypes.map((type) => (
              <Card
                key={type.id}
                title={type.name}
                description={type.description}
              >
                <div className={styles.meta}>
                  <span className={styles.origin}>
                    <strong>Origin:</strong> {type.origin}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default MeteoriteTypes

