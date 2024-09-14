import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: '/',
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
        {text: '简介',link: '/front/ts',},
        {
        text: '分类',
            children: [
            {
            text: '建站相关',
            children: ['/server/php/', '/server/python/'],
            },
           {
            text: '个人随笔',
            children: ['/personal/game/', '/personal/pc/'],
            },
            ],
        },

      {
        text: '分类2',
        children: [
          {
            text: '建站相关2',
            link: '/server2/',
            activeMatch: '/',   // 该元素将一直处于激活状态
          },
          {
            text: '个人随笔2',  
            link: '/personal2/',
            activeMatch: '^/foo/',  // 该元素在当前路由路径是 /foo/ 开头时激活, 支持正则表达式
          },
        ],
      },
    ],
  }),

    

})