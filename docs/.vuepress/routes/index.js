import frontRoutes from './front.js'
import javaRoutes from './java.js'
import pythonRoutes from './python.js'

const navRoutes = [
  {
    text: '前端课件',
    children: frontRoutes
  },

  {
    text: 'Java课件',
    children: javaRoutes
  },
  {
    text: 'Python课件',
    children: pythonRoutes
  }
]

export default navRoutes