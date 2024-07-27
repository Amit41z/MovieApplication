/* eslint-disable react-refresh/only-export-components */
// import SectionWrapper from "../Hoc/SectionWrapper";
import { SEO } from "../components";
import { Hero, TrendingMovie, TrendingPeople, TrendingTv } from "../container";

const Home = () => {
  return (
    <>
    <SEO title="PopcornPicks - A Movie Application"/>
      <section>
        <Hero />
        <TrendingMovie />
        <TrendingPeople />
        <TrendingTv />
      </section>
    </>
  );
};

export default Home;