import demoBlock from "vitepress-theme-demoblock";
const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用组件',
      children: [
        { text: 'Button', link: '/components/button/' },
      ]
    },
    { text: '反馈' },
  ]
}
const config = {
  title: "BrownEaredUI",
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md: any) => {
      const { demoBlockPlugin } = demoBlock;
      md.use(demoBlockPlugin);
    }
  }
}
export default config
