import React from 'react';
import { changeLocale, IntlContextConsumer } from 'gatsby-plugin-intl';

import classes from './style.module.css';

const langsMap = {
  ru: 'рус',
  en: 'en',
  it: 'it',
};

const Languages = () => {
  return (
    <div className={classes.Container}>
      <IntlContextConsumer>
        {({ languages }) => {
          return languages.map(language => (
            <a
              className={classes.Link}
              key={language}
              onClick={() => changeLocale(language)}
            >
              {langsMap[language]}
            </a>
          ));
        }}
      </IntlContextConsumer>
    </div>
  );
};

export default Languages;
