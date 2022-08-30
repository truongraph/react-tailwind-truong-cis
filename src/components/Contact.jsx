import { logo, logoload } from "../assets";
import HeaderMenu from "./HeaderMenu";
import SidebarMenu from "./SidebarMenu";
import Footer from "./Footer";
import BackTopButton from "./BackTopButton";
import ContactButton from "./ContactButton";
import UseMouseCursor from "./UseMouseCursor";
import React, { useState, useEffect } from "react";
const Contact = () => {
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
          <section className="relative pt-[75px] lg:pt-[100px]">
            <div className="max-w-screen-xl px-5 xl:px-16 mx-auto font-dasfont">
              <h1>About page here!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                modi!
              </p>
            </div>
          </section>
          <Footer />
          <BackTopButton />
          <ContactButton />
          <UseMouseCursor />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Contact;
