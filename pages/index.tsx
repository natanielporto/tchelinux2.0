import React from 'react';
import TeaserPage from './teaserpage';

function Home() {
  const isTeaserTime = true;

  return (
    <>
      {isTeaserTime ? (
        <TeaserPage />
      ) : (
        <div>Em construção</div>
      )}
    </>
  );
}

export default Home;
