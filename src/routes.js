
import Contact from '../src/components/Contact'
import About from '../src/components/About'
import HelloWorld from '../src/components/HelloWorld'
import TodoList from '../src/components/TodoList'

export const routes = [
    { path: '/helloworld', name: 'helloworld', component: HelloWorld},
    { path: '/about', name: 'about', component: About},
    { path: '/contact', name: 'contact', component: Contact},
    { path: '/todolist', name: 'todolist', component: TodoList}
]