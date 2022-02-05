import './Footer.scss';
import Logo from '../../assets/images/Pressa.png';
import { Link } from 'react-router-dom';

//images
import Facebook from '../../components/lib/svgs/Facebook';
import Telegram from '../../components/lib/svgs/Telegram';
import Twitter from '../../components/lib/svgs/Twitter';
import Instagram from '../../components/lib/svgs/Instagram';

const Footer = () => {
    const Scroll = () => {
        window.scrollTo({ top: 0 });
    };

    return (
        <div className="footer">
            <div className="footer-bottom">
                <Link onClick={Scroll} to="/">
                    <img
                        className="footer-bottom__logo"
                        src={Logo}
                        alt="logo"
                        width={122}
                        height={30}
                    />
                </Link>
                <div>
                    <Link className="footer-bottom__link" to="/">
                        Biz haqimizda
                    </Link>
                    <Link className="footer-bottom__link" to="/">
                        Savol va javoblar
                    </Link>
                    <Link className="footer-bottom__tel" to="/">
                        +99891 483-79-78
                    </Link>
                </div>
                <div className="footer-bottom__social">
                    <Link
                        className="media"
                        to={{
                            pathname: 'https://www.facebook.com/',
                        }}
                        target="_blank"
                    >
                        <Facebook />
                    </Link>
                    <Link
                        className="media"
                        to={{
                            pathname: 'https://www.instagram.com/',
                        }}
                        target="_blank"
                    >
                        <Instagram />
                    </Link>
                    <Link
                        className="media"
                        to={{
                            pathname: 'https://tweeter.com',
                        }}
                        target="_blank"
                    >
                        <Twitter />
                    </Link>
                    <Link
                        className="media"
                        to={{
                            pathname: 'https://twitter.com',
                        }}
                        target="_blank"
                    >
                        <Telegram />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
