import { Link, useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import Languages from '../component/languages/Languages';

import classes from './main.module.css';

export default function Home() {
  const intl = useIntl();

  return (
    <article className={classes.Main}>
      <section className={classes.LeftAside}>
        <p>{intl.formatMessage({ id: 'location' })}</p>
      </section>
      <section>
        <h1 className={classes.Heading}>
          {intl.formatMessage({ id: 'apartments-lake-como' })}
        </h1>
        <p className={classes.Paragraph}>
          {intl.formatMessage({ id: 'about-lario' })}
        </p>
      </section>
      <section className={classes.ImageContainer}>
        <div className={classes.AboutBot}>
          <Link className={classes.Link} to="/about/">
            {intl.formatMessage({ id: 'more' })} ⟶
          </Link>
        </div>
      </section>
      <aside className={classes.RightAside}>
        <i />
        <i>Logo</i>
        <Languages />
      </aside>
    </article>
  );
}
