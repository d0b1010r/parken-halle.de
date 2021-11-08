import React, { ReactNode } from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import { Footer } from './Footer';

export const siteTitle = 'Parken in Halle Spitze';

const Logo = styled.img`
  position: absolute;
  bottom: -22px;
  left: 2.0875rem;
  height: 110px;
  width: 39px;
  z-index: 1;
`;

const Caption = styled('h1')`
  margin: 0;
  padding: 2px 10px;
  margin: 1.0875rem 0 1.0875rem 100px;
  display: inline-block;
  color: #003082;
  @media (max-width: 760px) {
    font-size: 1.4rem;
  }
`;

const StyledHeader = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1100px;
  height: 80px;
  display: flex;
  align-items: center;
`;

const Header = (): JSX.Element => (
  <StyledHeader>
    <Logo src="/images/logo.svg" />
    <Caption>Parken in Halle-Spitze</Caption>
  </StyledHeader>
);

const PageWrapper = styled('div')`
  margin: 0 auto;
  max-width: 1100px;
  padding: 1px 2.0875rem 1.45rem;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0 0 62px;
  position: relative;
  @media (max-width: 760px) {
    padding: 0 1.04rem 1.45rem;
  }
`;

type TemplateWrapperProps = {
  children?: ReactNode;
};

const TemplateWrapper = ({ children }: TemplateWrapperProps): JSX.Element => (
  <div>
    <Head>
      <title>{siteTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Parken Sie direkt im Zentrum – rund um die Uhr in drei Tiefgaragen: Händelhalle, EVH und Hallmarkt"
      />
      <meta
        property="keywords"
        content="parken, halle, saale, zentrum, tiefgarage, parkplatz"
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <Header />
    <PageWrapper>
      {children}
      <Footer />
    </PageWrapper>
  </div>
);

export default TemplateWrapper;
