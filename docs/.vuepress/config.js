import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
// 导航栏路由
import navRoutes from './routes/index.js'
export default defineUserConfig({
  base: '/',
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: navRoutes,
  })
})