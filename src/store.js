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
    },
    main:{
        ourServices:{
            cards:[
                {
                    image: '../assets/img/Group-247.png',
                    title: 'Data Analysis',
                    text: 'When, while lovely valley teems with vapor around meand the meridian sun strikes the upper surface.'
                },
                {
                    image: '../assets/img/Group-567.png',
                    title: 'SEO Optimization',
                    text: 'When, while lovely valley teems with vapor around meand the meridian sun strikes the upper surface.'
                },
                {
                    image: '../assets/img/Group-538.png',
                    title: 'Security Data',
                    text: 'When, while lovely valley teems with vapor around meand the meridian sun strikes the upper surface.'
                },
                {
                    image: '../assets/img/Group-566.png',
                    title: 'Branding Strategy',
                    text: 'When, while lovely valley teems with vapor around meand the meridian sun strikes the upper surface.'
                }
            ]
        },
        portfolio:[
            {
                image:'../assets/img/DRY-1-790x576.jpg',
                title: 'Purinky Products',
                subtitle: 'Digital Experience'
            },
            {
                image:'../assets/img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
                title: 'Satisfy Poster',
                subtitle: 'Branding Strategy'
            },
            {
                image:'../assets/img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
                title: 'Satisfy Poster',
                subtitle: 'Branding Strategy'
            },
            {
                image:'../assets/img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
                title: 'Satisfy Poster',
                subtitle: 'Branding Strategy'
            },
            {
                image:'../assets/img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
                title: 'Satisfy Poster',
                subtitle: 'Branding Strategy'
            },

        ]
    }
});