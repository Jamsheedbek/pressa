import FooterTop from '../components/Footer-top/Footer-top';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HomeSection from '../components/HomeSection/HomeSection';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <HomeSection />
            <FooterTop />
            <Footer />
        </>
    );
};

export default Home;
