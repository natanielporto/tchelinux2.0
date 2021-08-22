import Head from 'next/head';
import React from 'react';
import MidSection from '../components/MidSection';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet" />
      </Head>

      <NavBar />
      <MidSection />
    </div>
  );
}

export default Home;
