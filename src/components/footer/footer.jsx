import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.title}>.</p>
  </footer>
);

export default memo(Footer);
