import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './components/pages/home'
import MeteoriteTypes from './components/pages/meteorite-types'
import SpaceDebrisMeteorites from './components/pages/space-debris-meteorites'

// Sample meteorite types data (in a real app, this would come from an API)
import meteoriteTypesData from './data/meteoriteTypes.json'
import spaceObjectsData from './data/spaceObjects.json'

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
  )
}

const NotFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'meteorite-types',
        element: <MeteoriteTypes meteoriteTypes={meteoriteTypesData} />,
      },
      {
        path: 'space-debris-meteorites',
        element: <SpaceDebrisMeteorites spaceObjects={spaceObjectsData} />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

