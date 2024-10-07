import frontRoutes from './front.js'
import javaRoutes from './java.js'
import pythonRoutes from './python.js'

const navRoutes = [
  {
    text: '首页',
    link: '/'
  },
  {
    text: '前端笔记',
    children: frontRoutes
  },

  {
    text: 'Java笔记',
    children: javaRoutes
  },
  {
    text: 'Python笔记',
    children: pythonRoutes
  }
]

export default navRoutes