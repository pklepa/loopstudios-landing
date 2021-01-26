import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme";

import GlobalStyle from "./assets/styles/globalStyles.js";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Layout>
        <MobileMenu showMenu={showMenu} />
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
