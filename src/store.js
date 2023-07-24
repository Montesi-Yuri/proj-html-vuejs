import { reactive } from 'vue'

export const store = reactive({
    header:{
        links:[
            {
                name: 'Home',
                active: true,
            },
            {
                name: 'About',
                active: false,
            },
            {
                name: 'Services',
                active: false,
            },
            {
                name: 'Blog',
                active: false,
            },
            {
                name: 'Contact',
                active: false,
            },
            {
                name: 'Portfolio',
                active: false,
            },
        ],
        activeLink: 0,
            
    }
});