import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png'

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: true,
            activeRoute: null,
            showItem:false,
        };
    }

    toggleSidebar = () => {
        this.setState((state) => ({ isOpened: !state.isOpened }) );
    };

    goToRoute = (path) => {
        console.log(`going to "${path}"`);
        this.setState({activeRoute: path})
    };

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({ showItem: true });
    //     }, 300);
    // }

    render() {
        const { isOpened, activeRoute } = this.state;
        const containerClassnames = classnames('sidebar', { opened: isOpened });
        return (
            <div className={ containerClassnames }>
                <div className='sidebar__logo-container'>
                    <img
                        className='sidebar__logo'
                        src={ logo }
                        alt="TensorFlow logo"
                    />
                    {isOpened && <span className='sidebar__title'>TensorFlow</span>}
                    <button className='sidebar__switch' onClick={ this.toggleSidebar }>
                        <FontAwesomeIcon icon={ isOpened ? 'angle-left' : 'angle-right' } color='#9DA8B8' size='xs'/>
                    </button>
                </div>

                <div className='sidebar__route-container'>
                    {
                        routes.map((route) => (
                            <div className={`sidebar__route-item ${activeRoute === route.path ? 'ba' : ''}`} key={ route.title } onClick={ () => this.goToRoute(route.path) }>
                                <FontAwesomeIcon className='sidebar__icon' icon={ route.icon } size='xs' color='#808080'/>
                                <span className='sidebar__link-name'>{ route.title }</span>
                            </div>
                        ))
                    }
                </div>

                <div className='sidebar__route-container sidebar__route-container_type_low'>
                    {
                        bottomRoutes.map((route) => (
                            <div className={`sidebar__route-item sidebar__route-item_type_low ${activeRoute === route.path ? 'ba' : ''}`} key={ route.title } onClick={ () => this.goToRoute(route.path) }>
                                <FontAwesomeIcon className='sidebar__icon' icon={ route.icon } size='xs' color='#808080'/>
                                <span className='sidebar__link-name'>{ route.title }</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
