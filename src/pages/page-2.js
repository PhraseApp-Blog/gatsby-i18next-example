import React from 'react';
import { graphql } from 'gatsby';
import { Link } from '@wapps/gatsby-plugin-i18next';
import withI18nextPhraseApp from '../i18n/with18next';

import Layout from '../components/layout';
import { withNamespaces } from "react-i18next-phraseapp";

const SecondPage = ({t}) => (
  <Layout>
    <h1>{t('Hi from the second page')}</h1>
    <p>{t('Welcome to page 2')}</p>
    <Link to="/">{t('Go back to the homepage')}</Link>
  </Layout>
);

export default withI18nextPhraseApp()(withNamespaces()(SecondPage));

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...LocaleFragment
    }
  }
`;
