import PropTypes from 'prop-types';
import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import BigRowLink from '../components/BigRowLink';
import Layout from '../components/layout';
import PriceTable from '../components/PriceTable';
import MapPropped from './index/map';
import Badge from '../components/Badge';

interface LocationLinkProps {
  locationKey: string;
  children: ReactNode;
  handleMouse: Function;
  selectedLocation: string | null;
}

function LocationLink({
  locationKey,
  children,
  handleMouse,
  selectedLocation,
}: LocationLinkProps): JSX.Element {
  return (
    <i
      onMouseEnter={(): void => {
        handleMouse(locationKey);
      }}
      onMouseLeave={(): void => handleMouse()}
      style={{
        cursor: 'default',
        borderBottom: '1px solid rgba(255,255,255, 0)',
        borderBottomColor:
          selectedLocation === locationKey ? '#ccc' : 'rgba(255,255,255, 0)',
      }}
    >
      {children}
    </i>
  );
}
LocationLink.propTypes = {
  locationKey: PropTypes.string.isRequired,
  selectedLocation: PropTypes.string,
  children: PropTypes.any,
  handleMouse: PropTypes.func.isRequired,
};

const leftColumnInitialState = {
  locations: [{ label: 'unter Stadtwerke/EVH', key: 'evh' }],
  selectedLocation: null,
};

interface Location {
  label: string;
  key: string;
}
interface LeftColumnState {
  locations: Location[];
  selectedLocation: string | null;
}

class LeftColumn extends React.Component<object, LeftColumnState> {
  public readonly state: LeftColumnState = leftColumnInitialState;
  public handleMouseOver(locationKey?: string): void {
    this.setState({
      selectedLocation: locationKey || null,
    });
  }
  public render(): JSX.Element {
    const { selectedLocation } = this.state;
    return (
      <ContentLeft>
        {' '}
        <H2MobileHidden>Wo in Halle parken?</H2MobileHidden>
        <p>
          Parken Sie doch mal direkt im Zentrum &ndash; rund um die Uhr in drei
          Tiefgaragen: Unter{' '}
          <LocationLink
            locationKey="evh"
            selectedLocation={selectedLocation}
            handleMouse={this.handleMouseOver.bind(this)}
          >
            Stadtwerke/EVH
          </LocationLink>
          , unter{' '}
          <LocationLink
            locationKey="haendelhalle"
            selectedLocation={selectedLocation}
            handleMouse={this.handleMouseOver.bind(this)}
          >
            Friedrich-G.-Händelhalle
          </LocationLink>{' '}
          und am{' '}
          <LocationLink
            locationKey="hallmarkt"
            selectedLocation={selectedLocation}
            handleMouse={this.handleMouseOver.bind(this)}
          >
            Hallmarkt unter REWE City
          </LocationLink>
          . Die Zufahrt erfolgt jeweils über die Herrenstraße.
        </p>
        <MapPropped selectedLocation={selectedLocation} />
      </ContentLeft>
    );
  }
}

const H2MobileHidden = styled('h2')`
  @media (max-width: 760px) {
    display: none;
  }
`;

const ContentRight = styled('div')`
  @media (min-width: 760px) {
    float: right;
    width: 50%;
    padding-left: 1.0875rem;
  }
`;

const ContentLeft = styled('div')`
  @media (min-width: 760px) {
    float: left;
    width: 50%;
    padding-right: 1.0875rem;
  }
  @media (max-width: 761px) {
    padding-top: 2.175rem;
  }
`;

const ContactRow = styled('div')`
  display: flex;
`;
const ContactLabel = styled('div')`
  width: 5em;
  text-align: right;
  padding-right: 1em;
`;
const ContactItem = styled('div')`
  flex: 1;
  flex-grow: 1;
`;

const TextLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

const RightColumn = (): JSX.Element => (
  <ContentRight>
    <PriceTable />
    <BigRowLink href="mailto:mail@parken-halle.de?subject=Mietanfrage&amp;body=Sehr%20geehrte%20Damen%20und%20Herren%2C%0A%0Aich%20habe%20Interesse%20an%20einem%20Dauerstellplatz%3A%0A%0AName%3A%20%0AZeitraum%3A%20%0AParkplatz%3A%20TG%20unter%20EVH%2F%20TG%20am%20Hallmarkt%20%2F%20H%C3%A4ndel-Halle%0ANutzung%3A%20Privat%20oder%20Gewerblich%0AE-Mail%3A%20%0AAnschrift%3A%20">
      Jetzt Mietanfrage senden!
    </BigRowLink>
    <br />
    <ContactRow>
      <ContactLabel>Kontakt</ContactLabel>
      <ContactItem>
        <a href="mailto:mail@parken-halle.de">mail@parken-halle.de</a>
      </ContactItem>
    </ContactRow>
    <ContactRow>
      <ContactLabel> </ContactLabel>
      <ContactItem>
        <TextLink href="tel:+49 176 24132876">0176 24132876</TextLink>
      </ContactItem>
    </ContactRow>
    <ContactRow>
      <ContactLabel>oder</ContactLabel>
      <ContactItem>
        <TextLink href="tel:+49 345 6785666">0345 6785666</TextLink>
      </ContactItem>
    </ContactRow>
    <br />
  </ContentRight>
);

const IndexPage = (): JSX.Element => (
  <Layout>
    <div>
      <LeftColumn />
      <RightColumn />
      <Badge>Aktuell alle Dauerparkplätze belegt!</Badge>

      <br style={{ clear: 'both' }} />
    </div>
  </Layout>
);

export default IndexPage;
