import React from 'react';
import NavBar from '../NavBar';
import styles from '../../styles/components/LandingPageLayout.module.css';

const LandingPageLayout = ({ children }) => (
  <div className={styles.centralized}>
    <NavBar />
    {children}
  </div>
);

export default LandingPageLayout;
