import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: '/',
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
        {
        text: '前端笔记',
            children: [
              {
                text: 'TypeScript',  
                link: '/docs/ts',
                activeMatch: '^/docs/ts',  // 该元素在当前路由路径是 /docs/ 开头时激活, 支持正则表达式
              },
              {
                text: 'Vue3',  
                link: '/docs/vue3',
                activeMatch: '^/docs/vue3',  // 该元素在当前路由路径是 /docs/ 开头时激活, 支持正则表达式
              },
            ],
        },

      {
        text: '后端笔记',
        children: [
          {
            text: 'JavaSE',
            link: '/docs/javase',
            activeMatch: '/docs/javase'
          },
          {
            text: 'Spring',  
            link: '/docs/spring',
            activeMatch: '^/docs/spring',
          },
          {
            text: 'SpringMVC',
            link: '/docs/springmvc',
            activeMatch: '/docs/springmvc'
          }
        ],
      },
      {
        text: '项目相关',
        children: [],
      },
    ],
  }),

    

})