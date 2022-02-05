import './Post.scss';

import Photo from '../../assets/images/postImage.png';
import Copy from '../lib/svgs/Copy';
import Facebook from '../lib/svgs/Facebook';
import Telegram from '../lib/svgs/Telegram';
import Instagram from '../lib/svgs/Instagram';
import Twitter from '../lib/svgs/Twitter';
import { Link } from 'react-router-dom';
import Eye from '../lib/svgs/Eye';
import Comment from '../lib/svgs/Comment';

const Post = () => {
    return (
        <>
            <div>
                <div className="post">
                    <div className="container">
                        <div className="post__container">
                            <div className="post__left">
                                <div className="post__card">
                                    <div className="post__card--body">
                                        <div className="post_date">
                                            <div className="post__date--time">
                                                10:00
                                            </div>
                                            <div className="post__date--date">
                                                14 Fevral
                                            </div>
                                        </div>
                                        <div className="post__format">
                                            Online
                                        </div>
                                        <div className="post__speaker">
                                            <div className="post__speaker--name">
                                                Janizakov Abbosjon
                                            </div>
                                            <div className="post__speaker--detail">
                                                Speaker
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post__card--footer">
                                        <div className="post__card--social">
                                            <ul className="post__card--list">
                                                <li className="post__card--items">
                                                    <Link
                                                        className="post__card--links"
                                                        to={{
                                                            pathname:
                                                                'https://www.facebook.com/',
                                                        }}
                                                        target="_blank"
                                                    >
                                                        <Facebook />
                                                    </Link>
                                                </li>
                                                <li className="post__card--items">
                                                    <Link
                                                        className="post__card--links"
                                                        to={{
                                                            pathname:
                                                                'https://www.instagram.com/',
                                                        }}
                                                        target="_blank"
                                                    >
                                                        <Instagram />
                                                    </Link>
                                                </li>
                                                <li className="post__card--items">
                                                    <Link
                                                        className="post__card--links"
                                                        to={{
                                                            pathname:
                                                                'https://tweeter.com',
                                                        }}
                                                        target="_blank"
                                                    >
                                                        <Telegram />
                                                    </Link>
                                                </li>
                                                <li className="post__card--items">
                                                    <Link
                                                        className="post__card--links"
                                                        to={{
                                                            pathname:
                                                                'https://twitter.com',
                                                        }}
                                                        target="_blank"
                                                    >
                                                        <Twitter />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="post__card--copy">
                                            <button
                                                className="post__card--btn"
                                                type="button"
                                                aria-label="Copy to clipboard"
                                                aria-hidden="true"
                                            >
                                                <Copy />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="post__right">
                                <div className="post__body">
                                    <div className="post__head">
                                        Ikrom Sharif bilan{' '}
                                        <q>Najot taʼlimdadir</q> mavzusida
                                        suhbat boʻlib oʻtadi
                                    </div>
                                    <div className="post__main">
                                        <div className="post__intro">
                                            It has survived not only five
                                            centuries, but also the leap into
                                            electronic typesetting, remaining
                                            essentially unchanged.
                                        </div>
                                        <picture>
                                            <img
                                                src={Photo}
                                                alt="lorem"
                                                width={709}
                                                height={565}
                                            />
                                        </picture>
                                        <div className="post__content">
                                            <div className="post__part">
                                                It has survived not only five
                                                centuries, but also the leap
                                                into electronic typesetting,
                                                remaining essentially unchanged.
                                                It was popularised in the 1960s
                                                with the release of Letraset
                                                sheets containing Lorem Ipsum
                                                passages, and more recently with
                                                desktop publishing software like
                                                Aldus PageMaker including
                                                versions of Lorem Ipsum.
                                            </div>
                                            <br />
                                            <div className="post__part">
                                                Contrary to popular belief,
                                                Lorem Ipsum is not simply random
                                                text. It has roots in a piece of
                                                classical Latin literature from
                                                45 BC, making it over 2000 years
                                                old.
                                            </div>
                                            <br />
                                            <div className="post__part">
                                                McClintock, a Latin professor at
                                                Hampden-Sydney College in
                                                Virginia, looked up one of the
                                                more obscure
                                                <a
                                                    href="#"
                                                    className="post__part--Link"
                                                >
                                                    Latin words, consectetur,
                                                </a>
                                                from a Lorem Ipsum passage, and
                                                going through the cites of the
                                                word in classical literature,
                                                discovered the undoubtable
                                                source.
                                            </div>
                                        </div>
                                        <div className="post__footer">
                                            <div className="post__seen">
                                                <div className="post__seen--icon">
                                                    <Eye />
                                                </div>
                                                167
                                            </div>
                                            <div className="post__comment">
                                                <div className="post__comment--icon">
                                                    <Comment />
                                                </div>
                                                45 Izohlar
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider">
                    <div className="container">
                        <div className="slider__container">
                            <div className="slider__left">
                                <div className="slider_head" />
                                <div className="slider__picture" />
                            </div>
                            <div className="slider__right">
                                <div className="slider_head" />
                                <div className="slider__picture" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;
