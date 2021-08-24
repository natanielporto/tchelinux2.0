import React from 'react';

import styles from '../../styles/components/EventLogoHero.module.css';

const wifiSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" className={styles.livesvg} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>
);

const EventLogoHero = () => (
  <>
    <div className={styles.placement}>
      <div className={styles.textlive}>
        Live
        <strong>2021</strong>
      </div>
      {wifiSvg}
      <div className={styles.tchelogo}>Tchelinux</div>
      <span className={styles.youtubelink}><a href="https://www.youtube.com/tchelinux" target="_blank" rel="noreferrer">youtube.com/tchelinux</a></span>
    </div>
  </>
);

export default EventLogoHero;
