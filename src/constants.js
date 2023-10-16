import bruchetta from "./images/bruchetta.svg";
import greekSalad from "./images/greek-salad.jpg";
import lemonDessert from "./images/lemon-dessert.jpg";
import AboutPage from './pages/AboutPage';
import OrderOnlinePage from './pages/OrderOnlinePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ReservationsPage from './pages/ReservationsPage';
import MenuPage from "./pages/MenuPage";
import ConfirmedBooking from "./components/ConfirmedBooking";


const navItems = [
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
        component: MenuPage
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

const routes = [
    ...navItems,
    {
        path: '/confirmed-booking',
        label: 'Confirmed Booking',
        component: ConfirmedBooking
    },
];

const menuItems = [
    {
        image: greekSalad,
        title: 'Greek Salad',
        price: '12.99',
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
        image: bruchetta,
        title: 'Bruchetta',
        price: '5.99',
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    },
    {
        image: lemonDessert,
        title: 'Lemon Dessert',
        price: '5.00',
        description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    },
];

const testimonialsItems = [
    {
        name: 'John Doe',
        title: 'CEO',
        photo: 'https://randomuser.me/api/portraits/men/3.jpg',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        name: 'Jane Doe',
        title: 'CTO',
        photo: 'https://randomuser.me/api/portraits/men/27.jpg',
        rating: 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        name: 'John Smith',
        title: 'COO',
        photo: 'https://randomuser.me/api/portraits/men/66.jpg',
        rating: 3,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        name: 'Jane Smith',
        title: 'CFO',
        photo: 'https://randomuser.me/api/portraits/women/11.jpg',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
];


export { menuItems, navItems, routes, testimonialsItems };
