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
  ContactButton,
  SidebarMenu,
} from "./components";
import { logoload } from "./assets";
import React, { useState, useEffect } from "react";
const App = () => {
  useEffect(() => {
    document.title = "Phần mềm quản lý phòng khám DA CLOUD"
}, [])
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <React.Fragment>
      {loading ? (
        <div className="loader-container bg-gradient-to-r from-green-500 to-green-600">
          <div>
          <img
            src={logoload}
            alt="Logo"
            className="block m-auto w-[220px] ml-[5px]"
          />
          <div className="spinner"></div>
          </div>
        </div>
      ) : (
        <React.Fragment>
          <SidebarMenu />
          <HeaderMenu />
          <Home />
          <Introduce />
          <Feature />
          <GetStarted />
          <PricingMain />
          <MoblieSection />
          <Footer />
          <BackTopButton />
          <ContactButton />
          <UseMouseCursor />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default App;
