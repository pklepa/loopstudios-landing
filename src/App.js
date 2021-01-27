import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme";

import GlobalStyle from "./assets/styles/globalStyles.js";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu";
import HeroSection from "./components/HeroSection";
import ArticleSection from "./components/ArticleSection";
import GallerySection from "./components/GallerySection";
import Footer from "./components/Footer";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Layout>
        <MobileMenu showMenu={showMenu} />
        <HeroSection>
          <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
          <div className="limit title-wrapper">
            <h1 className="title">Immersive Experiences That Deliver</h1>
          </div>
        </HeroSection>

        <ArticleSection />

        <GallerySection />

        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
