import React from 'react';
import styles from './Introduction.module.css';

export default function Welcome({ children }) {
  return (
    <>
      <div className={styles.backgroundContainer}></div>
      <main className={styles.welcomePage}>
        <div className={styles.content}>
          {children}
        </div>
      </main>
    </>
  );
}