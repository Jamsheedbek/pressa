import './HomeSection.scss';

const HomeSection = () => {
    return (
        <div className="wrapper">
            <div className="card">
                {Array.from(new Array(12)).map((e, i) => (
                    <div key={i} className="card-wrapper">
                        <h2 className="card-date">10:00</h2>
                        <h2 className="card-date">14 Fevral</h2>
                        <span className="card-event">Online</span>
                        <h3 className="card-title">
                            Ikrom Sharif bilan “Najot taʼlimdadir” mavzusida
                            suhbat boʻlib oʻtadi
                        </h3>
                        <i className="card-holder">
                            Ux/Ui dezayner: Janizakov Abbosjon
                        </i>
                    </div>
                ))}
            </div>
            <div className="card-button">
                <div className="card-btn">Yana yuklash</div>
            </div>
        </div>
    );
};

export default HomeSection;
