import Home from '~/pages/Home';
import Feed from '~/pages/Feed';
import Library from '~/pages/Library';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/feed', component: Feed },
    { path: '/library', component: Library },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
