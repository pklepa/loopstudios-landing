import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme";

import GlobalStyle from "./assets/styles/globalStyles.js";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import { useState } from "react";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Layout>
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
