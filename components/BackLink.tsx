import React, { ReactNode } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const BackLinkStyled = styled.a`
  display: block;
  margin-top: 2em;
`;

type BackLinkProps = {
  to?: string;
  children?: ReactNode;
};

export default function BackLink({ to, children }: BackLinkProps): JSX.Element {
  return (
    <Link href={to || '/'} passHref>
      <BackLinkStyled>{children || 'Zurück'}</BackLinkStyled>
    </Link>
  );
}
BackLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.any,
};

BackLink.defaultTypes = {
  to: '/',
};
