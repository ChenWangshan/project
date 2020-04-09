import Loadable from 'react-loadable';
import Loading from "../components/Common/Loading";

const Home = Loadable({
    loader: () => import('../components/Home/Home'),
    loading:Loading
});

const routeConfig = [
    { 
        path: '/',
        name: 'Home',
        component: Home,
        auth: false,
    }
]

export default routeConfig;
