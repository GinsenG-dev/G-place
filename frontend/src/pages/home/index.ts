import HomePage from './ui/HomePage.vue'

export function getHomeRouter(){
    return [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        }
    ]
}