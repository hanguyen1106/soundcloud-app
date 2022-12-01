import Feed from '~/pages/Feed';
import Library from '~/pages/Library';
import Landing from '~/pages/Landing';
import Discover from '~/pages/Discover';

const publicRoutes = [
    { path: '/', component: Landing, layout: null },
    { path: '/feed', component: Feed },
    { path: '/library', component: Library },
    { path: '/discover', component: Discover },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
