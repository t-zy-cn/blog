import comp from "D:/cs/blog/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"博客主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"Blog\",\"icon\":\"house\",\"title\":\"博客主页\",\"heroImage\":\"https://theme-hope-assets.vuejs.press/logo.svg\",\"heroText\":\"你博客的名称\",\"heroFullScreen\":true,\"tagline\":\"你可以在这里放置你的口号与标语\",\"projects\":[{\"icon\":\"folder-open\",\"name\":\"项目名称\",\"desc\":\"项目详细描述\",\"link\":\"https://你的项目链接\"},{\"icon\":\"link\",\"name\":\"链接名称\",\"desc\":\"链接详细描述\",\"link\":\"https://链接地址\"},{\"icon\":\"book\",\"name\":\"书籍名称\",\"desc\":\"书籍详细描述\",\"link\":\"https://你的书籍链接\"},{\"icon\":\"newspaper\",\"name\":\"文章名称\",\"desc\":\"文章详细描述\",\"link\":\"https://你的文章链接\"},{\"icon\":\"user-group\",\"name\":\"伙伴名称\",\"desc\":\"伙伴详细介绍\",\"link\":\"https://你的伙伴链接\"},{\"icon\":\"https://theme-hope-assets.vuejs.press/logo.svg\",\"name\":\"自定义项目\",\"desc\":\"自定义详细介绍\",\"link\":\"https://你的自定义链接\"}],\"footer\":\"自定义你的页脚文字\",\"description\":\"这是一个博客主页的案例。 要使用此布局，你应该在页面前端设置 layout: Blog 和 home: true。 相关配置文档请见 博客主页。\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"博客主页\\\",\\\"description\\\":\\\"这是一个博客主页的案例。 要使用此布局，你应该在页面前端设置 layout: Blog 和 home: true。 相关配置文档请见 博客主页。\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"博客主页\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"这是一个博客主页的案例。 要使用此布局，你应该在页面前端设置 layout: Blog 和 home: true。 相关配置文档请见 博客主页。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.81,\"words\":243},\"filePathRelative\":\"README.md\",\"excerpt\":\"<p>这是一个博客主页的案例。</p>\\n<p>要使用此布局，你应该在页面前端设置 <code>layout: Blog</code> 和 <code>home: true</code>。</p>\\n<p>相关配置文档请见 <a href=\\\"https://theme-hope.vuejs.press/zh/guide/blog/home.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">博客主页</a>。</p>\\n\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
