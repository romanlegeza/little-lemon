import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ReservationsPage from './pages/ReservationsPage';
import OrderOnlinePage from './pages/OrderOnlinePage';
import LoginPage from './pages/LoginPage';


const menuItems = [
    {
        path: '/',
        label: 'Home',
        component: HomePage
    },
    {
        path: '/about',
        label: 'About',
        component: AboutPage
    },
    {
        path: '/menu',
        label: 'Menu',
        component: AboutPage
    },
    {
        path: '/reservations',
        label: 'Reservations',
        component: ReservationsPage
    },
    {
        path: '/order-online',
        label: 'Order Online',
        component: OrderOnlinePage
    },
    {
        path: '/login',
        label: 'Login',
        component: LoginPage
    },
];

export default menuItems;