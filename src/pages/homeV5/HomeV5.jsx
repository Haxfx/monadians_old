import { useModal } from "../../utils/ModalContext";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import Layout from "../../common/layout";
import Header from "../../components/section/header/v2";
import Banner from "../../components/section/banner/v5";
import About from "../../components/section/about/v5";
import RoadMap from "../../components/section/roadMap/v5";
import FAQ from "../../components/section/faq/v5";
import Team from "../../components/section/team/v5";
import Mint from "../../components/section/mint/v1";
import MintNowModal from "../../common/modal/mintNowModal";
import WalletModal from "../../common/modal/walletModal/WalletModal";
import StyleWrapper from "./StyleWrapper";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const HomeV5 = () => {
  const { visibility, walletModalvisibility } = useModal();

  return (
    <>
      <Layout>
        <GlobalStyles />
        {visibility && <MintNowModal />}
        {walletModalvisibility && <WalletModal />}
        <Header />

        <StyleWrapper>
          <Tabs>
            <TabList>
              <Tab>
                <span>01.</span> Home
              </Tab>
              <Tab>
                <span>02.</span> About
              </Tab>
              <Tab>
                <span>03.</span> Roadmap
              </Tab>
              <Tab>
                <span>04.</span> Team
              </Tab>
              <Tab>
                <span>05.</span> FAQ
              </Tab>
              <Tab>
                <span>06.</span> Mint
              </Tab>
            </TabList>

            <TabPanel>
              <Banner />
            </TabPanel>
            <TabPanel>
              <About />
            </TabPanel>
            <TabPanel>
              <RoadMap />
            </TabPanel>
            <TabPanel>
              <Team />
            </TabPanel>
            <TabPanel>
              <FAQ />
            </TabPanel>
            <TabPanel>
              <Mint />
            </TabPanel>
          </Tabs>
        </StyleWrapper>
      </Layout>
    </>
  );
};

export default HomeV5;
