import {
  UseMouseCursor,
  Feature,
  HeaderMenu,
  Introduce,
  Home,
  BackTopButton,
  GetStarted,
  PricingMain,
  MoblieSection,
  Footer,
} from "./components";

const App = () => (
  <>
    <section>
      <UseMouseCursor />
      <HeaderMenu />
      <Home />
      <Introduce />
      <Feature />
      <GetStarted />
      <PricingMain />
      <MoblieSection />
      <Footer />
      <BackTopButton />
    </section>
  </>
);

export default App;
