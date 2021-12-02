import Contact from '../src/components/Contact'
import About from '../src/components/About'
import HelloWorld from '../src/components/HelloWorld'

export const routes = [
    { path: '/', name: 'helloworld', component: HelloWorld},
    { path: '/about', name: 'about', component: About},
    { path: '/contact', name: 'contact', component: Contact}
]