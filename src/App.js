import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Theme";
import { ThemeProvider } from "styled-components";

// import { lazy, Suspense } from "react";
// import Loading from "./components/Loading";

// Below Imports using React.lazy and Suspence

// const Navigation = lazy(() => import("./components/Navigation"));
// const Home = lazy(() => import("./components/sections/Home"));
// const About = lazy(() => import("./components/sections/About"));
// const Roadmap = lazy(() => import("./components/sections/Roadmap"));
// const Team = lazy(() => import("./components/sections/Team"));
// const Showcase = lazy(() => import("./components/sections/Showcase"));
// const Faq = lazy(() => import("./components/sections/Faq"));
// const Footer = lazy(() => import("./components/Footer"));
// const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

import Navigation from "./components/Navigation";
import About from "./components/sections/About";
import Home from "./components/sections/Home";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { ConfigOptions } from "@web3modal/react";
import { Web3Modal } from "@web3modal/react";

const config = {
  projectId: "1ddbee9a91fd7c5851370409ec76d503",
  theme: "dark",
  accentColor: "default",
  ethereum: {
    appName: "web3Modal",
  },
};

function App() {
  return (
    <>
      <main>
        <GlobalStyles />
        <ThemeProvider theme={light}>
          {/* <Suspense fallback={<Loading />}> */}
          <Navigation />
          <Home />
          <About />
          <Footer />
          {/* <ScrollToTop scrollPosition={y}/> */}
          <ScrollToTop /> {/* </Suspense> */}
        </ThemeProvider>
      </main>
      <Web3Modal config={config} /> {/* envía el config al walletconnect */}
    </>
  );
}

export default App;
