import HelloWorldVue from './components/HelloWorld.vue'
import WelcomeItemVue from './components/WelcomeItem.vue'
import TheWelcomeVue from './components/TheWelcome.vue'

// import '@unocss/reset/tailwind-compat.css'
// 文档告诉使用者引入到自己的项目入口文件

import 'virtual:uno.css'

// 不要打包进去
// import 'element-plus/dist/index.css'

export { HelloWorldVue, WelcomeItemVue, TheWelcomeVue }
