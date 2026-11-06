
import { Sprout, ArrowRight, Leaf, Droplets, CloudSun, ChartNoAxesCombined } from "lucide-react";
import "./LandingPage.css";

const services = [
  {
    icon: Sprout,
    title: "Ekinlarni boshqarish",
    description: "Ekinlaringiz, o‘sish bosqichlari va holatini bir joyda kuzating.",
  },
  {
    icon: Droplets,
    title: "Aqlli sug‘orish",
    description: "Sug‘orish vazifalarini rejalashtiring va vaqtni tejang.",
  },
  {
    icon: CloudSun,
    title: "Fermer tavsiyalari",
    description: "Ob-havo va ekin holatiga mos tavsiyalarni ko‘rib boring.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Xo‘jalik nazorati",
    description: "Maydonlar va ekinlar haqidagi ma’lumotlarni bir joyda boshqaring.",
  },
];

export default function LandingPage({ onEnter }) {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <a className="landing-logo" href="#home">
          <span className="landing-logo-icon"><Sprout size={27} /></span>
          <span>Smart<span>Farm</span></span>
        </a>

        <nav className="landing-nav">
          <a href="#home">Bosh sahifa</a>
          <a href="#services">Imkoniyatlar</a>
          <a href="#about">Biz haqimizda</a>
        </nav>

        <button className="landing-login" onClick={onEnter}>
          Fermer paneli <ArrowRight size={17} />
        </button>
      </header>

      <main>
        <section className="landing-hero" id="home">
          <div className="landing-hero-overlay" />
          <div className="landing-hero-content">
            <span className="landing-eyebrow">
              <Leaf size={16} /> ZAMONAVIY DEHQONCHILIK
            </span>

           <h1>
  Yerga mehr bering.<br />
  <span>Hosilingizni ko‘paytiring.</span>
</h1>

<p>
  SmartFarm yordamida maydonlaringizni boshqaring,
  sug‘orish ishlarini rejalashtiring va xo‘jaligingiz
  samaradorligini oshiring.
</p>

            <div className="landing-hero-actions">
              <button className="landing-primary" onClick={onEnter}>
                Boshqaruv paneliga kirish <ArrowRight size={18} />
              </button>
              <a className="landing-secondary" href="#services">
                Imkoniyatlar bilan tanishish
              </a>
            </div>

            <div className="landing-trust">
              <span className="landing-trust-icon"><Sprout size={20} /></span>
              <span>
                <strong>Bir platforma.</strong>
                <small>Butun xo‘jaligingiz-nazoratingizda.</small>
              </span>
            </div>
          </div>
        </section>

       

<section className="landing-services" id="services">
  <div className="landing-section-heading">
    <span className="landing-eyebrow">BIZNING IMKONIYATLAR</span>
    <h2>
      Fermer xo‘jaligingiz uchun
      <br />
      ishonchli yechimlar
    </h2>
    <p>
      Kundalik qishloq xo‘jaligi ishlarini oson rejalashtiring,
      maydonlaringizni boshqaring va hosildorlikni oshiring.
    </p>
  </div>

  <div className="landing-service-grid">
    <article className="landing-service-card">
      <img
        className="landing-service-photo"
        src="/images/fields.jpg"
        alt="Yashil ekin maydoni"
      />
      <div className="landing-service-content">
        <span className="landing-service-number"></span>
        <h3>Maydonlarni boshqarish</h3>
        <p>
          Maydonlar maydoni, tuproq turi va boshqa muhim
          ma’lumotlarni bir joyda saqlang.
        </p>
        <button onClick={onEnter} className="landing-card-link">
          Batafsil ma’lumot <ArrowRight size={16} />
        </button>
      </div>
    </article>

    <article className="landing-service-card">
      <img
        className="landing-service-photo"
        src="/images/crops.jpg"
        alt="Sog‘lom va yashil ekinlar"
      />
      <div className="landing-service-content">
        <span className="landing-service-number"></span>
        <h3>Ekinlarni kuzatish</h3>
        <p>
          Ekin turlarini, ekish sanalarini va o‘sish holatini
          muntazam nazorat qiling.
        </p>
        <button onClick={onEnter} className="landing-card-link">
          Batafsil ma’lumot <ArrowRight size={16} />
        </button>
      </div>
    </article>

    <article className="landing-service-card">
      <img
        className="landing-service-photo"
        src="/images/irrigation.jpg"
        alt="Ekin maydonini sug‘orish"
      />
      <div className="landing-service-content">
        <span className="landing-service-number"></span>
        <h3>Sug‘orishni rejalashtirish</h3>
        <p>
          Sug‘orish vazifalarini rejalashtiring va muhim
          ishlarni o‘z vaqtida bajaring.
        </p>
        <button onClick={onEnter} className="landing-card-link">
          Batafsil ma’lumot <ArrowRight size={16} />
        </button>
      </div>
    </article>
  </div>
</section>



        
<section className="landing-about" id="about">
  <div className="landing-about-image">
    <img
      src="/images/fields.jpg"
      alt="Yashil qishloq xo‘jaligi maydoni"
    />
    <div className="landing-about-badge">
      <Sprout size={28} />
      <span>
        <strong>SmartFarm Planner</strong>
        <small>Zamonaviy fermer xo‘jaligi</small>
      </span>
    </div>
  </div>

  <div className="landing-about-content">
    <span className="landing-eyebrow">BIZ HAQIMIZDA</span>

    <h2>
      Fermer xo‘jaligingizni
      <br />
      <span>aqlli boshqaring</span>
    </h2>

    <p className="landing-about-description">
      SmartFarm Planner — qishloq xo‘jaligi ishlarini bitta
      platformada rejalashtirish va boshqarish uchun qulay yechim.
      Maydonlar, ekinlar va kundalik vazifalarni tartibli nazorat qiling.
    </p>

    <div className="landing-about-feature">
      <span className="landing-about-check">✓</span>
      <div>
        <h3>Maydonlar va ekinlar nazorati</h3>
        <p>Barcha muhim ma’lumotlaringiz bir joyda.</p>
      </div>
    </div>

    <div className="landing-about-feature">
      <span className="landing-about-check">✓</span>
      <div>
        <h3>Kundalik ishlarni rejalashtirish</h3>
        <p>Sug‘orish va boshqa vazifalarni o‘z vaqtida bajaring.</p>
      </div>
    </div>

    <button className="landing-primary" onClick={onEnter}>
      Ishni boshlash <ArrowRight size={18} />
    </button>
  </div>
</section>
      </main>

     
<footer className="landing-footer">
  <div className="landing-footer-main">
    <div className="landing-footer-brand">
      <a className="landing-logo" href="#home">
        <span className="landing-logo-icon">
          <Sprout size={23} />
        </span>
        <span>Smart<span>Farm</span></span>
      </a>

      <p>
        Fermer xo‘jaligingizni boshqarish, ekinlarni kuzatish
        va kundalik ishlarni rejalashtirish uchun qulay platforma.
      </p>
    </div>

    <div className="landing-footer-links">
      <h3>Tezkor havolalar</h3>
      <a href="#home">Bosh sahifa</a>
      <a href="#services">Imkoniyatlar</a>
      <a href="#about">Biz haqimizda</a>
    </div>

    <div className="landing-footer-contact">
      <h3>SmartFarm Planner</h3>
      <p>Qishloq xo‘jaligini raqamli boshqarish.</p>
      <button onClick={onEnter} className="landing-footer-button">
        Fermer paneliga o‘tish <ArrowRight size={16} />
      </button>
    </div>
  </div>

  <div className="landing-footer-bottom">
    <p>
      © {new Date().getFullYear()} SmartFarm Planner.
      Barcha huquqlar himoyalangan.
    </p>
    <a href="#home">Yuqoriga qaytish ↑</a>
  </div>
</footer>

    </div>
  );
}
