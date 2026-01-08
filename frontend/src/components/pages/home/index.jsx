import styles from './home.module.css'
import TopicCard from '../../molecules/topic-card'

const topics = [
  {
    id: 1,
    title: 'Meteorite Types',
    description: 'Explore different classifications of meteorites including stony, iron, and stony-iron meteorites.',
    icon: '☄️',
    tags: ['Stony', 'Iron', 'Classification'],
    status: 'active',
    path: '/meteorite-types'
  },
  {
    id: 2,
    title: 'Space Debris & Meteorites',
    description: 'Explore the relationship between space debris and meteorites, and how their presence affects Earth and space activities.',
    icon: '🌍',
    tags: ['Debris', 'Meteorites', 'Space Activities'],
    status: 'active',
    path: '/space-debris-meteorites'
  },
  {
    id: 3,
    title: 'Space Dust & Particles',
    description: 'Discover micrometeorites, cosmic dust, and interplanetary particles that reach Earth daily.',
    icon: '✨',
    tags: ['Micrometeorites', 'Cosmic Dust', 'Particles'],
    status: 'comingSoon',
    path: '/space-dust-particles'
  },
  {
    id: 4,
    title: 'Meteor Showers',
    description: 'Understand annual meteor showers, their origins, and when to observe them in the night sky.',
    icon: '🌠',
    tags: ['Annual Event', 'Observation', 'Showers'],
    status: 'comingSoon',
    path: '/meteor-showers'
  },
  {
    id: 5,
    title: 'Asteroid Origins',
    description: 'Study the formation and composition of asteroids and their relationship to meteorites.',
    icon: '🪨',
    tags: ['Asteroids', 'Formation', 'Composition'],
    status: 'comingSoon',
    path: '/asteroid-origins'
  },
  {
    id: 6,
    title: 'Research & Collection',
    description: 'Learn about meteorite identification, collection methods, and scientific research techniques.',
    icon: '🔬',
    tags: ['Research', 'Collection', 'Identification'],
    status: 'comingSoon',
    path: '/research-collection'
  }
]

function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Starfall Ledger
          </h1>
          <p className={styles.heroSubtitle}>
            Your comprehensive guide to understanding meteorites, cosmic dust, and space particles
          </p>
          <p className={styles.heroDescription}>
            Explore the fascinating world of extraterrestrial materials that have journeyed through space 
            to reach Earth. From massive meteorites to microscopic space particles, discover the science, 
            history, and impact of these cosmic visitors.
          </p>
        </div>
      </section>

      <section className={styles.topics}>
        <h2 className={styles.topicsTitle}>Explore Topics</h2>
        <div className={styles.topicsGrid}>
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home

