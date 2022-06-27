import Head from "next/head";
import Image from "next/image";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Header from "../components/homePage/Header";
import Nav from "../components/homePage/Nav";
import Banner from "../components/homePage/Banner";
import PromoContainer from "../components/homePage/PromoContainer";
import Footer from "../components/homePage/Footer";
import ListArticle from "../components/homePage/ListArticle";

export default function Home({ data }) {
  console.log(data);
  return (
    <div className="flex flex-col bg-[#eaeded]Ò ">
      <Head>
        <title>
          Amazon.fr : livres,DVD,jeux Videos,musique,high tech,informatique
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />
      {/* Nav */}
      <Nav />
      <div className="max-w-screen-2xl mx-auto">
        {/* carousel */}
        <Banner />
        {/* Proposition category */}
        <div className="md:px-4">
          <PromoContainer />
          <ListArticle data={data }/>
        </div>
      </div>

      {/* Selections: Les plus demandés des jeux videos */}

      {/* Selections: Jeansles plus aprecies des homes*/}

      {/* Category autres */}

      {/*  */}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const DataFetch = await fetch(
    // "https://api.escuelajs.co/api/v1/products?offset=0&limit=5"
    'https://fakestoreapi.com/products?limit=8'
  );
  const data = await DataFetch.json();

  return {
    props: { data: data }, // will be passed to the page component as props
  };
}
