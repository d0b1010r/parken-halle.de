import React from 'react';

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
  Polyline,
} from '@react-google-maps/api';

function InfoMarker({
  info,
  icon,
  position,
  opacity,
}: InfoMarkerProps): JSX.Element {
  const [showInfo, setShowInfo] = React.useState(false);

  return (
    <Marker
      icon={icon}
      position={position}
      opacity={opacity}
      onClick={(): void => setShowInfo(!showInfo)}
    >
      {showInfo && info ? (
        <InfoWindow onCloseClick={(): void => setShowInfo(false)}>
          <div>{info}</div>
        </InfoWindow>
      ) : null}
    </Marker>
  );
}

const parkingGarageIcon = '/images/icon-parking-garage.png';

const places = {
  evh: {
    icon: parkingGarageIcon,
    position: { lat: 51.480308, lng: 11.9641 },
    info: 'Tiefgarage unter EVH',
  },
  entry: {
    icon: parkingGarageIcon,
    position: { lat: 51.480308, lng: 11.963413 },
    info: 'Einfahrt zu den Tiefgaragen',
  },
  haendelhalle: {
    icon: parkingGarageIcon,
    position: { lat: 51.481705, lng: 11.964253 },
    info: 'Tiefgarage unter Händelhalle',
  },
  hallmarkt: {
    icon: parkingGarageIcon,
    position: { lat: 51.4817, lng: 11.9656 },
    info: 'Tiefgarage Hallmarkt, REWE City',
  },
};

function createMarkers(
  places: Places,
  selectedLocation?: string
): JSX.Element[] {
  return Object.keys(places).map((key) => (
    <InfoMarker
      key={key}
      icon={places[key].icon}
      opacity={selectedLocation === null || key === selectedLocation ? 1 : 0.5}
      position={places[key].position}
      info={places[key].info}
    />
  ));
}

function createLines(places: Places, selectedLocation: string): JSX.Element[] {
  const lines: Lines = {
    evh: [
      places.entry.position,
      { lat: 51.48034713420376, lng: 11.963668093085289 },
      { lat: 51.48035381594041, lng: 11.963829025626183 },
      places.evh.position,
    ],
    haendelhalle: [
      places.entry.position,
      { lat: 51.48083489840664, lng: 11.963550075888634 },
      { lat: 51.48137611011531, lng: 11.963850483298302 },
      places.haendelhalle.position,
    ],
    hallmarkt: [
      places.entry.position,
      { lat: 51.48083489840664, lng: 11.963550075888634 },
      { lat: 51.48137611011531, lng: 11.963850483298302 },
      places.hallmarkt.position,
    ],
  };
  return Object.keys(lines).map((key) => (
    <Polyline
      key={key}
      path={lines[key]}
      options={{
        strokeOpacity:
          selectedLocation === null || key === selectedLocation ? 1 : 0.5,
        strokeColor: '#003082',
        strokeWeight: 2,
        icons: [
          {
            icon: { path: google.maps.SymbolPath.FORWARD_OPEN_ARROW },
            offset: '100%',
          },
        ],
      }}
    />
  ));
}

const containerStyle = {
  width: '400px',
  height: '400px',
};

function MapPropped({
  selectedLocation,
}: {
  selectedLocation: string;
}): JSX.Element {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDdbfN_GFY4b4IpKnGBH6L3jJWo2RXSQeU',
  });

  return isLoaded ? (
    <GoogleMap
      zoom={17}
      center={{ lat: 51.4811, lng: 11.9645 }}
      mapContainerStyle={containerStyle}
      onClick={(ev: google.maps.MapMouseEvent): void => {
        console.log(`{ lat: ${ev.latLng.lat()}, lng: ${ev.latLng.lng()} }`); // eslint-disable-line no-console
      }}
    >
      {createLines(places, selectedLocation)}
      {createMarkers(places, selectedLocation)}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default MapPropped;
