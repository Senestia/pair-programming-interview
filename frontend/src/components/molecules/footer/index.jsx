import styles from './footer.module.css'

function Footer({ copyright, year }) {
  const currentYear = year || new Date().getFullYear()
  const copyrightText = copyright || `© ${currentYear} My App. All rights reserved.`

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.text}>{copyrightText}</p>
      </div>
    </footer>
  )
}

export default Footer

