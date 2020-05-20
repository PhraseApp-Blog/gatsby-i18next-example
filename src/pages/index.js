import React from 'react';
import { graphql } from 'gatsby';
import { Link } from '@wapps/gatsby-plugin-i18next';
import { withNamespaces } from 'react-i18next-phraseapp';
import Layout from '../components/layout';
import withI18nextPhraseApp from "../i18n/with18next";

const IndexPage = ({t}) => (
  <Layout>
    <h1>{t('Hi people')}</h1>
    <p>{t('Welcome to your new Gatsby site.')}</p>
    <p>{t('Now go build something great.')}</p>
    <Link to="/page-2/">{t('Go to page 2')}</Link>
  </Layout>
);

export default withI18nextPhraseApp()(withNamespaces()(IndexPage));

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...LocaleFragment
    }
  }
`;
