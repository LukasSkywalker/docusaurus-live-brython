import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    const { withBaseUrl } = useBaseUrlUtils();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to={withBaseUrl('/demo')}
                    >
                        Live Demo
                    </Link>
                    <Link
                        className="button button--secondary button--lg"
                        to={withBaseUrl('docs')}
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader />
            <main>
                <section className={clsx(styles.section)}>
                        <div className={clsx('card', styles.card)}>
                            <div className="card__image">
                                <img src={require('./images/brython-demo.gif').default} />
                            </div>
                            <div className="card__footer">
                                <a className="button button--primary button--block" href={useBaseUrl('/demo')}>Try It!</a>
                            </div>
                        </div>
                </section>
            </main>
        </Layout>
    );
}