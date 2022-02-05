import { useRef, useState } from 'react';
import Calendar from '../Calendar/Calendar';
import './Navbar.scss';

const Navbar = () => {
    const [category, setCategory] = useState('Information Technology');
    const [event, setEvent] = useState('Offline');
    window.onclick = function (event) {
        if (
            event.target == document.querySelector('.first-drop') ||
            event.target == document.querySelector('.drop') ||
            event.target == document.querySelector('.select')
        ) {
            document.querySelector('.first-drop').classList.toggle('unhidden');
        } else
            document.querySelector('.first-drop').classList.remove('unhidden');
    };
    const firstSpan = useRef();
    const secondSpan = useRef();

    const handleCategory = (e) => {
        setCategory(e.target.textContent);
    };

    const handleEvent = () => {
        if (document.querySelectorAll('.navbar-span')[0].matches('.active')) {
            document
                .querySelectorAll('.navbar-span')[0]
                .classList.remove('active');
            document
                .querySelectorAll('.navbar-span')[1]
                .classList.add('active');
        } else {
            document
                .querySelectorAll('.navbar-span')[1]
                .classList.remove('active');
            document
                .querySelectorAll('.navbar-span')[0]
                .classList.add('active');
        }
        setEvent(document.querySelector('.active').textContent);
    };

    return (
        <>
            <ul className="navbar">
                <li className="navbar-list">
                    <p className="navbar-title">Sana va vaqt</p>
                    <Calendar />
                </li>
                <li className="navbar-list">
                    <p className="navbar-title">Kategoriya</p>
                    <div className="navbar-selects select">
                        <span className="drop">{category}</span>
                        <ul className="first-drop ">
                            <li className="first-drop__menu">
                                <span>Dasturlash</span>
                                <ul className="second-drop">
                                    <li
                                        value="Web dizayn"
                                        className="second-drop__menu"
                                        onClick={handleCategory}
                                    >
                                        Web dizayn
                                    </li>
                                    <li
                                        className="second-drop__menu"
                                        value="Grafik dizayn"
                                        onClick={handleCategory}
                                    >
                                        Grafik dizayn
                                    </li>
                                    <li
                                        className="second-drop__menu"
                                        value="Moushn dizayn"
                                        onClick={handleCategory}
                                    >
                                        Moushn dizayn
                                    </li>
                                    <li
                                        className="second-drop__menu"
                                        value="3D max"
                                        onClick={handleCategory}
                                    >
                                        3D max
                                    </li>
                                </ul>
                            </li>
                            <li className="first-drop__menu">
                                <span>Dizayn</span>
                                <ul className="second-drop">
                                    <li
                                        value="Web dizayn"
                                        className="second-drop__menu"
                                        onClick={handleCategory}
                                    >
                                        Web dizayn
                                    </li>
                                    <li
                                        className="second-drop__menu"
                                        value="Grafik dizayn"
                                        onClick={handleCategory}
                                    >
                                        Grafik dizayn
                                    </li>
                                    <li
                                        className="second-drop__menu"
                                        value="Moushn dizayn"
                                        onClick={handleCategory}
                                    >
                                        Moushn dizayn
                                    </li>
                                    <li
                                        className="second-drop__menu"
                                        value="3D max"
                                        onClick={handleCategory}
                                    >
                                        3D max
                                    </li>
                                </ul>
                            </li>
                            <li className="first-drop__menu">
                                <span>San'at</span>
                                <ul className="second-drop">
                                    <li
                                        value="Web dizayn"
                                        className="second-drop__menu"
                                        onClick={handleCategory}
                                    >
                                        Web dizayn
                                    </li>
                                    <li
                                        className="second-drop__menu"
                                        value="Grafik dizayn"
                                        onClick={handleCategory}
                                    >
                                        Grafik dizayn
                                    </li>
                                    <li
                                        className="second-drop__menu"
                                        value="Moushn dizayn"
                                        onClick={handleCategory}
                                    >
                                        Moushn dizayn
                                    </li>
                                    <li
                                        className="second-drop__menu"
                                        value="3D max"
                                        onClick={handleCategory}
                                    >
                                        3D max
                                    </li>
                                </ul>
                            </li>
                            <li className="first-drop__menu">
                                <span>Iqtisod</span>
                                <ul className="second-drop">
                                    <li
                                        value="Web dizayn"
                                        className="second-drop__menu"
                                        onClick={handleCategory}
                                    >
                                        Web dizayn
                                    </li>
                                    <li
                                        className="second-drop__menu"
                                        value="Grafik dizayn"
                                        onClick={handleCategory}
                                    >
                                        Grafik dizayn
                                    </li>
                                    <li
                                        className="second-drop__menu"
                                        value="Moushn dizayn"
                                        onClick={handleCategory}
                                    >
                                        Moushn dizayn
                                    </li>
                                    <li
                                        className="second-drop__menu"
                                        value="3D max"
                                        onClick={handleCategory}
                                    >
                                        3D max
                                    </li>
                                </ul>
                            </li>
                            <li className="first-drop__menu">
                                <span>Biznes</span>
                                <ul className="second-drop">
                                    <li
                                        value="Web dizayn"
                                        className="second-drop__menu"
                                        onClick={handleCategory}
                                    >
                                        Web dizayn
                                    </li>
                                    <li
                                        className="second-drop__menu"
                                        value="Grafik dizayn"
                                        onClick={handleCategory}
                                    >
                                        Grafik dizayn
                                    </li>
                                    <li
                                        className="second-drop__menu"
                                        value="Moushn dizayn"
                                        onClick={handleCategory}
                                    >
                                        Moushn dizayn
                                    </li>
                                    <li
                                        className="second-drop__menu"
                                        value="3D max"
                                        onClick={handleCategory}
                                    >
                                        3D max
                                    </li>
                                </ul>
                            </li>
                            <li className="first-drop__menu">
                                <span>Ta'lim</span>
                                <ul className="second-drop">
                                    <li
                                        value="Web dizayn"
                                        className="second-drop__menu"
                                        onClick={handleCategory}
                                    >
                                        Web dizayn
                                    </li>
                                    <li
                                        className="second-drop__menu"
                                        value="Grafik dizayn"
                                        onClick={handleCategory}
                                    >
                                        Grafik dizayn
                                    </li>
                                    <li
                                        className="second-drop__menu"
                                        value="Moushn dizayn"
                                        onClick={handleCategory}
                                    >
                                        Moushn dizayn
                                    </li>
                                    <li
                                        className="second-drop__menu"
                                        value="3D max"
                                        onClick={handleCategory}
                                    >
                                        3D max
                                    </li>
                                </ul>
                            </li>
                            <li className="first-drop__menu">
                                <span>Sog'liqni saqlash</span>
                                <ul className="second-drop">
                                    <li
                                        value="Web dizayn"
                                        className="second-drop__menu"
                                        onClick={handleCategory}
                                    >
                                        Web dizayn
                                    </li>
                                    <li
                                        className="second-drop__menu"
                                        value="Grafik dizayn"
                                        onClick={handleCategory}
                                    >
                                        Grafik dizayn
                                    </li>
                                    <li
                                        className="second-drop__menu"
                                        value="Moushn dizayn"
                                        onClick={handleCategory}
                                    >
                                        Moushn dizayn
                                    </li>
                                    <li
                                        className="second-drop__menu"
                                        value="3D max"
                                        onClick={handleCategory}
                                    >
                                        3D max
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="navbar-list">
                    <p className="navbar-title">Event type</p>
                    <div className="navbar-select" onClick={handleEvent}>
                        <span ref={firstSpan} className="navbar-span active">
                            Offline
                        </span>
                        <span ref={secondSpan} className="navbar-span">
                            Online
                        </span>
                    </div>
                </li>
                <li className="navbar-list">
                    <p className="navbar-title">Spikerni tanlang</p>
                    <div className="navbar-selects">14 Fevral | 12:00</div>
                </li>
            </ul>
        </>
    );
};

export default Navbar;
