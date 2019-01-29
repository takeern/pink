import App from './view/index';

import Home from './component/Home';
import Call from './component/Call';
import Editorial from './component/Editorial';
import Issue from './component/Issue';
import Contact from './component/Contact';

const routes = [
    {
        path: '/',
        component: App,
        exact: false,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true,
            },
            {
                path: '/home',
                component: Home,
                exact: true,
            },
            {
                path: '/callForPapers',
                component: Call,
                exact: true,
            },
            {
                path: '/editorial',
                component: Editorial,
                exact: true,
            },
            {
                path: '/issues',
                component: Issue,
                exact: true,
            },
            {
                path: '/contact',
                component: Contact,
                exact: true,
            },
        ],
    },
];

export default routes;