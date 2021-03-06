import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import RadioDemo from './components/RadioDemo.vue'
import { h } from '@vue/runtime-core'
import Markdown from './components/Markdown.vue'
import intro from './markdown/intro.md';
import install from './markdown/install.md';
import getStart from './markdown/get-start.md';
import CollapseDemo from './components/CollapseDemo.vue';
const md = (string) => h(Markdown, {content: string, key:string} )


const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: '', redirect: "/doc/intro"},
        {path: 'intro', component: md(intro)},
        {path: 'get-start', component: md(getStart)},
        {path:'install', component: md(install)},
        {path:'switch', component: SwitchDemo},
        {path:'button', component: ButtonDemo},
        {path:'dialog', component: DialogDemo},
        {path:'tabs', component: TabsDemo},
        {path:'radios', component: RadioDemo},
        {path:'collapse', component: CollapseDemo},
      ]
    },
  ]
})