import styles from "./style";
import { Cursor, Feature, HeaderMenu, Introduce, Home,BackTopButton } from "./components";

const App = () => (
  <section >
    <Cursor />
    <HeaderMenu />
    <Home />
    <Introduce />
    <Feature/>
    <BackTopButton />
  </section>
);

export default App;
