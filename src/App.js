import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Theme";
import { ThemeProvider } from "styled-components";

import Navigation from "./components/Navigation";
import CreateForm from "./components/sections/CreateForm";
import Inicio from "./components/sections/Inicio";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Web3Modal } from "@web3modal/react";
import Form2 from "./components/sections/Form2";
import Wallet from "./components/sections/wallet";
import Write from "./components/Write";
import ContractRead from "./components/ContractRead";
import { chains, providers } from "@web3modal/ethereum";
import HumanityProof from "./components/sections/HumanityProof";
import Wallet  from "./components/sections/Wallet";
import Mint from "./components/sections/Mint";
import Yourid from "./components/sections/Yourid";


const config = {
  projectId: "1ddbee9a91fd7c5851370409ec76d503",
  theme: "dark",
  accentColor: "default",
  ethereum: {
    appName: "web3Modal",
    autoConnect: true,
    chains: [chains.polygonMumbai],
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
          <Write />
          <ContractRead />
          <Inicio />
          <HumanityProof />
          <CreateForm />
          <Wallet/>
          <Mint/>
          <Yourid/>
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
