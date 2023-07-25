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
                image:'../assets/img/84316050-0af0-49db-a53a-241d47ddad0e-2-790x576.jpg',
                title: 'Modern Library',
                subtitle: 'Digital Experience'
            },
            {
                image:'../assets/img/8wa60okr-1-790x576.jpg',
                title: 'Basket of Flower on table',
                subtitle: 'Branding Strategy'
            },
            {
                image:'../assets/img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
                title: 'Satisfy Poster',
                subtitle: 'Branding Strategy'
            },

        ],
        priceList:{
            cards:[
                {
                    title:'Designing',
                    subtitle: 'PROCESS',
                    price: '40',
                    cadence: 'Per Month',
                    services:[
                        {
                            bold: 'Creative',
                            thin:  'Design Enabled'
                        },
                        {
                            bold: 'Vibrant',
                            thin:  'Color Usage'
                        },
                        {
                            bold: 'Eye',
                            thin:  'Catching Design'
                        },
                        {
                            bold: 'Extreme',
                            thin:  'Typography'
                        },
                        {
                            bold: 'Exceptional',
                            thin:  'Design'
                        }
                    ],
                    colorSet: 'light',
                },
                {
                    title:'Developing',
                    subtitle: 'PRODUCT',
                    price: '60',
                    cadence: 'Per Month',
                    services:[
                        {
                            bold: 'Creative',
                            thin:  'Design Enabled'
                        },
                        {
                            bold: 'Vibrant',
                            thin:  'Color Usage'
                        },
                        {
                            bold: 'Eye',
                            thin:  'Catching Design'
                        },
                        {
                            bold: 'Extreme',
                            thin:  'Typography'
                        },
                        {
                            bold: 'Exceptional',
                            thin:  'Design'
                        }
                    ],
                    colorSet: 'primary',
                },
                {
                    title:'Supporting',
                    subtitle: 'CLIENTS',
                    price: '80',
                    cadence: 'Per Month',
                    services:[
                        {
                            bold: 'Creative',
                            thin:  'Design Enabled'
                        },
                        {
                            bold: 'Vibrant',
                            thin:  'Color Usage'
                        },
                        {
                            bold: 'Eye',
                            thin:  'Catching Design'
                        },
                        {
                            bold: 'Extreme',
                            thin:  'Typography'
                        },
                        {
                            bold: 'Exceptional',
                            thin:  'Design'
                        }
                    ],
                    colorSet: 'light',
                }
            ]
        },
        blog:{
            cards:[
                {
                    bgImage: '../assets/img/headway-537308-unsplash-1380x703.jpg',
                    date: 'April 21, 2019',
                    author: 'by Paul',
                    title: 'Amazon gets CCI nod to acquire 49% stake in',
                    text: 'When, while lovely valley teems with vapor around meand the meridian sun s ...',
                    cardWidth: 'w-1/2'
                },
                {
                    bgImage: '',
                    date: 'April 21, 2019',
                    author: 'by Paul',
                    title: 'Clearing corporations get SEBI nod to invest in overnight funds',
                    text: 'When, while lovely valley teems with vapor around meand the meridian sun s ...',
                    cardWidth: 'w-1/4'   
                },
                {
                    bgImage: '',
                    date: 'April 21, 2019',
                    author: 'by Paul',
                    title: 'Shabnam Dhillion, wife of RSSB chief Gurinder Dhillion, passes away in London',
                    text: 'When, while lovely valley teems with vapor around meand the meridian sun s ...',
                    cardWidth: 'w-1/4'   
                }
            ]
        }
    }
});