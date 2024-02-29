
export default () => {

    let paths = [
        {
            'Name': 'Home',
            'Icon': 'mdi-home',
            'Path':'/',
            'SubNav':[
                {
                    'Name': 'Home',
                    'icon': '',
                    'Path': '/'
                },
                {
                    'Name': 'My Blogs',
                    'icon': '',
                    'Path': '/blogs'
                },
                {
                    'Name': 'About Me',
                    'icon': '',
                    'Path': '/about'
                },
                {
                    'Name': 'Contact Me',
                    'icon': '',
                    'Path': '/contact'
                },
                {
                    'Name': 'Support',
                    'icon': '',
                    'Path': '/support'
                }
            ]
        },
        {
            'Name': 'Music',
            'Icon': 'mdi-music-clef-treble',
            'Path':'/music',
            'SubNav':[
                {
                    'Name': 'Music Home',
                    'icon': '',
                    'Path': '/music'
                },
                {
                    'Name': 'Compositions',
                    'icon': '',
                    'Path': '/music/compositions'
                },
                {
                    'Name': 'Composers',
                    'icon': '',
                    'Path': '/music/composers'
                },
                {
                    'Name': 'Musicians',
                    'icon': '',
                    'Path': '/music/musicians'
                }
            ]
        },
        {
            'Name': 'Art',
            'Icon': 'mdi-palette',
            'Path':'/art',
            'SubNav':[
                {
                    'Name': 'Art Home',
                    'icon': '',
                    'Path': '/art'
                },
                {
                    'Name': 'Arts',
                    'icon': '',
                    'Path': '/art/arts'
                },
                {
                    'Name': 'Artists',
                    'icon': '',
                    'Path': '/art/artists'
                }
            ]
        },
        {
            'Name': 'Literature',
            'Icon': 'mdi-book-open-page-variant',
            'Path':'/literature',
            'SubNav':[
                {
                    'Name': 'Literature Home',
                    'icon': '',
                    'Path': '/literature'
                },
                {
                    'Name': 'Literatures',
                    'icon': '',
                    'Path': '/literature/literatures'
                },
                {
                    'Name': 'Authors',
                    'icon': '',
                    'Path': '/literature/authors'
                },
            ]
        },

    ]

    return {paths}

}

