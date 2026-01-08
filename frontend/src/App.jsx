import { Outlet } from 'react-router-dom'
import styles from './App.module.css'
import Navigation from './components/molecules/navigation'
import Footer from './components/molecules/footer'

function App() {
  return (
    <div className={styles.app}>
      <Navigation />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
