import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import SearchBar from "./SearchBar";

class TouristMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      searchLocation: null, // Store the selected search location
    };
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = () =>
    this.setState({
      showingInfoWindow: false,
      activeMarker: null,
    });

  onPlaceSelected = (place) => {
    if (place.geometry && place.geometry.location) {
      this.setState({
        searchLocation: place.geometry.location,
        showingInfoWindow: false, // Hide the info window when a new place is selected
      });
    }
  };

  render() {
    const { searchLocation } = this.state;

    return (
      <div style={{ position: "relative", width: "100%", height: "100vh" }}>
        {/* SearchBar overlay */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1, // Place the search bar above the map
          }}
        >
          <SearchBar onPlaceSelected={this.onPlaceSelected} />
        </div>

        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={{ lat: 37.7749, lng: -122.4194 }} // Default center
          center={searchLocation || { lat: 37.7749, lng: -122.4194 }}
        >
          {searchLocation && (
            <Marker
              onClick={this.onMarkerClick}
              name={"Marker Name"}
              position={searchLocation}
            />
          )}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCllM7V00dlcL9MPRF4AFNg7eQ5uT1vLA8",
})(TouristMap);