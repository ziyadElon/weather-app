import React, { Component } from 'react';

class LocationData extends Component {

  render() {
    let temp;
    let location;
    if(this.props.data.length > 0){
      temp = this.props.data[0].the_temp;
      location = this.props.location;
    }
    return (
      <div className="location-data">
        <strong>{location}</strong>
        <span>Current temperature:</span><span className="location-data__temp">{ temp || 'N/A' }</span>
      </div>
    );
  }
}

export default LocationData;