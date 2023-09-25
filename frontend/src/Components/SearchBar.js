import React from "react";
import Autocomplete from "react-google-autocomplete";

const SearchBar = ({ onPlaceSelected }) => {
  const handlePlaceSelect = (place) => {
    if (place.geometry && place.geometry.location) {
      onPlaceSelected(place.geometry.location);
    }
  };

  return (
    <Autocomplete
      onPlaceSelected={handlePlaceSelect}
      types={["(regions)"]}
      placeholder="Search for a location"
    />
  );
};

export default SearchBar;
