import GlobalStyles from "../assets/styles/GlobalStyles";
import Header from "../components/section/header/v1/Header";
import Layout from "../common/layout";
import Banner from "../components/section/banner/v1";

import TeamImage from "../components/section/ImageTeam/v1";
import About from "../components/section/about/v1";
import Team from "../components/section/team/v1";
import Team2 from "../components/section/team/v2";

import FAQ from "../components/section/faq/v3";
import Footer from "../components/section/footer/v1";

const HomeV1 = () => {

  return (
    <Layout>
      <GlobalStyles />
      <Header />
      <Banner />
      <About />
      <TeamImage />
      <Team />
      <Team2 />
      <FAQ />
      <Footer />
    </Layout>
  );
};

export default HomeV1;
