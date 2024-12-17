import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { useEffect } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          How can we <strong>help you</strong> today?
        </Heading>
        <div className={styles.buttons}>
          {/* Add any buttons here if needed */}
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return <></>; // Renders nothing
}
