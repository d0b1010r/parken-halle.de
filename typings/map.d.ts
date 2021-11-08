type InfoMarkerState = {
  showInfo: boolean;
};

type Coords = {
  lat: number;
  lng: number;
};

type InfoMarkerProps = {
  info: string;
  icon: string;
  position: Coords;
  opacity: number;
};

type Place = {
  position: Coords;
  info: string;
  icon: any;
};

type Lines = {
  [index: string]: Coords[];
};

type Places = {
  [index: string]: Place;
};
