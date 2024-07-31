import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type ListItem = {
  name: string;
  link: string;
};

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ListItem[];
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Getting Started',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: [
      {
        name: 'Introduction',
        link: '/docs/introduction',
      },
      {
        name: 'Installation',
        link: '/docs/installation',
      },
      {
        name: 'Quick Start',
        link: '/docs/quick-start',
      },
    ],
  },
  {
    title: 'Using Fiskl',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: [
      {
        name: 'Introduction',
        link: '/docs/introduction',
      },
      {
        name: 'Installation',
        link: '/docs/installation',
      },
      {
        name: 'Quick Start',
        link: '/docs/quick-start',
      },
    ],
  },
  {
    title: 'Accounting & Reports',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: [
      {
        name: 'Introduction',
        link: '/docs/introduction',
      },
      {
        name: 'Installation',
        link: '/docs/installation',
      },
      {
        name: 'Quick Start',
        link: '/docs/quick-start',
      },
    ],
  },
];

const Feature = ({ title, Svg, description }: FeatureItem) => (
  <div className={clsx('col col--4')}>
    <div className="text--center">
      <Svg className={styles.featureSvg} role="img" />
    </div>
    <div className={clsx('text--center padding-horiz--md', styles.listContainer)}>
      <Heading as="h3">{title}</Heading>
      <ul className={styles.list}>
        {description.map((item, index) => (
          <li key={index} className={styles.listItem}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className={styles.backgroundImageContainer}>
      <div className={styles.backgroundImage}></div>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
