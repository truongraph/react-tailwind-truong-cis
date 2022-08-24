import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, HeaderMenu, Stats, Testimonials, Hero } from "./components";

const App = () => (
  
  <div className={`${styles.bgWhite} w-full `}>
    <div className={`${styles.paddingX} ${styles.flexCenter} header-das`}>
      <div className={`${styles.boxWidth}`}>
        <HeaderMenu />
      </div>
    </div>

    {/* <div className={`${styles.bgWhite}  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`${styles.bgWhite} ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div> */}
  </div>
);

export default App;
