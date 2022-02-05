import { Link } from 'react-router-dom';
import './LoyihaHaqida.scss';

const LoyihaHaqida = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-left__wrapper">
                    <h2 className="about-left__title">Savollaringiz bormi?</h2>
                    <p className="about-left__text">
                        Oldindan yoki tadbirdan keyin to'lash kerakmi?
                    </p>
                    <p className="about-left__text">
                        Va agar biz bayramni yoqtirmasak, pulni bizga
                        qaytarasizmi?
                    </p>
                    <p className="about-left__text">
                        Korporativ tadbirlarni tashkil qilish uchun qancha vaqt
                        ketadi?
                    </p>
                    <p className="about-left__text">
                        Oldindan yoki tadbirdan keyin to'lash kerakmi?
                    </p>
                    <p className="about-left__text">
                        Va agar biz bayramni yoqtirmasak, pulni bizga
                        qaytarasizmi?
                    </p>
                </div>
                <div className="about-left__wrapper">
                    <h2 className="about-left__title">Ma'muriyat so'zlari</h2>
                    <p className="about-left__text">
                        Bizning veb-saytimizda ro'yxatdan o'tish orqali siz o'z
                        kasbingiz haqida taassurot va ko'plab ma'lumotlarga ega
                        bo'lish hamda undan loyihalarda foydalanish imkoniyatiga
                        ega bo'lasiz.
                    </p>
                </div>
            </div>
            <div className="about-right">
                <h2 className="about-right__title">Loyiha haqida</h2>
                <p className="about-right__small-text">
                    Bizning veb-saytimizda ro'yxatdan o'tish orqali siz o'z
                    kasbingiz haqida taassurot va ko'plab ma'lumotlarga ega
                    bo'lish hamda undan loyihalarda foydalanish imkoniyatiga ega
                    bo'lasiz.
                </p>
                <p className="about-right__text">
                    Dizayn va kompozitsiyani baholashda o'qilishi mumkin bo'lgan
                    matn diqqatni jamlashni qiyinlashtirishi uzoq vaqtdan beri
                    aniqlangan. Lorem Ipsum ishlatiladi, chunki u ko'proq yoki
                    kamroq standart naqshlarni to'ldirishni ta'minlaydi,
                    shuningdek, xat va bo'shliqlarni xatboshilardagi haqiqiy
                    taqsimlashni ta'minlaydi, bu shunchaki "Mana sizning
                    matningiz.. Mana sizning matningiz.. Mana sizning
                    matningiz." matn.." Ko'pgina dasturlarda veb-sahifa
                    maketlari va HTML muharrirlari standart matn sifatida Lorem
                    Ipsum-dan foydalanadilar, shuning uchun "lorem ipsum" kalit
                    so'zini qidirish darhol qancha veb-sahifalar tug'ilishni
                    kutayotganini ko'rsatadi. Yillar davomida Lorem Ipsum matni
                    ko'plab versiyalarni oldi. Ba'zi versiyalar noto'g'ri paydo
                    bo'lgan, ba'zilari - ataylab (masalan, kulgili versiyalar).
                </p>
                <div className="about-right__wrapper">
                    <p>
                        Bundan tashqari, barcha boshqa ma'lum bo'lgan Lorem
                        Ipsum generatorlari bir xil matndan foydalanadilar, ular
                        kerakli hajmga yetguncha ularni takrorlaydilar. Unda 200
                        dan ortiq lotincha soʻzlardan iborat lugʻat hamda
                        jumlalar toʻplamidan foydalaniladi.
                    </p>
                </div>
                <p className="about-right__text">
                    Mana sizning matningiz.. Mana sizning matningiz.." Ko'pgina
                    veb-sahifalarni joylashtirish dasturlari va HTML
                    muharrirlari standart matn sifatida Lorem Ipsum-dan
                    foydalanadilar, shuning uchun "lorem ipsum" kalit so'zini
                    qidirish darhol qancha veb-sahifalar o'z sahifalarini
                    kutayotganini ko'rsatadi. real Lorem Ipsum matni yillar
                    davomida ko'plab versiyalarni oldi, ba'zilari xato,
                    ba'zilari dizayn bo'yicha (masalan, kulgili versiyalar).
                </p>
                <div>
                    <Link className="link" to="/">
                        {' '}
                        5 Февраль
                    </Link>
                    <Link className="link" to="/">
                        Поделится
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoyihaHaqida;
