import './Footer-top.scss';
import FooterImg from '../../assets/images/footerimg.png';
import { Link } from 'react-router-dom';

const FooterTop = () => {
    const Scroll = () => {
        window.scrollTo({ top: 0 });
    };
    return (
        <div className="footer-top">
            <div className="footer-top__wrapper">
                {Array.from(new Array(2)).map((e, i) => (
                    <div key={i} className="footer-top-post__wrapper">
                        <h3 className="footer-top-post__title">
                            Ikrom Sharif bilan “Najot taʼlimdadir” mavzusida
                            suhbat boʻlib oʻtadi
                        </h3>
                        <div className="footer-top-post__inner">
                            <Link
                                onClick={Scroll}
                                className="footer-top-post__link"
                                to={`/elon/${i}`}
                            >
                                batafsil
                            </Link>
                            <img
                                className="footer-top-post__img"
                                src={FooterImg}
                                alt=""
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FooterTop;
