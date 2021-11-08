import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const UnstyledFooter = ({ className }: { className?: string }): JSX.Element => (
  <footer className={className}>
    <Link href="/impressum">
      <a>Impressum</a>
    </Link>{' '}
    <Link href="/datenschutz">
      <a>Datenschutzerklärung</a>
    </Link>
    <br style={{ clear: 'both' }} />
  </footer>
);

export const Footer = styled(UnstyledFooter)`
  clear: both;
  padding: 10px 25px;
  margin-top: 22px;
  border-top: 1px solid #cdcdcd;
  text-align: center;
  position: relative;
  a {
    font-size: 12px;
  }
  a:hover {
    color: #003082;
  }
`;
