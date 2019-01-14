import React, { Component } from "react";
import { Map, TileLayer, Popup, Marker } from "react-leaflet";

import "./SinglePage.scss";

class MapPlace extends Component {
  render() {
    const position = [this.props.lat, this.props.long];
    return (
      <Map maxBounds={[[-90, -180], [90, 180]]} center={position} zoom="17">
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} />
      </Map>
    );
  }
}

export default MapPlace;
