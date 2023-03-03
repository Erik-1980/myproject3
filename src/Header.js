import {Link} from 'react-router-dom';
import LoginForm from './input';

export default function Header() {
    const storedData = window.localStorage.getItem('cartItems');
    const cartItems = JSON.parse(storedData);
    let number_of_products = cartItems?.length;

    return (
        <header>
            <div className="header">
                    <h3>RELQ<br/>STORE</h3>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/catalog'>Сatalog</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <LoginForm />
                        <Link className='basket' to='/basket'><img src="./image/basket.jpeg" width='3%'/><p>{number_of_products}</p></Link>
                    </ul> 
            </div>
            <div><h1 className="containerheader">WELCOME TO HOME APPLIANCES CENTER</h1></div>
            <h1 className='logoheader'>RELQ</h1>
        </header>
    );
}
