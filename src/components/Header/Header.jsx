import './Header.scss';
import Logo from '../../assets/images/Pressa.png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const { pathname } = useLocation();
    if (pathname == '/elonberish') {
        document.querySelector('.button')?.classList.add('hidden');
    } else {
        document.querySelector('.button')?.classList.remove('hidden');
    }
    return (
        <div className="header">
            <div className="header-top">
                <div className="header-top__left">
                    <img src={Logo} alt="logo" width={122} height={30} />
                    <p>Yordam</p>
                    <Link className="text" to="/loyihahaqida">
                        Loyiha haqida
                    </Link>
                </div>
                <Link className="button" to="/elonberish">
                    + e'lon berish
                </Link>
            </div>
        </div>
    );
};

export default Header;
